// alert('This works!')

// var backdrop = document.querySelectorAll('.backdrop'); // all ocurrences that matches the string
// console.log(backdrop);
// console.dir(backdrop); // object notation
// backdrop.style.display = 'block'; // value can be seen in F12 > Elements > Styles

var backdrop = document.querySelector('.backdrop'); // first selector that matches the string
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButten = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop.getElementsByClassName.backgroundImage);
// console.dir(backdrop.style['background-image']);

// console.dir(selectPlanButtons);

for (var i = 0; i < selectPlanButtons.length; i++ ) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className += '.open'; // This will actualle overwrite the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
};

backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModel();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModel);
}

function closeModel() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButten.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});
