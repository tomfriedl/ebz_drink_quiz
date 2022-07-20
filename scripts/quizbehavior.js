const dict = {
    "latte":{
        "hot":{
            "12oz":{
                "prep cup":"no",
                "shots":"1",
                "syrup":"3",
                "sauce":"1",
                "honey":"0.5"},
            "16oz":{
                "prep cup":"no",
                "shots":"2",
                "syrup":"4",
                "sauce":"1.5",
                "honey":"1"}},
        "cold":{
            "12oz":{
                "prep cup":"yes",
                "shots":"1",
                "syrup":"3",
                "sauce":"1",
                "honey":"0.5"},
            "16oz":{
                "prep cup":"yes",
                "shots":"2",
                "syrup":"4",
                "sauce":"1.5",
                "honey":"1"}}},
    "chai":{
        "hot":{
            "12oz":{
                "prep cup":"no",
                "chai concentrate":"1"},
            "16oz":{
                "prep cup":"no",
                "chai concentrate":"1.5"}},
        "cold":{
            "12oz":{
                "prep cup":"no",
                "chai concentrate":"1"},
            "16oz":{
                "prep cup":"no",
                "chai concentrate":"1.5"}}},
    "hot chocolate":{
        "":{
            "12oz":{
                "prep cup":"yes",
                "sauce":"1"},
            "16oz":{
                "prep cup":"yes",
                "sauce":"1.5"}}},
    "americano":{
        "hot":{
            "12oz":{
                "prep cup":"no",
                "shots":"2"},
            "16oz":{
                "prep cup":"no",
                "shots":"3"}},
        "cold":{
            "12oz":{
                "prep cup":"no",
                "shots":"2"},
            "16oz":{
                "prep cup":"no",
                "shots":"3"}}},
    "freezer":{
        "":{
            "mocha":{
                "coffee":"8oz",
                "coffee powder":"4",
                "sauce":"2",
                "ice":"full cup"},
            "chai":{
                "milk":"8oz",
                "chai concentrate":"1.5",
                "ice":"full cup"},
            "coffee":{
                "coffee":"8oz",
                "coffee powder":"4",
                "ice":"full cup"},
            "orange dreamsicle":{
                "milk":"8oz",
                "orange dream syrup":"1.5",
                "ice":"full cup"},
            "hot chocolate":{
                "milk":"8oz",
                "sauce":"2",
                "ice":"full cup"}}},
    "flat white":{
        "":{
            "":{
            "prep cup":"no",
            "shots":"2"}}},
    "cappucino":{
        "":{
            "8oz":{
                "shots":"1"},
            "12oz":{
                "shots":"2"}}},
    "cortado":{
        "":{
            "":{
            "shots":"2"}}},
    "machiatto":{
        "":{
            "":{
             "shots":"2"}}},
    "matcha latte":{
        "hot":{
            "12oz":{
                "prep cup":"no",
                "matcha powder":"1"},
            "16oz":{
                "prep cup":"no",
                "matcha powder":"1.5"}},
        "cold":{
            "12oz":{
                "prep cup":"yes",
                "matcha powder":"1"},
            "16oz":{
                "prep cup":"yes",
                "matcha powder":"1.5"}}}
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
            var prompt = (`Do you use a prep cup when preparing a ${size} ${temp} ${drink}?`)}
        if (question_variable == 'shots') {
            var prompt = (`How many espresso shots are in a ${size} ${temp} ${drink}?`)}
        if (question_variable == 'syrup' || question_variable == 'sauce'||question_variable == 'honey'||question_variable == 'chai concentrate'||question_variable == 'orange dream syrup') {
            var prompt = (`How many pumps of ${question_variable} are in a ${size} ${temp} ${drink}?`)}
        if (question_variable == 'matcha powder') {
            var prompt = (`How many scoops of matcha powder are in a ${size} ${temp} ${drink}?`)}
        if (question_variable == 'coffee powder'||question_variable == 'HC powder') {
            var prompt = (`How many clicks of ${question_variable} are in a ${size} ${temp} ${drink}?`)}
        if (question_variable == 'ice') {
            var prompt = (`How much ice should be used in a ${size} ${temp} ${drink}?`)}
        if (question_variable == 'coffee'||question_variable == 'milk') {
            var prompt = (`How much ${question_variable} is used in a ${size} ${temp} ${drink}?`)}
        
        console.log(`question is: ${prompt}`)
        return [prompt, answer_variable]

}

function checkAnswer(answer_variable) {

    var user_input = document.getElementById('myInput').value;
    console.log(`user input is: ${user_input}`)

    if (user_input != null) {
        if (user_input == answer_variable) {
            var response = "correct!";
            return response;
        } else {
            var response = `incorrect! the correct answer is ${answer_variable}`;
            return response;
        };
    };
}

function toContinue() {
    document.getElementById('continue').innerHTML = 'press enter to continue';
    document.getElementById('continue').style.visibility = "visible";
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
        let question_box = document.getElementById("question");
        document.getElementById('question').innerHTML = ""
        var typewriter = new Typewriter(question_box, {
            delay: 10,
            cursor: '',
        });
        typewriter.typeString(question).start()
        document.getElementById('response').innerHTML = "undefined"
        document.getElementById('response').style.visibility = "hidden";
        document.getElementById('continue').innerHTML = "undefined"
        document.getElementById('continue').style.visibility = "hidden";
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
        var typewriter = new Typewriter(document.getElementById('response'), {
            delay: 10,
            cursor: '',
        });
        typewriter.typeString(response).start();
        document.getElementById('response').style.visibility = "visible";
        document.getElementById('myInput').value = null;
        console.log(response)
        setTimeout(() => {
            (toContinue())
          }, "1000");
    })

    .then(function() {
        runQuiz();
    });
}


window.onload = function() {
    let question_box = document.getElementById("question");
    var typewriter = new Typewriter(question_box, {
        delay: 10,
        cursor: '',
    });
    var ele = typewriter.pauseFor(1000)
        .typeString('press enter to begin').start();
    ele.
    document.getElementById('response').innerHTML = "undefined"
    document.getElementById('response').style.visibility = "hidden";
    document.getElementById('continue').innerHTML = "undefined"
    document.getElementById('continue').style.visibility = "hidden";
    runQuiz();
}
