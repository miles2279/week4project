function initializeTimer() {
    if(!localStorage.getItem('mh-timer') || localStorage.getItem('mh-timer') == 'undefined') {
        console.log('here')
        localStorage.setItem('mh-timer', '75');
        window.location.reload()
    }else if(!(parseInt(localStorage.getItem('mh-timer')) > 0)) {
        console.log('here2')
        localStorage.removeItem('mh-timer');
        window.location.href = './finished.html';
    }else if(parseInt(localStorage.getItem('mh-timer')) > 0){
        setInterval(() => {
            var currTime = parseInt(localStorage.getItem('mh-timer'))
            document.getElementById('timer-wrapper').innerHTML = currTime
            localStorage.setItem('mh-timer', currTime - 1)
            if(!(parseInt(localStorage.getItem('mh-timer')) > 0)) {window.location.href = './finished.html'; window.location.href = './finished.html';};
        }, 1000);
    }
}
