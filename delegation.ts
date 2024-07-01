// ДЕЛЕГИРОВАНИЕ- передача ответственности за выполнение задач. Наиболее оптимальный инструмент, чем наследование
class Pizza {
    eat(): boolean {
        return true;
    }
}

abstract class Chef {
    abstract getPizza(): Pizza;
};

class BakerChef extends Chef {
    getPizza(): Pizza {
        return new Pizza()
    }
}

class HeadChef extends Chef {
    constructor(private readonly delegate: Chef) {
        super();
    }
    getPizza(): Pizza {
        return this.delegate.getPizza();
    }

    // static isHeadChef(object: unknown): object is HeadChef {
    //     return object instanceof HeadChef;
    // }
}

class Person3 {
    constructor(private readonly delegate: HeadChef) { }

    eat(): boolean {
        const pizza = this.delegate.getPizza();
        return pizza.eat();
    }
}


const chef: HeadChef = new HeadChef(new BakerChef());
const person3: Person3 = new Person3(chef);

person3.eat();

