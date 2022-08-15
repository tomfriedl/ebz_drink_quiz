const dict = {
    "latte":{
        "<span class='hot'>hot</span>":{
            "<span class='size'>12oz</span>":{
                "shots":"1",
                "syrup":"3",
                "mocha":"1",
                "white mocha":"1",
                "caramel":"1",
                "honey":"0.5",
                "milk":"8oz"},
            "<span class='size'>16oz</span>":{
                "shots":"2",
                "syrup":"4",
                "mocha":"1.5",
                "white mocha":"1.5",
                "caramel":"1.5",
                "honey":"1",
                "milk":"10oz"}},
        "<span class='cold'>cold</span>":{
            "<span class='size'>12oz</span>":{
                "shots":"1",
                "syrup":"3",
                "mocha":"1",
                "white mocha":"1",
                "caramel":"1",
                "honey":"0.5",},
            "<span class='size'>16oz</span>":{
                "shots":"2",
                "syrup":"4",
                "mocha":"1.5",
                "white mocha":"1.5",
                "caramel":"1.5",
                "honey":"1"}}},
    "honey lavender latte":{
        "<span class='hot'>hot</span>":{
            "<span class='size'>12oz</span>":{
                "prep cup":"no",
                "honey":"0.5",
                "lavender":"3"},
            "<span class='size'>16oz</span>":{
                "prep cup":"no",
                "honey":"1",
                "lavender":"4"}},
        "<span class='cold'>cold</span>":{
            "<span class='size'>12oz</span>":{
                "prep cup":"yes",
                "honey":"0.5",
                "lavender":"3"},
            "<span class='size'>16oz</span>":{
                "prep cup":"yes",
                "honey":"1",
                "lavender":"4"}},},
    "chai":{
        "<span class='hot'>hot</span>":{
            "<span class='size'>12oz</span>":{
                "prep cup":"no",
                "chai concentrate":"1"},
            "<span class='size'>16oz</span>":{
                "prep cup":"no",
                "chai concentrate":"1.5"}},
        "<span class='cold'>cold</span>":{
            "<span class='size'>12oz</span>":{
                "prep cup":"no",
                "chai concentrate":"1"},
            "<span class='size'>16oz</span>":{
                "prep cup":"no",
                "chai concentrate":"1.5"}}},
    "hot chocolate":{
        "":{
            "<span class='size'>12oz</span>":{
                "prep cup":"no",
                "mocha":"1"},
            "<span class='size'>16oz</span>":{
                "prep cup":"no",
                "mocha":"1.5"}
            }},
    "americano":{
        "<span class='hot'>hot</span>":{
            "<span class='size'>12oz</span>":{
                "shots":"2"},
            "<span class='size'>16oz</span>":{
                "shots":"3"}},
        "<span class='cold'>cold</span>":{
            "<span class='size'>12oz</span>":{
                "shots":"2"},
            "<span class='size'>16oz</span>":{
                "shots":"3"}}},
    "freezer":{
        "":{
            "mocha":{
                "coffee":"6oz",
                "milk":"2oz",
                "sauce":"2",
                "simple syrup":"6",
                "ice":"full cup"},
            "chai":{
                "milk":"8oz",
                "chai concentrate":"2",
                "ice":"full cup"},
            "coffee":{
                "coffee":"6oz",
                "milk":"2oz",
                "simple syrup":"6",
                "ice":"full cup"},
            "orange dreamsicle":{
                "milk":"8oz",
                "orange dreamsicle syrup":"2",
                "ice":"full cup"},
            "hot chocolate":{
                "milk":"8oz",
                "sauce":"3",
                "vanilla":"3",
                "ice":"full cup"}}},
    "flat white":{
        "":{
            "":{
            "milk":"6oz",
            "shots":"2"}}},
    "cappucino":{
        "":{
            "<span class='size'>8oz</span>":{
                "shots":"1",
                "milk":"4oz"},
            "<span class='size'>12oz</span>":{
                "shots":"2",
                "milk":"6oz"}}},
    "cortado":{
        "":{
            "":{
            "shots":"2",
            "milk":"4oz"}}},
    "machiatto":{
        "":{
            "":{
             "shots":"2"}}},
    "matcha latte":{
        "<span class='hot'>hot</span>":{
            "<span class='size'>12oz</span>":{
                "prep cup":"no",
                "matcha powder":"1"}},
        "<span class='cold'>cold</span>":{
            "<span class='size'>12oz</span>":{
                "prep cup":"yes",
                "matcha powder":"1"}}}
}

