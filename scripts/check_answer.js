function checkAnswer(answer_variable) {
    const inputVal = document.getElementById("myInput").value;
    if (inputVal == answer_variable) {
        response = 'Correct!'};
    if (inputVal == "") {
        response = ""
    }
    else {
        response = "Incorrect. The answer is ${answer_variable}."
    };
    document.getElementById('response').innerHTML = response;
}