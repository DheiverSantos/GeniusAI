const users = [
  {
    email: 'usuario@email.com',
    password: 'geniusai',
  },
  {
    email: 'teste@email.com',
    password: '123456',
  },
]

export const validateLogin = (email: string, password: string): boolean => {
  for (const user of users) {
    if (user.email === email && user.password === password) {
      return true
    }
  }
  return false
}
