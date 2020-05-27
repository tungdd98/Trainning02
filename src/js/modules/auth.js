import MS from '../../helpers/index.js'

const auth = (function () {

  /**
   * 
   * @param {*} form 
   */
  const submitFormLogin = function (form) {
    let formData = new FormData()
    let isOk = true
    let data = {
      'login-email': {
        value: null,
        rules: ['required', 'email'],
        errors: ['Email is required', 'Email invalidate']
      },
      'login-password': {
        value: null,
        rules: ['required'],
        errors: ['Password is required']
      },
    }

    Object.entries(data).forEach(([key, value]) => {
      let isDone = MS.setValue(form[key].value.trim(), value, form, key)

      if (!isDone) {
        form[key].nextElementSibling.classList.add('active')
        isOk = false
      } else {
        if (form[key].nextElementSibling.classList.contains('active')) {
          form[key].nextElementSibling.classList.remove('active')
        }
        formData.append(key, value.value)
      }
    })

    if (isOk) {
      return formData
    }

    return false
  }

  /**
   * 
   * @param {*} form 
   */
  const submitFormRegister = function (form) {
    let formData = new FormData()
    let isOk = true
    let data = {
      'username': {
        value: null,
        rules: ['required', 'username'],
        errors: ['Username is required', 'Useename do not enter numbers or special characters']
      },
      'register-email': {
        value: null,
        rules: ['email'],
        errors: ['Email invalidate']
      },
      'register-password': {
        value: null,
        rules: ['password'],
        errors: ['Password invalidate']
      },
    }
    let confirm = {
      'register-re-password': {
        value: null,
        rules: ['confirm'],
        error: 'Password confirm is not match',
        match: 'register-password'
      },
      'register-re-email': {
        value: null,
        rules: ['confirm'],
        error: 'Email confirm is not match',
        match: 'register-email'
      },
    }

    Object.entries(data).forEach(([key, value]) => {
      let isDone = MS.setValue(form[key].value.trim(), value, form, key)

      if (!isDone) {
        form[key].nextElementSibling.classList.add('active')
        isOk = false
      } else {
        if (form[key].nextElementSibling.classList.contains('active')) {
          form[key].nextElementSibling.classList.remove('active')
        }
        formData.append(key, value.value)
      }
    })

    Object.entries(confirm).forEach(([key, value]) => {
      let isDone = MS.confirmField(form[key].value.trim(), form[value.match].value.trim(), value, form, key)

      if (!isDone) {
        form[key].nextElementSibling.classList.add('active')
        isOk = false
      } else {
        if (form[key].nextElementSibling.classList.contains('active')) {
          form[key].nextElementSibling.classList.remove('active')
        }
        formData.append(key, value.value)
      }
    })

    if (isOk) {
      return formData
    }

    return false
  }

  return Object.freeze({
    submitFormLogin,
    submitFormRegister
  })
})()

export default auth