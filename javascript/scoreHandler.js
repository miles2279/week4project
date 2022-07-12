function saveScore(name){
    if(!localStorage.getItem('top_scores')) localStorage.setItem('top_scores', JSON.stringify([]));
    
    var score = localStorage.getItem('score');
    var scores = JSON.parse(localStorage.getItem('top_scores'))
    scores.push({name: name, score: score});
    localStorage.setItem('top_scores', JSON.stringify(scores));

    localStorage.removeItem('score');
    localStorage.removeItem('mh-timer');

    window.location.reload()
}

function getTopScores(){
    if(localStorage.getItem('score')){
        var button = document.createElement('button');
        button.className = 'submit-button';
        button.innerHTML = 'Submit';
        button.onclick = function(){
            saveScore(document.getElementById('name-input').value);
        }
        document.getElementById('button-container').appendChild(button);
    }else{
        document.getElementById('name-input').remove();
        document.getElementById('name-label').remove();
    }
    var scores = JSON.parse(localStorage.getItem('top_scores')).slice(0,5);
    document.getElementById('score-container').innerHTML = scores.map(score => ('<div>' + score.name + ': ' + score.score + '</div>')).join('');
}