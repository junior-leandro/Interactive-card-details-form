const form = document.querySelector(".formulario");
const formSection = document.querySelector(".form-section");
const completed = document.querySelector(".finish-section");
const buttonSend = document.querySelector("#confirm");
const buttonContinue = document.querySelector(".finish-button");

let cardName = document.querySelector(".card-name");
let cardNameInput = document.querySelector("#inputCardName");
let cardNumber = document.querySelector(".card-number");
let cardNumberInput = document.querySelector("#inputCardNumber");
let cardDate =document.querySelector(".card-exp");
let cardMonthInput = document.querySelector("#inputCardMounth");
let cardYearInput = document.querySelector("#inputCardYear");
let cardCvc = document.querySelector(".card-cvc");
let cardCvcInput = document.querySelector("#inputCardCvc");



buttonContinue.addEventListener("click", function (e) {
    e.preventDefault();

    document.location.reload(true);

});
function setCardName(e) {
    cardName.innerText = format(e.target.value);
}
function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
  }


  
cardNameInput.addEventListener("keyup", setCardName);
cardNumberInput.addEventListener("keyup", setCardNumber);