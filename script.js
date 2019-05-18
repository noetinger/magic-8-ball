
//Variables
const predictions = ['no', 'yes', 'outlook is not good', 'maybe'];

//Create a button listener
const btn = document.querySelector('#button');

btn.addEventListener('click', () => {
    const input = document.querySelector("#question-box");
    const inputVal = input.value;

    const isQuestion = inputVal.includes('?');

    if (inputVal.trim() !=='' && isQuestion) {
    input.value = '';
    const randomNum = Math.floor(Math.random() * predictions.length);
    const reply = predictions[randomNum];
    const message = document.querySelector("#prediction");
    message.innerText = reply;
    } else{
        alert("Please ask a question...")
    }
});