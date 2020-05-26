import validator from '../js/validator.js'

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

  return Object.freeze({
    fn,
    setValue,
    confirmField,
  })
})()

export default helpers