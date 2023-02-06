
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop.style['background-image']);
// alert('This works!')
// var backdrop = document.querySelectorAll('.backdrop'); // all ocurrences that matches the string
// console.log(backdrop);
// console.dir(backdrop); // object notation
// backdrop.style.display = 'block'; // value can be seen in F12 > Elements > Styles
// console.dir(backdrop.getElementsByClassName.backgroundImage);

// console.dir(backdrop);

for (var i = 0; i < selectPlanButtons.length; i++ ) {
  selectPlanButtons[i].addEventListener('click', function() {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    // modal.className += '.open'; // This will actually overwrite the complete class list
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
};

backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if (modal) {
      modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});
