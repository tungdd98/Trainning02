import '../scss/main.css'
import MS from '../helpers/index.js'
import Auth from './modules/auth.js'
import Api from './modules/api.js'

for (let btn of MS.fn('.w-tabs a', true)) {
  btn.addEventListener('click', function () {
    const target = this.getAttribute('data-tab')

    MS.fn('.w-tabs a', true).forEach((btn, key) => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active')
      }
    })

    if (!this.classList.contains('active')) {
      this.classList.add('active')
    }

    MS.fn('.w-tabs-content', true).forEach((tab, key) => {
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

document.forms['register'].addEventListener('submit', function (e) {
  e.preventDefault();
  if (Api.register(Auth.submitFormRegister(this))) {
    const size = MS.fn('.w-tabs a', true).length
    const user = Api.getUserRegister()

    document.forms['login']['login-email'].value = user.email
    document.forms['login']['login-password'].value = user.password
    MS.showNotification('Đăng ký thành công')
    MS.resetForm(this, ['username', 'register-email', 'register-re-email', 'register-password', 'register-re-password'])
    for (let i = 0; i < size; i++) {
      const btn = MS.fn('.w-tabs a', true)[i]
      const tab = MS.fn('.w-tabs-content', true)[i]

      btn.classList.contains('active') ? btn.classList.remove('active') : btn.classList.add('active')
      tab.classList.contains('active') ? tab.classList.remove('active') : tab.classList.add('active')
    }
  }
})

document.forms['login'].addEventListener('submit', function (e) {
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

