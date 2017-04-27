function Student(first, last){
  this.first = first;
  this.last = last;
  this.courses = [];
}

Student.prototype.name = function(){
  return `${this.first} ${this.last}`;
};



Student.prototype.enroll = function(course){
  if (this.hasConflict(course)){
    throw "There is a course conflict";
  }
  if(!this.courses.includes(course)) {
    this.courses.push(course);
    course.students.push(this);
  }
};

Student.prototype.courseLoad = function(){
  let courseLoadObject = {};

  this.courses.forEach(course => {
    if(courseLoadObject[course.department] === undefined){
      courseLoadObject[course.department] = course.credits;
    } else {
      courseLoadObject[course.department] += course.credits;
    }
  });
  return courseLoadObject;
};

Student.prototype.hasConflict = function(newCourse) {
  let isConflict = false;
  this.courses.forEach(course => {
    if (newCourse.conflictsWith(course)) {
      isConflict = true;
    }
  });
  return isConflict;
};

function Course(name, department, credits, timeBlock, daysOfWeek) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.timeBlock = timeBlock;
  this.daysOfWeek = daysOfWeek;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
};

Course.prototype.conflictsWith = function(course) {
  let isConflict = false;
  this.daysOfWeek.forEach(day => {
    if (course.daysOfWeek.includes(day) && (this.timeBlock === course.timeBlock)) {
      isConflict = true;
    }
  });
  return isConflict;
};
