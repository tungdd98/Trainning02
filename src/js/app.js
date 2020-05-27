import '../scss/main.css'
import MS from '../helpers/index.js'
import Api from './modules/api.js'

/* === Home === */
MS.fn('.w-header__btn').addEventListener('click', function (e) {
  if (MS.fn('.w-aside').classList.contains('w-toggle-hidden')) {
    MS.fn('.w-aside').classList.remove('w-toggle-hidden')
    MS.fn('.w-header').classList.remove('w-toggle-hidden')
    MS.fn('.w-main').classList.remove('w-toggle-hidden')
  } else {
    MS.fn('.w-aside').classList.add('w-toggle-hidden')
    MS.fn('.w-header').classList.add('w-toggle-hidden')
    MS.fn('.w-main').classList.add('w-toggle-hidden')
  }
})

MS.fn('.w-js-logout').addEventListener('click', function () {
  if (Api.logout()) {
    window.location.href = "auth.html"
  }
})

MS.fn('.w-user').innerHTML = Api.getCurrentUser() ? Api.getCurrentUser().username : 'Admin'