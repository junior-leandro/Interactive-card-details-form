
var form = document.querySelector("#formulario");

const btn = document.querySelector("#confirm");

btn.addEventListener("click", function(e){
    e.preventDefault();

    let creditCardName = document.querySelector("#inputCardName");
    let cardName = creditCardName.value;
    console.log(cardName);

    let creditCardNumber = document.querySelector("#inputCardNumber");
    let cardNumber = creditCardNumber.value;
    console.log(cardNumber);

    let creditCardMounth = document.querySelector("#inputCardMounth");
    let cardMounth = creditCardMounth.value;
    console.log(cardMounth);

    let creditCardYear = document.querySelector("#inputCardYear");
    let cardYear = creditCardYear.value;
    console.log(cardYear);

    let creditCardCvc = document.querySelector("#inputCardCvc");
    let cardCvc = creditCardCvc.value;
    console.log(cardCvc);

    form.reset();
});