class Student {
    //напишем приватное св-во- св-во, которое доступно внутри класса
    private _age: number = 0;

    //геттер-функция, которая влзвращает результат
    get age(): number {
        return this._age;
    }

    set age(value: number) {
        // проверка на значение возвраста, если возвраст отрицательный, то выведется ошибка
        if (value < 0) {
            throw new Error("Out of range: age must be greater than zero");
        }

        this._age = value;
    }

    get description(): string {
        return `Студент ${this.name} учится на курсе ${this.programm}`;
    }

    name: string;
    programm: string;

    constructor(name: string, programm: string) {
        this.name = name;
        this.programm = programm;
    }


}

const student: Student = new Student('Alex', 'TypeScript');

student.name;
student.programm;

student.description;

student.age = -100;
student.age;