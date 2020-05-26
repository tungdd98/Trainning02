import MS from '../helpers/index.js'
import Auth from './modules/auth.js'
import Api from './modules/api.js'

const formRegister = document.forms['register']
const formLogin = document.forms['login']
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

formRegister.addEventListener('submit', function (e) {
  e.preventDefault();
  if (Api.register(Auth.submitFormRegister(this))) {
    const size = btnTabs.length

    MS.showNotification('Đăng ký thành công')
    MS.resetForm(this, ['username', 'register-email', 'register-re-email', 'register-password', 'register-re-password'])
    for (let i = 0; i < size; i++) {
      const btn = btnTabs[i]
      const tab = tabsContent[i]

      btn.classList.contains('active') ? btn.classList.remove('active') : btn.classList.add('active')
      tab.classList.contains('active') ? tab.classList.remove('active') : tab.classList.add('active')
    }
  }
})

formLogin.addEventListener('submit', function (e) {
  e.preventDefault();
  if (Api.login(Auth.submitFormLogin(this))) {
    MS.showLoading(true)
    setTimeout(() => {
      window.location.href = "index.html"
    }, 1000);
  } else {
    MS.showNotification('Đăng nhập thất bại')
  }
})

