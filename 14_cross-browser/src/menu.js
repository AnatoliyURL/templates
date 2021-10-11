document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__burger_block').classList.add('header__burger-active')
  })

  document.querySelector('.button-close').addEventListener('click', function () {
    document.querySelector('.header__burger_block').classList.toggle('header__burger-active')
  })
})
