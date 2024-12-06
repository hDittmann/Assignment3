/*jshint esversion: 6 */ //fixes some random error
/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;  
let totalCost = 0;   
let selectedDays = 0; 

const dayButtons = document.querySelectorAll('#monday, #tuesday, #wednesday, #thursday, #friday');
const clearButton = document.getElementById('clear-button');
const halfDayButton = document.getElementById('half');
const fullDayButton = document.getElementById('full');
const costDisplay = document.getElementById('calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggleDaySelection(event) {
    const dayButton = event.currentTarget;

    if (dayButton.classList.contains('clicked')) {
        dayButton.classList.remove('clicked');
        selectedDays--;
    } else {
        dayButton.classList.add('clicked');
        selectedDays++;
    }

    calculateTotalCost();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearSelectedDays() {
    
    dayButtons.forEach(button => {
        button.classList.remove('clicked');
    });

    selectedDays = 0;
    totalCost = 0;
    calculateTotalCost();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function selectHalfDay() {
    dailyRate = 20;

    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');

    calculateTotalCost();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function selectFullDay() {
    dailyRate = 35;

    
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');

    calculateTotalCost();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
    totalCost = selectedDays * dailyRate;
    costDisplay.innerHTML = `${totalCost}`; 

}

dayButtons.forEach(button => {
    button.addEventListener('click', toggleDaySelection);
});

clearButton.addEventListener('click', clearSelectedDays);
halfDayButton.addEventListener('click', selectHalfDay);
fullDayButton.addEventListener('click', selectFullDay);

calculateTotalCost();