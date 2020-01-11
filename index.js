const wcrypt = require('wcrypt')

module.exports = function(password, salt) {
  const locker = wcrypt({ password, salt })
  return async function(apiKey) {
    let apiKeyInvalid = true
    if (apiKey) {
      try {
        const timestamp = await locker.decrypt(apiKey)
        const date = new Date(timestamp)
        const now = new Date().getTime()
        apiKeyInvalid = date > now
        if (apiKeyInvalid) {
          console.log('API key has expired')
        } else {
          console.log('API key verified')
        }
      } catch (e) {
        console.log('API key invalid')
      }
    } else {
      console.log('API key not found')
    }
    return apiKeyInvalid
  }
}
