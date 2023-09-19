
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const numberDisplay = document.getElementById("number");


let number = 1;


function updateNumber() {
    numberDisplay.innerText = number.toString();
    
    if (number === 0) {
        alert("No stocks available");
    }
}

incrementButton.addEventListener("click", () => {
    number++;
    updateNumber();
});


decrementButton.addEventListener("click", () => {
    if (number > 0) {
        number--;
        updateNumber();
    }
});

updateNumber();


