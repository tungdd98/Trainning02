import MS from '../helpers/index.js'
import validator from './validator.js'

const register = (function(){
  
  const submit = function(form) {
    const formData = new FormData()
    let isOk = true
    const data = {
      'username': {
        value: null,
        validator: ['required']
      },
      'register-email': {
        value: null,
        validator: []
      },
      'register-re-email': {
        value: null,
        validator: []
      },
      'register-password': {
        value: null,
        validator: []
      },
      'register-re-password': {
        value: null,
        validator: []
      },
    }
    
    Object.entries(data).forEach(([key, value]) => {
      let isDone = MS.setValue(form[key].value.trim(), value)
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
