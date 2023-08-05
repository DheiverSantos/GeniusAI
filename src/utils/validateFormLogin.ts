const MIN_NUMBER_PASSWORD = 3

export const isValidEmail = (validEmail: string) =>
  /\S+@\S+\.\S+/.test(validEmail)

export const isValidPassword = (password: string) =>
  password.length >= MIN_NUMBER_PASSWORD

export const isLoginFormValid = (email: string, password: string) => {
  const isEmailValid = isValidEmail(email)
  const isPasswordValid = isValidPassword(password)
  return isEmailValid && isPasswordValid
}
