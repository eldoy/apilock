# API Lock
Time stamped API key decrypter and checker.

### Install
```bash
npm i apilock
```

### Usage
```javascript
// Create password and salt
const password = '5dbac068-f55f-4ccb-862d-8753fe341e09'
const salt = 'fc96256c-b16c-4e66-862c-ce4c0ea5be1e'

// Encrypt key based on today's date
const wcrypt = require('wcrypt')
const locker = wcrypt({ password, salt })
const time = new Date().getTime().toString()
const key = await locker.encrypt(time)

// Check if it's invalid
const apilock = require('apilock')(password, salt)
const invalid = await apilock(key)
```
MIT Licensed. Enjoy!
