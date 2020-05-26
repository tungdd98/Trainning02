import validator from '../js/modules/validator.js'

const helpers = (function() {
  /**
   * $
   * @param {*} selector 
   * @param {*} isAll 
   */
  const fn = function (selector, isAll = false) {
    return !isAll ? document.querySelector(selector) : document.querySelectorAll(selector)
  }

  /**
   * 
   * @param {*} value giá trị đem đi so sánh
   * @param {*} field dữ liệu giá trị đang xét
   * @param {*} form form đang xét
   * @param {*} key tên trường cần xét
   */
  const setValue = function(value, field, form = null, key) {
    if (validator.validate(value, field, form, key)) {
      field.value = value
      return true
    }

    return false
  }

  /**
   * 
   * @param {*} oldVal giá trị cần match
   * @param {*} newVal giá trị nhập
   * @param {*} field dữ liệu giá trị đang xét
   * @param {*} form form đang xét
   * @param {*} key tên trường cần xét
   */
  const confirmField = function(oldVal, newVal, field, form = null, key) {
    if(validator.confirm(oldVal, newVal, field, form, key)) {
      field.value = newVal
      return true
    }

    return false
  }

  /**
   * 
   * @param {*} form 
   * @param {*} fields 
   */
  const resetForm = function(form, fields) {
    fields.forEach(field => form[field].value = '')
  }

  /**
   * 
   * @param {*} messenger 
   * @param {*} status 
   */
  const showNotification = function(messenger = '', status = 'success', time = 1000) {
    const element = document.createElement('div')

    element.classList.add('w-notification', `w-notification--${status}`, 'show')
    setTimeout(() => {
      if(element.classList.contains('show')) {
        element.classList.remove('show')
      }
    }, time);
    element.innerHTML = messenger
    document.body.appendChild(element)
  }

  /**
   * 
   * @param {*} status 
   */
  const showLoading = function(status = false) {
    if(status) {
      if(!fn('.w-loading').classList.contains('show')) {
        fn('.w-loading').classList.add('show')
      } else {
        fn('.w-loading').classList.remove('show')
      }
    }
  }

  return Object.freeze({
    fn,
    setValue,
    confirmField,
    resetForm,
    showNotification,
    showLoading,
  })
})()

export default helpers