const validator = (function(){
  /**
   * Required validate
   * @param {*} value 
   */
  const required = function(value) {
    if(value && value !== '' && typeof value !== 'underfined') {
      return true
    }

    return false
  }

  /**
   * Email validate
   * @param {*} value 
   */
  const email = function(value) {
    const regex = /^[a-z0-9](\.?[a-z0-9])*@[a-z]{3,}\.[a-z]{1,3}$/g

    if(regex.test(value)) {
      return true
    } 

    return false
  }

  /**
   * Password validate
   * @param {*} value 
   */
  const password = function(value) {
    const regex = /^.{6,24}$/g

    if(regex.test(value)) {
      return true
    }

    return false
  }

  /**
   * Confirm field validate
   * @param {*} oldVal 
   * @param {*} newVal 
   */
  const confirm = function(oldVal, newVal, field, form, key) {
    if(oldVal === newVal) {
      return true
    }
    form[key].nextElementSibling.innerHTML = field.error

    return false
  }

  /**
   * 
   * @param {*} value giá trị nhận được từ ô input
   * @param {*} field dữ liệu của trường gửi lên
   * @param {*} form form đang xét
   * @param {*} key tên field
   */
  const validate = function(value, field, form = null, key) {
    return field.rules.every((rule, index) => {
      if (this[rule](value)) {
        return true
      }
      form[key].nextElementSibling.innerHTML = field.errors[index]

      return false
    })
  }

  return Object.freeze({
    required,
    email,
    password,
    confirm,
    validate
  })
})()

export default validator