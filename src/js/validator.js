const validator = (function(){
  const required = function(value) {
    if(value && value !== '' && typeof value !== 'underfined') {
      return true
    }
    return false
  }

  const validate = function(value, rules) {
    return rules.every(rule => this[rule](value))
  }

  return Object.freeze({
    required,
    validate
  })
})()

export default validator