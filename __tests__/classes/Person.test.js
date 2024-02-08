const Person = require('../../classes/Person')
const Bag = require('../../classes/Bag')

//testing that we can create instance of Person
describe('Person test', () => {
    test('should create an instance of a Person', () => {
        const person1 = new Person('ibrahim', 'New York City');
        expect(person1).toBeInstanceOf(Person)
    })
//testing name and destination
test('should set name and destination correctly', () => {
    const name = 'ibrahim';
    const destination = 'New York City';
    const person2 = new Person(name, destination);
    expect(person2.name).toBe(name);
    expect(person2.destination).toBe(destination);
})

//testing that bags is an array
test('should return an empty array of bags', () => {
    const name = "ibrahim"
    const destination = 'Chicago'
    const person3 = new Person(name, destination)
    expect(person3.bags).toMatchObject([])
})

//testing that addBags adds an item to the array
test('should return an array length of 1', () => {
    const name = "ibrahim"
    const destination = 'Chicago'
    const bag = new Bag(100,3)
    const person3 = new Person(name, destination)
    person3.addBag(bag)
    expect(person3.bags).toHaveLength(1)
})

})