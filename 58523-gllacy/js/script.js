var link = document.querySelector('.contacts-btn');
var popup = document.querySelector('.feedback');
var close = popup.querySelector('.feedback-close');
var submit = popup.querySelector('.feedback-btn');

link.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('feedback-show');
});

close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('feedback-show');
});

submit.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('feedback-show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('feedback-show')) {
      popup.classList.remove('feedback-show');
    }
  }
});
