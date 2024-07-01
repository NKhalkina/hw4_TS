//АБСТРАКТНЫЕ КЛАССЫ похожи на классы и на интерфейсы.
//-отличие от класса: 1)Их можно описать, но невозможно создать экземпляр класса. Обычно исп-ся как обобщение группы классов
//2) нельзя создать instance от абстрактных классов
//создать абстракный класс можно с помощью abstract class потом название класса. В абстрактных классах можно реализовать методы, конструкторы и св-ва классов.
abstract class Figure {
    abstract getArea(): number;

    static isFigure(object: unknown): object is Figure {
        return object instanceof Figure;
    }
}

//создадим класс Rectangle, который будет наследовать класс  Figure
class Rectangle extends Figure {
    constructor(
        public readonly width: number,
        public readonly height: number
    ) {
        super();
    }
    getArea(): number {
        return this.width * this.height
    }
}

class Square extends Figure {
    constructor(
        public readonly size: number,

    ) {
        super();
    }
    getArea(): number {
        return this.size * this.size
    }
}

const items: ReadonlyArray<unknown> = [
    new Square(5),
    new Square(10),
    new Rectangle(5, 10)
];

for (const item of items) {
    if (Figure.isFigure(item)) {
        item.getArea();
    }
}
