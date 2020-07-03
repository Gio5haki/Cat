// Create an object that represents a cat. It should have properties for `tiredness`, `hunger`, `loneliness` and `happiness`

class Cat {
    constructor() {
        this._tiredness = 0;
        this._hunger = 0;
        this._loneliness = 0;
        this._happiness = 0;
    }

// Create methods that increase/decrease these properties
    increaseTiredness(value) {
        this._tiredness += value;
    };
    decreaseTiredness(value){
        this._tiredness -= value;
    };
    
    increaseHunger(value) {
        this._hunger += value;
    };

    decreaseHunger(value) {
        this._hunger -= value;
    };
    
    increaseLoneliness(value) {
        this._loneliness += value;
    };

    decreaseLoneliness(value) {
        this._loneliness -= value;
    };
    
    increaseHappiness(value) {
        this._happiness += value;
    };
    decreaseHappiness(value) {
        this._happiness -= value;
    };
}





const Garfield = new Cat();