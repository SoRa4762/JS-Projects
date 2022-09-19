const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

let totalPeople = Number(numberOfPeopleDiv.innerText);


// ** Calculate the total bill per person **
const calculateBill = () => {
  console.log(billInput.value);
  let initialBill = Number(billInput.value);
  let tipPercentage = Number(tipInput.value);

  let tip = tipPercentage / 100;
  let tipAmount = tip * initialBill;

  let totalBill = tipAmount + initialBill;
  let totalBillPerPerson = (totalBill / totalPeople).toFixed(2);
  perPersonTotal.innerText = totalBillPerPerson;
}

// ** Splits the bill between more people **
const increasePeople = () => {
  totalPeople++
  numberOfPeopleDiv.innerText = totalPeople
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if(totalPeople < 1){
    return
  }
  

  // decrement the amount of people


  // update the DOM with the new number of people


  // calculate the bill based on the new number of people

}