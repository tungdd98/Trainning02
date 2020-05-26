const api = (function () {
  let users = JSON.parse(window.localStorage.getItem('users')) || []
  let currentUser = JSON.parse(window.localStorage.getItem('user')) || null

  /**
   * 
   * @param {*} data 
   */
  const register = function (data) {
    if (data) {
      const user = {
        id: Math.floor(Math.random() * (100 - 1)) + 1,
        username: data.get('username'),
        password: data.get('register-password'),
        email: data.get('register-email')
      }

      users.push(user)
      window.localStorage.setItem('users', JSON.stringify(users))
      
      return true
    }

    return false
  }

  /**
   * 
   * @param {*} data 
   */
  const login = function (data) {
    if (data) {
      let email = data.get('login-email')
      let password = data.get('login-password')
      let index = users.findIndex(user => user.email === email && user.password === password)

      if (index > -1) {
        currentUser = users[index]
        window.localStorage.setItem('user', JSON.stringify(currentUser))

        return true
      }
    }

    return false
  }

  /**
   * Get user login
   */
  const getCurrentUser = function() {
    return currentUser
  }

  return Object.freeze({
    register,
    login,
    getCurrentUser
  })
})()

export default api