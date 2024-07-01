//когда создаем классы иногда необходимо создать новый класс с наследованием логики другого класса, с целью его переиспользовать, изменить , долполнить  и реализовать

class Person {
    public publicField: unknown;
    private privateField: unknown; ////если хотим сделать метод, доступный только в этом классе
    protected protectedField: unknown; //если хотим сделать метод, доступный классам-наследникам, но недоступным извне, то используем protected

    //задекларируем конструктор, в котором укажу публичное и readonly св-во
    constructor(public readonly name: string) {
        this.publicField
        this.privateField
        this.protectedField
    }
    //статический метод (является TypeGard), который позволит убедиться, что это объект Person
    static isPerson(object: unknown): object is Person {
        //проверим является ли object instance класса Person
        return object instanceof Person;
    }

    description(): string {
        return `Меня зовут ${this.name}`
    }
}
//класс Student наследует класс Person
class Student2 extends Person {
    constructor(name: string, public readonly program: string) {
        super(name); //super обращается к базовому классу и вызывает его конструктор
        this.publicField
        //this.privateField
        this.protectedField
    }
    //проверим является ли object instance класса Student
    static isStudent(object: unknown): object is Student2 {
        return object instanceof Student2;
    }

    //переопределяем метод description
    override description(): string {
        const description = super.description();
        return `${description} и я учусь на ${this.program}`;
    }
}
//создадим instance 
const student2: Student2 = new Student2('Alexa', 'TS')
const person: Person = new Person('Alex');

person.description();
student2.description();

student2.publicField
//student2.privateField
//student2.protectedField

//проверяем является ли person классам Person
function processObject(object: object): void {
    if (Person.isPerson(object)) {
        object.name;
    }

    if (Student2.isStudent(object)) {
        object.name;
        object.program;
    }
}

processObject(person);
processObject(student)