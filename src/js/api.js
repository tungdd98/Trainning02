const api = (function(){
  const users = []

  const register = function(data) {
    const user = {
      id: Math.floor(Math.random() * (100 - 1)) + 1,
      username: data.get('username'),
      password: data.get('register-password'),
      email: data.get('register-email')
    }

    users.push(user)
    window.localStorage.setItem('users', JSON.stringify(users))
    console.log('Lưu thành công')
  }

  return Object.freeze({
    register
  })
})()

export default api