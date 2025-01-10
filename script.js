const countValue = document.querySelector("#counter"); //select the div

function increment() {
  //get the value from UI
  let value = parseInt(countValue.innerText); //parseInt --> converts string value to integer value
  value = value + 1; //update the value
  countValue.innerText = value; //set the value onto UI
}

function decrement() {
  let value = parseInt(countValue.innerText); //get the value
  value = value - 1; //update the value
  countValue.innerText = value; //set the value
}
