'use strict';

// Data
let studentMap = new Map();
var today, date, time, datetime;
today = new Date();
date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
datetime = date + ' ' + time;
// Elements
const containerApp = document.querySelector('.app');
const btnRegister = document.querySelector('.form__btn--register');
const containerStudentList = document.querySelector('.studentlist');
const inputFirstName = document.querySelector('.form__input--firstname');
const inputLastName = document.querySelector('.form__input--lastname');
const inputStudentID = document.querySelector('.form__input--studentid');

//validation

let nameIsString, numDigitCount;
const formValidation = function (fname, lname, stuid) {
  if (fname === null || lname === null || stuid === null) return false;
  nameIsString =
    typeof fname === 'string' && typeof lname === 'string' ? true : false;
  numDigitCount =
    Math.max(Math.floor(Math.log10(Math.abs(Number(stuid)))), 0) + 1 === 7
      ? true
      : false;
  return nameIsString && numDigitCount;
};

console.log();
//operation: Registering
btnRegister.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    !formValidation(
      inputFirstName.value,
      inputLastName.value,
      inputStudentID.value
    )
  ) {
    alert('Invalid input. Please try again');
  } else {
    studentMap.set(
      inputFirstName.value + ' ' + inputLastName.value,
      inputStudentID.value
    );

    displayStudentList(studentMap);
  }
});

//display the registed students'list
const displayStudentList = function (student) {
  containerStudentList.innerHTML = '';
  student.forEach(function (value, key) {
    const html = `<div class="studentlist__row">
  <div class="studentlist__id">ID:${value}</div>
  <div class="studentlist__studentname">${key}</div>
  <div class="current-time">${datetime}</div>
   </div>`;
    console.log(html);
    containerStudentList.insertAdjacentHTML('beforeend', html);
  });
};
