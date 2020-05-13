"use strict";

// to get button using ID
let btn = document.getElementById("start");

// to get values using class name
let budgetValue = document.getElementsByClassName(".budget-value")[0],
   dayBudget = document.getElementsByClassName(".daybudget-value")[0],
   level = document.getElementsByClassName(".level-value")[0],
   expenses = document.getElementsByClassName(".expenses-value")[0],
   optExpenses = document.getElementsByClassName(".optionalexpenses-value")[0],
   income = document.getElementsByClassName(",income-value")[0],
   monthSavings = document.getElementsByClassName(".monthsavings-value")[0],
   yearSavings = document.getElementsByClassName(".yearsavings-value")[0];

// to get input value using class="expenses-item"
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

// to get all reat value using querySelector
let incomeItem = document.querySelector('.choose-income'),
   checkSavings = document.querySelector('#savings'),
   sumValue = document.querySelector('.choose-sum'),
   percentageValue = document.querySelector('.choose-percent'),
   yearValue = document.querySelector('.year-value'),
   monthValue = document.querySelector('.month-value'),
   dayValue = document.querySelector('.day-value');

// to get btn using Tag
let btnConfirm = document.getElementsByTagName("button")[0],
   btnCount = document.getElementsByTagName("button");
console.log(btnConfirm[1]);