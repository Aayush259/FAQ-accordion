// Getting question element.
const Questions = document.querySelectorAll('.questionContainer');

// Using for each loop to add event listener on each question block.
Questions.forEach(question => {
    question.addEventListener('click', () => {

        // Getting open close icon and answer element from DOM
        const OpenCloseIcon = question.querySelector('.openCloseIcon');
        const Answer = question.parentNode.querySelector('.answer');

        Answer.classList.toggle('none-display');

        if (OpenCloseIcon.src.includes('icon-plus.svg')) {
            OpenCloseIcon.src = './assets/images/icon-minus.svg';
        } else {
            OpenCloseIcon.src = './assets/images/icon-plus.svg';
        }
    })
})