function getQuestion() {
    var drink = _.sample(_.keys(dict))
    console.log("drink is", drink)
    var temps = _.propertyOf(dict)(drink)
    console.log("temperatures are", temps)

    var temp = _.sample(_.keys(temps))
    console.log("temp is", temp)
    var sizes = _.propertyOf(temps)(temp)
    console.log("sizes are", sizes)

    var size = _.sample(_.keys(sizes))
    console.log("size is", size)
    var question_options = _.propertyOf(sizes)(size)
    console.log("question options are", question_options)
            
    var question_variable = _.sample(_.keys(question_options))
    console.log("question variable is", question_variable)
    var answer_variable = _.propertyOf(question_options)(question_variable)
    console.log("answer variable is", answer_variable)

    if (question_variable == 'prep cup') {
        var prompt = (`Do you use a <span class='question_var'>prep cup</span> when preparing a ${size} ${temp} ${drink}?`)}
    if (question_variable == 'shots') {
        var prompt = (`How many <span class='question_var'>espresso shots</span> are in a ${size} ${temp} ${drink}?`)}
    if (question_variable == 'syrup' || question_variable == 'mocha'|| question_variable == 'white mocha'|| question_variable == 'caramel'|| question_variable == 'honey'||question_variable == 'chai concentrate'||question_variable == 'orange dreamsicle syrup'||question_variable == 'lavender'||question_variable == 'vanilla') {
        var prompt = (`How many pumps of <span class='question_var'>${question_variable}</span> are in a ${size} ${temp} ${drink}?`)}
    if (question_variable == 'matcha powder') {
        var prompt = (`How many scoops of <span class='question_var'>matcha powder</span> are in a ${size} ${temp} ${drink}?`)}
    if (question_variable == 'ice') {
        var prompt = (`How much <span class='question_var'>ice</span> should be used in a ${size} ${temp} ${drink}?`)}
    if (question_variable == 'coffee'||question_variable == 'milk') {
        var prompt = (`How much <span class='question_var'>${question_variable}</span> is used in a ${size} ${temp} ${drink}?`)}
    
    console.log(`question is: ${prompt}`)
    return [prompt, answer_variable]

}

function checkAnswer(answer_variable) {

    var user_input = document.getElementById('myInput').value;
    console.log(`user input is: ${user_input}`)

    if (user_input != null) {
        if (user_input == answer_variable) {
            var response = "CORRECT!";
            return response;
        } else {
            var response = `INCORRECT! The correct answer is <span style='font-weight:900'>${answer_variable}.</span>`;
            return response;
        };
    };
}

function toContinue() {
    typewriterB.deleteAll(15)
        .start();
    typewriterB.pauseFor(500)
        .typeString('press <span class="enter">ENTER</span> to continue');
}

function runQuiz() {

    new Promise(function(resolve, reject) {
        this.addEventListener('keydown', event => {
            if (event.keyCode == 13) {
                resolve();
            } else {
                reject();
            }
        })
    })
    
    .then(function(){
        [question, answer] = getQuestion();
        typewriterA.deleteAll(15)
            .start();
        typewriterA.typeString(question)
            .start();
        document.getElementById('response').innerHTML = "undefined"
        document.getElementById('response').style.visibility = "hidden";
        document.getElementById('myInput').value = null;
        return answer;
    })
    
    .then(function() {
        document.getElementById('myInput').focus();
        return new Promise(function(resolve, reject) {
            this.addEventListener('keydown', event => {
                if (event.keyCode == 13) {
                    resolve();
                }
            })
        })
        .then(function() {
            return;
        });
    })

    .then(function() {
        document.getElementById('myInput').blur();
        let response = checkAnswer(answer);
        typewriterB = new Typewriter(document.getElementById('response'), {
            delay: 15,
            cursor: '',
        });
        typewriterB.typeString(response).start()
            .pauseFor(2000);
        document.getElementById('response').style.visibility = "visible";
        console.log(response)
        calcScore(response, right, wrong, totalQuestions);
        setTimeout(() => {
            (toContinue())
          }, "1000");
    })
    .then(function() {
        runQuiz();
    });
}

function calcScore(x) {

    if (x == "CORRECT!") {
        async function addRight() {
            totalQuestions +=1
            right += 1
        }
        addRight().then(
            document.getElementById('accuracyBar').style.boxShadow = "0px 3px 10px rgba(73, 73, 73, 0.5)",
            document.getElementById('correct').style.width = `${(right / totalQuestions)*100}%`,
            document.getElementById('incorrect').style.width = `${(wrong / totalQuestions)*100}%`,
            console.log(right, wrong, totalQuestions)
            )
    } else {
        async function addWrong() {
            totalQuestions += 1
            wrong += 1
        }
        addWrong().then(
        document.getElementById('accuracyBar').style.boxShadow = "0px 3px 10px rgba(73, 73, 73, 0.5)",
        document.getElementById('correct').style.width = `${(right / totalQuestions)*100}%`,
        document.getElementById("incorrect").style.width = `${(wrong / totalQuestions)*100}%`,
        console.log(right, wrong, totalQuestions)
        )
        }

}

var right = 0
var wrong = 0
var totalQuestions = 0
window.onload = function() {
    typewriterA = new Typewriter(document.getElementById("question"), {
        delay: 15,
        cursor: '',
    });
    typewriterA.pauseFor(3000)
        .typeString('press <span class="enter">ENTER</span> to begin').start();
    document.getElementById('response').innerHTML = "undefined"
    document.getElementById('response').style.visibility = "hidden";
    runQuiz()
    return typewriterA;
}
