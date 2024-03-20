const cardsContainer = document.getElementById('cardsContainer');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

const images = ['moleculescrew.png', 'bentscrew.png', 'compassscrew.png', 'knotscrew.png'];

for (let i = 0; i < 4; i++) {
    cardsContainer.innerHTML += '<div class="cards"><img class="screwIcons" src="' + images[i] + '"></div>';
}

const cards = document.querySelectorAll('.cards');
const screwIcons = document.querySelectorAll('.screwIcons');

for (let i=0; i<cards.length; i++) {
    screwIcons[i].addEventListener('click', function() {

        const overlayStyle = window.getComputedStyle(overlay);

        if (overlayStyle.display === 'none'){
            overlay.style.display = 'block';
            cardsContainer.style.height = '200px';
        } else if (overlayStyle.display === 'block'){
            overlay.style.display = 'none';
            closeBtn.style.display = 'none';
            cardsContainer.style.height = '300px';
        }

        const chemContentPlaceholder = document.getElementById(chemContentPlaceholder);
        const fallibilityContentPlaceholder = document.getElementById(fallibilityContentPlaceholder);
        const purposeContentPlaceholder = document.getElementById(purposeContentPlaceholder);
        const loveContentPlaceholder = document.getElementById(loveContentPlaceholder);

        if (i==0){
            chemContentPlaceholder.style.display = 'block';
        } else if (i==1){
            fallibilityContentPlaceholder.style.display = 'block';
        } else if (i==2){
            purposeContentPlaceholder.style.display = 'block';
        } else if (i==3){
            loveContentPlaceholder.style.display = 'block';
        }
    });
}