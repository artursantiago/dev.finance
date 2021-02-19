const buttons = document.querySelectorAll('.controls button');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    document.querySelector('.box').classList.add('rotate-scale-down-ver');
    setTimeout(() => {
      document.querySelector('.box').classList.remove('rotate-scale-down-ver');
    }, 650);
  })
});