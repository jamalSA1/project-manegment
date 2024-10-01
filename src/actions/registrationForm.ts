export function registrationFormForAdmin(formData:FormData) {
  const adminName = formData.get('adminName')
  const companyName = formData.get('companyName')
  const secretCode = formData.get('secretCode')

  console.log(companyName)
  console.log(adminName)
  console.log(secretCode)
}
export function registrationFormForEmployee(formData:FormData) {
  const adminName = formData.get('adminName')
  const companyName = formData.get('companyName')
  const secretCode = formData.get('secretCode')

  console.log(companyName)
  console.log(adminName)
  console.log(secretCode)
}