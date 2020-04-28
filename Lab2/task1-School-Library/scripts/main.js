function passvalues() {

var fail = false;

  let fname = document.getElementById("fname").value;
  localStorage.setItem("fname", fname);

  let lname = document.getElementById('lname').value;
  localStorage.setItem('lname', lname);

  let course = document.getElementById('course').value;
  localStorage.setItem('course', course);

  let gender = document.getElementsByName('gender');
    for (var i=0; i<gender.length; i++) {
        if ( gender[i].checked ) {
          localStorage.setItem('gender', gender[i].value);
            break;
        }
    }

  let major = document.getElementsByName('major');
    for (var i = 0; i < major.length; i++) {
      localStorage.setItem('major', major[i].value);
      break;
    }

    var namePattern = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/i;
    var coursePattern = /^[0-7]?$/;

    if (fname == '' | ' ') {
      fail = 'Incorrect first name!';
      alert(fail);
    } else if (namePattern.test(fname) == false) {
        fail = 'Incorrect first name!';
        alert(fail);
    } else if (lname == '' | ' ') {
        fail = 'Incorrect last name';
        alert(fail);
    } else if (namePattern.test(lname) == false) {
        fail = 'Incorrect last name';
        alert(fail);
    } else if (course == '' | ' ') {
        fail = 'Incorrect course';
        alert(fail);
    } else if (coursePattern.test(course) == false) {
        fail = 'Incorrect course';
        alert(fail);
    } else window.location = "/Lab2/task1-School-Library/pages/result.html";

  return false;
}

document.getElementById("fname").innerHTML=localStorage.getItem("fname");
document.getElementById('lname').innerHTML=localStorage.getItem('lname');
document.getElementById('course').innerHTML=localStorage.getItem('course');
document.getElementById('gender').innerHTML=localStorage.getItem('gender');
document.getElementById('major').innerHTML=localStorage.getItem('major');
