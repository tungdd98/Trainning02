import MS from '../helpers/index.js'
import Api from './modules/api.js'

const btnToggleSideBar = MS.fn('.w-header__btn')
const sidebar = MS.fn('.w-aside')
const header = MS.fn('.w-header')
const main = MS.fn('.w-main')

btnToggleSideBar.addEventListener('click', function (e) {
  if (sidebar.classList.contains('w-toggle-hidden')) {
    sidebar.classList.remove('w-toggle-hidden')
    header.classList.remove('w-toggle-hidden')
    main.classList.remove('w-toggle-hidden')
  } else {
    sidebar.classList.add('w-toggle-hidden')
    header.classList.add('w-toggle-hidden')
    main.classList.add('w-toggle-hidden')
  }
})

MS.fn('.w-user').innerHTML = Api.getCurrentUser() ? Api.getCurrentUser().username : 'Admin'