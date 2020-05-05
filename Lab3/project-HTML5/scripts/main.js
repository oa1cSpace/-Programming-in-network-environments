let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
let radius = 70;
let eyeRadius = 10;
let eyeXOffset = 25;
let eyeYOffset = 20;
// малювання жовтого кола
context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'yellow';
context.fill();
context.lineWidth = 5;
context.strokeStyle = 'black';
context.stroke();
// малювання двох очей
context.beginPath();
let eyeX = centerX - eyeXOffset;
let eyeY = centerY - eyeXOffset;
context.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI * 0.5, false);
eyeX = centerX + eyeXOffset;
context.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI * 0.5, false);
context.fillStyle = 'black';
context.fill();
// малювання рота
context.beginPath();
context.arc(centerX, centerY, 50, 0, Math.PI, false);
context.stroke();

document.querySelector('#submit').onclick = (event) => {
  event.preventDefault();
  let form = document.querySelector('form');
  let fname = form.elements.Fname.value;
  let lname = form.elements.Lname.value;
  let mobile = form.elements.Mobile.value;
  let email = form.elements.email.value;

  // console.log("Fname:  " + fname);
  // console.log("Lname:  " + lname);
  // console.log("Email:  " + email);

  let namePattern = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/i;
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let mobPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let fail = false;

  if (fname == '' | '   ') {
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
      } else if (mobile == '' | '  ') {
          fail = 'Incorrect mobile number';
          alert(fail);
      } else if (mobPattern.test(mobile) == false) {
          fail = 'Incorrect mobile number';
          alert(fail);
        } else if (email == '' | '  ') {
          fail = 'Incorrect e-mail';
          alert(fail);
      } else if (emailPattern.test(email) == false) {
          fail = 'Incorrect e-mail';
          alert(fail);
        }

     else  {
      alert('OK!');
    }
}


function initMap() {
    var pos = {lat: 41.898755, lng: 12.477109};
  var opt = {
    center: pos,
    zoom: 17
  }
  var myMap = new google.maps.Map(document.getElementById('map'), opt);

  var marker = new google.maps.Marker({
    position: pos,
    map: myMap,
    title: 'You are here!'
  });
}
