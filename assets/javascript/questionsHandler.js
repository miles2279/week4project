
function checkAnswer(answer) {
    var searchParams = new URLSearchParams(window.location.search);
    var question = searchParams.get('question');

    var isCorrect = getCorrectAnswer(question).answer === answer;
    var answerText = getCorrectAnswer(question).answerText;

    if(isCorrect){
        var score = localStorage.getItem('score');
        localStorage.setItem('score', parseInt(score) + 1);
    }else{
        var timer = localStorage.getItem('mh-timer');
        localStorage.setItem('mh-timer', parseInt(timer) - 10);
    }

    var responseContainer = document.getElementById("response-container");
    responseContainer.innerHTML = ''
    var separatingLineDiv = document.createElement("div");
    separatingLineDiv.className = "separating-line";
    responseContainer.appendChild(separatingLineDiv);

    var responseDiv = document.createElement("div");
    responseDiv.className = "response";
    responseDiv.id = "response";
    responseDiv.innerHTML = (isCorrect ? "Correct! " + answerText : "Wrong! ");
    responseContainer.appendChild(responseDiv);

    var nextQuestionButton = document.createElement("button");
    nextQuestionButton.className = "submit-button";
    if(parseInt(question) < 3) nextQuestionButton.innerHTML = "Next Question";
    else nextQuestionButton.innerHTML = "Finish";
    nextQuestionButton.addEventListener("click", nextQuestion);
    responseContainer.appendChild(nextQuestionButton);
}

function getCorrectAnswer(question) {
    var correctAnswers = {
        '1': {
            answer: 'a',
            answerText: 'The &lt;script&gt; tag is used to embed a script into the HTML document.',
        },
        '2': {
            answer: 'c',
            answerText: 'Custom props are targeted using element[prop="value"] syntax',
        },
        '3': {
            answer: 'a',
            answerText: 'document.createElement("element_type") is the correct way to add an element to the DOM.',
        }
    }
    return correctAnswers[question];
}

function nextQuestion(){
    if(document.getElementById('response')){
        var searchParams = new URLSearchParams(window.location.search);
        var questionNumber = searchParams.get('question');
        var nextQuestionNumber = parseInt(questionNumber) + 1;
        if(parseInt(questionNumber) < 3){
            window.location.href = "?question=" + nextQuestionNumber
        }else{ 
            window.location.href = "./finished.html"
        }
    }
}

function getQuestionDetails(){
    var questions = {
        '1': {
            text: 'What HTML tag is used to import a JavaScript file?',
            q1: '&lt;script&gt;',
            q2: '&lt;js&gt;',
            q3: '&lt;source&gt;',
            q4: '&lt;scripting&gt;'
        },
        '2': {
            text: 'What CSS selector targets an element with a prop of "foo" and a value of "bar"?',
            q1: '#foo.bar',
            q2: '#foo[bar]',
            q3: '#foo[bar="bar"]',
            q4: '#foo[bar(bar)]'
        },
        '3': {
            text: 'What is the correct way to add an element to the DOM?',
            q1: 'document.createElement("div")',
            q2: 'document.add("div")',
            q3: 'document.create("div")',
            q4: 'document.children = &lt;div&gt;&lt;/div&gt;'
        }
    }
    var searchParams = new URLSearchParams(window.location.search);
    var questionNumber = searchParams.get('question');
    document.getElementById('question-header-text').innerHTML = questions[questionNumber].text;
    document.getElementById('qa-text').innerHTML = questions[questionNumber].q1;
    document.getElementById('qb-text').innerHTML = questions[questionNumber].q2;
    document.getElementById('qc-text').innerHTML = questions[questionNumber].q3;
    document.getElementById('qd-text').innerHTML = questions[questionNumber].q4;
    document.getElementById('question-number').innerHTML = 'Q' + questionNumber;
}