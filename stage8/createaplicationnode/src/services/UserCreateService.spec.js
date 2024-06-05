const UserCreateService = require('./UserCreateService')
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory')
const appError = require('../utils/appError')


describe("UserCreateService", () => {
    let userRepositoryInMemory = null
    let userCreateService = null
    
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepositoryInMemory)
    })

    it("User should be create", async () => {
        const user = {
            name: "User Test",
            email: "user@test.com",
            password: "123"
        }

        const userCreated = await userCreateService.execute(user)
        expect(userCreated).toHaveProperty("id")
    }) 
    
    it("E-mail already exists", async () => {
        const user1 = {
            name: 'Test 1',
            email: 'test@.com',
            password: '123'
        }

        const user2 = {
            name: 'Test 2',
            email: 'test@.com',
            password: '456'
        }
        
        await userCreateService.execute(user1)

        expect(userCreateService.execute(user2)).rejects.toEqual(new appError('This e-mail already exists'))
    })
})
