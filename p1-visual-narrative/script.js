const bondedWordmark = document.getElementById('bondedWordmark');

const chemSpreads = ['assets/chem-1.png', 'assets/chem-2.png'];
const fallibilitySpreads = ['assets/fallibility-1.png', 'assets/fallibility-2.png'];
const purposeSpreads = ['assets/purpose-1.png', 'assets/purpose-2.png'];
const loveSpreads = ['assets/love-1.png', 'assets/love-2.png'];

const spreadContainer = document.querySelectorAll('.spreadContainer');
const chemLeft = document.getElementById('chemLeft');
const chemRight = document.getElementById('chemRight');
const fallibilityLeft = document.getElementById('fallibilityLeft');
const fallibilityRight = document.getElementById('fallibilityRight');
const purposeLeft = document.getElementById('purposeLeft');
const purposeRight = document.getElementById('purposeRight');
const loveLeft = document.getElementById('loveLeft');
const loveRight = document.getElementById('loveRight');
const pgIndicatorContainer = document.getElementById('pgIndicatorContainer');

if (bondedWordmark){
bondedWordmark.addEventListener('click', function() {
    const distance = window.innerHeight;
    const duration = 6000;
    const startTime = performance.now();
    
    function step(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeOutQuad(progress);
        window.scrollBy(0, distance * easedProgress);

        if (elapsedTime < duration) {
            requestAnimationFrame(step);
        }
    }

    function easeOutQuad(t) {
        return t * (2 - t);
    }

    requestAnimationFrame(step);
});
};

if (chemLeft && chemRight){
    
let chemSpread1 = '<img class="spread" src="' + chemSpreads[0]+ '">';

chemLeft.addEventListener('click', function(){
    if (spreadContainer[0].innerHTML == chemSpread1){
        spreadContainer[0].innerHTML = '<img class="spread" src="' + chemSpreads[1]+ '">';
        pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/blue-pg-indicator-2.png">';
    } else {
        spreadContainer[0].innerHTML = chemSpread1;
        pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/blue-pg-indicator-1.png">';
    }
});
chemRight.addEventListener('click', function(){
    if (spreadContainer[0].innerHTML == '<img class="spread" src="' + chemSpreads[0]+ '">'){
        spreadContainer[0].innerHTML = '<img class="spread" src="' + chemSpreads[1]+ '">';
        pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/blue-pg-indicator-2.png">';
    } else {
        spreadContainer[0].innerHTML = '<img class="spread" src="' + chemSpreads[0]+ '">';
        pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/blue-pg-indicator-1.png">';
    }
});
};

if (fallibilityLeft && fallibilityRight){
fallibilityLeft.addEventListener('click', function(){
    if (spreadContainer[0].innerHTML == '<img class="spread" src="' + fallibilitySpreads[0]+ '">'){
        spreadContainer[0].innerHTML = '<img class="spread" src="' + fallibilitySpreads[1]+ '">';
        pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/brown-pg-indicator-2.png">';
    } else {
        spreadContainer[0].innerHTML = '<img class="spread" src="' + fallibilitySpreads[0]+ '">';
        pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/brown-pg-indicator-1.png">';
    }
});
fallibilityRight.addEventListener('click', function(){
    if (spreadContainer[0].innerHTML == '<img class="spread" src="' + fallibilitySpreads[0]+ '">'){
        spreadContainer[0].innerHTML = '<img class="spread" src="' + fallibilitySpreads[1]+ '">';
        pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/brown-pg-indicator-2.png">';
    } else {
        spreadContainer[0].innerHTML = '<img class="spread" src="' + fallibilitySpreads[0]+ '">';
        pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/brown-pg-indicator-1.png">';
    }
});
};

if (purposeLeft && purposeRight){
purposeLeft.addEventListener('click', function(){
    if (spreadContainer[0].innerHTML == '<img class="spread" src="' + purposeSpreads[0]+ '">'){
        spreadContainer[0].innerHTML = '<img class="spread" src="' + purposeSpreads[1]+ '">';
        pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/green-pg-indicator-2.png">';
    } else {
        spreadContainer[0].innerHTML = '<img class="spread" src="' + purposeSpreads[0]+ '">';
        pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/green-pg-indicator-1.png">';
    }
});

purposeRight.addEventListener('click', function(){
    if (spreadContainer[0].innerHTML == '<img class="spread" src="' + purposeSpreads[0]+ '">'){
        spreadContainer[0].innerHTML = '<img class="spread" src="' + purposeSpreads[1]+ '">';
        pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/green-pg-indicator-2.png">';
    } else {
        spreadContainer[0].innerHTML = '<img class="spread" src="' + purposeSpreads[0]+ '">';
        pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/green-pg-indicator-1.png">';
    }
});
};

if (loveLeft && loveRight){
    loveLeft.addEventListener('click', function(){
        if (spreadContainer[0].innerHTML == '<img class="spread" src="' + loveSpreads[0]+ '">'){
            spreadContainer[0].innerHTML = '<img class="spread" src="' + loveSpreads[1]+ '">';
            pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/mauve-pg-indicator-2.png">';
        } else {
            spreadContainer[0].innerHTML = '<img class="spread" src="' + loveSpreads[0]+ '">';
            pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/mauve-pg-indicator-1.png">';
        }
    });

    loveRight.addEventListener('click', function(){
        if (spreadContainer[0].innerHTML == '<img class="spread" src="' + loveSpreads[0]+ '">'){
            spreadContainer[0].innerHTML = '<img class="spread" src="' + loveSpreads[1]+ '">';
            pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/mauve-pg-indicator-2.png">';
        } else {
            spreadContainer[0].innerHTML = '<img class="spread" src="' + loveSpreads[0]+ '">';
            pgIndicatorContainer.innerHTML = '<img id="pgIndicator" src="assets/mauve-pg-indicator-1.png">';
        }
    });
};