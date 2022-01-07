const mongoose = require('../models/mongooseDb')

const superheroModel = require('../models/superhero')

describe('Superhero model', () => {

    beforeEach(() => {
        return superheroModel.deleteAll()
    })

    afterAll(() => {
        console.log('Disconnecting DB')
        return mongoose.disconnect()
    })

    it('should create a superhero',async () => {
        //setup

        //execute
        let createdId = await superheroModel.createSuperhero({
            superheroName: 'SpiderMan',
        })

        //verify
        let foundSuperhero = await superheroModel.findById(createdId)
        expect(foundSuperhero.superheroName).toBe('SpiderMan')
    })

    it('should not allow duplicate names during create',async () => {
        // setup
        await superheroModel.createSuperhero({
            superheroName: 'SpiderMan123',
        })


        //verify
        let callToCreate = async () => {
            return superheroModel.createSuperhero({
                superheroName: 'SpiderMan123',
            })
        }
        expect(callToCreate).rejects
    })

})