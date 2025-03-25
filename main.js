const bill = document.querySelector("#bill"); //input 
const service = document.querySelector("#service"); //select which options
const people = document.querySelector("#people"); //input 
const result = document.querySelector("#result");//span result
const each = document.querySelector("#each"); //span each
const calculate = document.querySelector("#calculate"); //calculate
const tipText = document.querySelector('#tip');//p
  
tipText.style.visibility = "hidden";
result.style.visibility = "hidden";
each.style.visibility = "hidden";

function calculateTip() {
    let billAmount = Number(bill.value);
    let servicePercentage = Number(service.value);
    let numPeople = Number(people.value);


    let totalTip = (billAmount * servicePercentage) / 100;
    let tipPerPerson = totalTip / numPeople;


    result.textContent = `Total Tip: $${totalTip.toFixed(2)}`;
    each.textContent = `Each Person Pays: $${tipPerPerson.toFixed(2)}`;

    tipText.style.visibility = "visible";
    result.style.visibility = "visible";
    each.style.visibility = "visible";
}

calculate.addEventListener("click", calculateTip);
