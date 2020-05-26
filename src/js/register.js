import MS from '../helpers/index.js'
import validator from './validator.js'

const register = (function(){
  
  /**
   * Submit form
   * @param {*} form 
   */
  const submit = function(form) {
    let formData = new FormData()
    let isOk = true
    let data = {
      'username': {
        value: null,
        rules: ['required', 'email'],
        errors: ['Username is required', 'Vàng ăn cứt']
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
      console.log(value.match)
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
    
    if(isOk) {
      return formData
    }

    return false
  }

  return Object.freeze({
    submit
  })
})()

export default register