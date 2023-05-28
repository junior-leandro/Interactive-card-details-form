const form = document.querySelector(".formulario");
const formSection = document.querySelector(".form-section");
const completed = document.querySelector(".finish-section");
const buttonSend = document.querySelector("#confirm");
const buttonContinue = document.querySelector(".finish-button");

let cardName = document.querySelector(".card-name");
let cardNameInput = document.querySelector("#inputCardName");
let cardNameSpan =document.querySelector(".error-message-name");

let cardNumber = document.querySelector(".card-number");
let cardNumberInput = document.querySelector("#inputCardNumber");
let cardNumberSpan = document.querySelector(".error-message-number");

let cardMonth = document.querySelector(".card-month");
let cardMonthInput = document.querySelector("#inputCardMonth");
let cardYear = document.querySelector(".card-year");
let cardYearInput = document.querySelector("#inputCardYear");

let cardExp = document.querySelector(".error-message-date");

let cardCvc = document.querySelector(".card-cvc");
let cardCvcInput = document.querySelector("#inputCardCvc");
let cardCvcSpan = document.querySelector(".error-message-cvc");



function setCardName(e) {
    cardName.innerText = format(e.target.value);
}
function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}

function setCardMonth(e) {
    cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
    cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
    cardCvc.innerText = format(e.target.value);
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}


function Submit(e) {

    e.preventDefault();


    if (!cardNameInput.value) {
        cardNameInput.classList.add('error');
        cardNameSpan.classList.remove("hidden");
    } else {
        cardNameInput.classList.remove("error");
        cardNameSpan.classList.add("hidden");
    }
    if (!cardNumberInput.value) {
        cardNumberInput.classList.add('error')
        cardNumberSpan.classList.remove("hidden");
    } else if (cardNumberInput.value.length < 16) {
        cardNumberInput.classList.add("error");        
        cardNumberSpan.classList.add("numbers-out");
        cardNumberSpan.classList.remove("hidden");
    } else{
        cardNumberInput.classList.remove("error");
        cardNumberSpan.classList.remove("numbers-out");
        cardNumberSpan.classList.add("hidden");
    }

    if (!cardMonthInput.value || !cardYearInput.value) {
        cardMonthInput.classList.add("error");
        cardYearInput.classList.add("error");
        cardExp.classList.remove("hidden");
    }else if (cardMonthInput.value.length <2 || cardYearInput.value.length <2){
        cardMonthInput.classList.add("error");  
        cardYearInput.classList.add("error");    
        cardExp.classList.add("invalid");
        cardExp.classList.remove("hidden");
    } else {
        cardMonthInput.classList.remove("error");
        cardYearInput.classList.remove("error");
        cardExp.classList.remove("invalid");
        cardExp.classList.add("hidden");
    }


    if (!cardCvcInput.value) {
        cardCvcInput.classList.add("error");
        cardCvcSpan.classList.remove("hidden");
    } else if (cardCvcInput.value.length <3 ){
        cardCvcInput.classList.add("error");      
        cardCvcSpan.classList.add("numbers-out");
        cardCvcSpan.classList.remove("hidden");
        
    } else{
        cardCvcInput.classList.remove("error");
        cardCvcSpan.classList.remove("numbers-out"); 
        cardCvcSpan.classList.add("hidden");
    }
    if (cardNameInput.value && cardNumberInput.value.length ==16 && cardMonthInput.value.length ==2 && cardYearInput.value.length == 2 && cardCvcInput.value.length == 3){
        completed.classList.remove("hidden");
        formSection.classList.add("hidden");

    }
    
}




cardNameInput.addEventListener("keyup", setCardName);
cardNumberInput.addEventListener("keyup", setCardNumber);
cardMonthInput.addEventListener("keyup", setCardMonth);
cardYearInput.addEventListener("keyup", setCardYear);
cardCvcInput.addEventListener("keyup", setCardCvc);
buttonSend.addEventListener("click", Submit);



buttonContinue.addEventListener("click", function (e) {
    e.preventDefault();

    document.location.reload(true);

});

