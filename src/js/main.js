import validator from './validator.js'
import MS from '../helpers/index.js'
import register from './register.js'

const form = document.forms['register']
const btnTabs = MS.fn('.w-tabs a', true)
const tabsContent = MS.fn('.w-tabs-content', true)

for (let btn of btnTabs) {
  btn.addEventListener('click', function () {
    const target = this.getAttribute('data-tab')

    btnTabs.forEach((btn, key) => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active')
      }
    })

    if (!this.classList.contains('active')) {
      this.classList.add('active')
    }

    tabsContent.forEach((tab, key) => {
      const id = tab.getAttribute('id')

      if (id === target) {
        if (!tab.classList.contains('active')) {
          tab.classList.add('active')
        }
      } else {
        tab.classList.remove('active')
      }
    })
  })
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(register.submit(this))
})