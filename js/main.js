document.body.classList.remove('dark-mode');

// const elLightModeButton = document.querySelector('.site-header-light');
const elDarkModeButton = document.querySelector('.dark-mode-link');
const elDarkModeWord = document.body.querySelector('.dark-mode-style');
// elLightModeButton.addEventListener('click', function () {
//   document.body.classList.remove('dark-mode')
// });

elDarkModeButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode')
});



// elDarkModeButton.addEventListener('click', function() {
//   document.body.classList.remove('dark-mode')
// });
