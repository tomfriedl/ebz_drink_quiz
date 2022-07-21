const dict = {
    "latte":{
        "<span class='hot'>hot</span>":{
            "<span class='size'>12oz</span>":{
                "shots":"1",
                "syrup":"3",
                "sauce":"1",
                "honey":"0.5"},
            "<span class='size'>16oz</span>":{
                "shots":"2",
                "syrup":"4",
                "sauce":"1.5",
                "honey":"1"}},
        "<span class='cold'>cold</span>":{
            "<span class='size'>12oz</span>":{
                "shots":"1",
                "syrup":"3",
                "sauce":"1",
                "honey":"0.5"},
            "<span class='size'>16oz</span>":{
                "shots":"2",
                "syrup":"4",
                "sauce":"1.5",
                "honey":"1"}}},
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
                "sauce":"1"},
            "<span class='size'>16oz</span>":{
                "prep cup":"no",
                "sauce":"1.5"}}},
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
                "coffee":"8oz",
                "coffee powder":"4",
                "sauce":"2",
                "ice":"full cup"},
            "chai":{
                "milk":"8oz",
                "chai concentrate":"2",
                "ice":"full cup"},
            "coffee":{
                "coffee":"8oz",
                "coffee powder":"4",
                "ice":"full cup"},
            "orange dreamsicle":{
                "milk":"8oz",
                "orange dreamsicle syrup":"2",
                "ice":"full cup"},
            "hot chocolate":{
                "milk":"8oz",
                "sauce":"3",
                "syrup":"3",
                "ice":"full cup"}}},
    "flat white":{
        "":{
            "":{
            "shots":"2"}}},
    "cappucino":{
        "":{
            "<span class='size'>8oz</span>":{
                "shots":"1"},
            "<span class='size'>12oz</span>":{
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
        if (question_variable == 'syrup' || question_variable == 'sauce'||question_variable == 'honey'||question_variable == 'chai concentrate'||question_variable == 'orange dream syrup') {
            var prompt = (`How many pumps of <span class='question_var'>${question_variable}</span> are in a ${size} ${temp} ${drink}?`)}
        if (question_variable == 'matcha powder') {
            var prompt = (`How many scoops of <span class='question_var'>matcha powder</span> are in a ${size} ${temp} ${drink}?`)}
        if (question_variable == 'coffee powder'||question_variable == 'HC powder') {
            var prompt = (`How many clicks of <span class='question_var'>${question_variable}</span> are in a ${size} ${temp} ${drink}?`)}
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
            var response = "<span class='correct'>correct!</span>";
            return response;
        } else {
            var response = `<span class='incorrect'>incorrect!</span> the correct answer is <span class='question_var'>${answer_variable}</span>`;
            return response;
        };
    };
}

function toContinue() {
    typewriterB.deleteAll(15)
        .start();
    typewriterB.pauseFor(500)
        .typeString('press enter to continue');
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
            .pauseFor(1000);
        document.getElementById('response').style.visibility = "visible";
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
    typewriterA = new Typewriter(document.getElementById("question"), {
        delay: 15,
        cursor: '',
    });
    typewriterA.pauseFor(1000)
        .typeString('press enter to begin').start();
    document.getElementById('response').innerHTML = "undefined"
    document.getElementById('response').style.visibility = "hidden";
    runQuiz()
    return typewriterA;
}
