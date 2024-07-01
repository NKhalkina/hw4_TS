//АГРЕГИРОВАНИЕ-еще один способ использовать классы, но не использовать наследование. Это взаимосвязь между контейнером и его содержимым, и при этом эти 2 объекта могут существовать вне зависимости друг от друга

abstract class Ingredient {
    constructor(
        public readonly name: string,
        public readonly gramm: number,
    ) { }
}

class Tomato extends Ingredient {
    constructor(grams: number) {
        super('tomato', grams);
    }
}

class Cheese extends Ingredient {
    constructor(grams: number) {
        super('cheese', grams);
    }
}

class Becon extends Ingredient {
    constructor(grams: number) {
        super('becon', grams);
    }
}

abstract class Pizza1 {
    constructor(public readonly ingredients: ReadonlyArray<Ingredient>) { }
}

class CheesePizza extends Pizza1 {
    constructor() {
        super(
            [new Tomato(100),
            new Cheese(200)]
        )
    }
}

class BeconPizza extends Pizza1 {
    constructor() {
        super([
            new Tomato(100),
            new Cheese(200),
            new Becon(100)
        ])
    }
}

const cheesePizza: Pizza1 = new CheesePizza();