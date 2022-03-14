/*=========================================================================
Script for Calculator

file: calculate.js
date: 14.03.2022
author: Nicole Gottschall

Calculator can perform multiplication and division of two numbers.
==========================================================================*/





/*=========================================================================
preparation
==========================================================================*/
/* get needed elements */
multiply = document.querySelector('.multiply');
divide = document.querySelector('.divide');
resultSection = document.querySelector('.result-block');

/* hide result section */
resultSection.style.display = "none";

/*=========================================================================
calculation
==========================================================================*/
multiply.addEventListener("click", function() {
  alert("You want to multiply two numbers? You soon will be able to do so.");
});

divide.addEventListener("click", function() {
  alert("You want to divide two numbers? You soon will be able to do so.");
});
