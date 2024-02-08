const Bag = require('./Bag')

class Person extends Bag{
    constructor(name, destination, bags){
        super(bags)
        this.name = name;
        this.destination = destination;
        this.bags = []
    }


    addBag(newBag){
       // let newBag = new bag(weight, id)
        this.bags.push(newBag)
    }

    getBag(){
        return this.bags
    }

}


module.exports = Person;