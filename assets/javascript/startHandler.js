function checkStart() {
    if(localStorage.getItem('score')) {
        localStorage.removeItem('score');
    }
    localStorage.setItem('score', 0);
    console.log('score set to 0');
}