import validator from '../js/validator.js'

const helpers = (function() {
  const Validator = validator
  const fn = function (selector, isAll = false) {
    return !isAll ? document.querySelector(selector) : document.querySelectorAll(selector)
  }

  const setValue = function(value, key) {
    if (Validator.validate(value, key.validator)) {
      key.value = value
      return true
    }
    
    return false
  }

  return Object.freeze({
    fn,
    setValue
  })
})()

export default helpers