document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.how-working__step_element').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.how-working__information').forEach(function (tabContent) {
        tabContent.classList.remove('how-working__information-active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('how-working__information-active')

      document.querySelectorAll('.how-working__step_element').forEach(function (tabContent) {
        tabContent.classList.remove('how-working__step_element-active')
      })

      document.querySelector(`[data-path="${path}"]`).classList.add('how-working__step_element-active')
    })
  })
})
