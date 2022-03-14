/*=========================================================================
Script for Calculator 03/22

file: calculate.js
date: 14.03.2022
author: Nicole Gottschall

Calculator can perform multiplication and division of two numbers.
==========================================================================*/





/*=========================================================================
preparation
==========================================================================*/
/* get needed elements */
const value1 = document.querySelector('.value1');
const value2 = document.querySelector('.value2');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const resultSection = document.querySelector('.result-block');
const result = document.querySelector('.result');

/* hide result section */
resultSection.style.display = "none";

/*=========================================================================
calculation
==========================================================================*/
multiply.addEventListener("click", function() {
  if(value1.value == "" || value2.value == "") {
    alert("Enter two numbers to get a result");
  } else {
    let sol = value1.value * value2.value;
    result.innerHTML = sol;
    resultSection.style.display = "inherit";
  }
});

divide.addEventListener("click", function() {
  if(value1.value == "" || value2.value == "") {
    alert("Enter two numbers to get a result");
  } else {
    let sol = value1.value / value2.value;
    result.innerHTML = sol;
    resultSection.style.display = "inherit";
  }
});
