let inputBox = document.querySelector('#inputBox');
let buttons = document.querySelectorAll('.button');

let userInput = "";


buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        if (e.target.innerHTML == '=') {
            userInput = eval(userInput);
            inputBox.value = userInput;
        }

        else if (e.target.innerHTML == 'AC') {
            userInput = "";
            inputBox.value = userInput;
        }

        else if (e.target.innerHTML == 'DEL') {
            userInput = userInput.substring(0, userInput.length - 1)
            inputBox.value = userInput;
        }
        else {
            userInput += e.target.innerHTML;
            inputBox.value = userInput;

        }
    })
})

