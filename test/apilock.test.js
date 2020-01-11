const wcrypt = require('wcrypt')
const password = '5dbac068-f55f-4ccb-862d-8753fe341e09'
const salt = 'fc96256c-b16c-4e66-862c-ce4c0ea5be1e'
const apilock = require('../index.js')(password, salt)

const locker = wcrypt({ password, salt })
const time = new Date().getTime().toString()

describe('apilock', () => {
  it('should be an object', async () => {
    const key = await locker.encrypt(time)
    const invalid = await apilock(key)
    expect(invalid).toEqual(false)
  })
})
