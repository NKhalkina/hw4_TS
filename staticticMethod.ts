//СТАТИЧЕСКИЕ МЕТОДЫ И СВ-ВА-те, к. мы присвоили в класс, и обычно их можно встретить у утилитарных классов. Чтобы создать статические св-ва или методы, нужно написать static перед названием класса или метода, а значит мы можем к ним обращаться без создания instanses класса
class TimeSpan {
    constructor(public readonly ticks: number) { }
    //const заменим static, тем самым сделаем статические св-ва
    static ticksPerSeconds: number = 1000;

    static ticksPerMinutes: number = 1000 * 60;

    static ticksPerHours: number = 1000 * 60 * 60;

    static ticksPerDays: number = 1000 * 60 * 60 * 24;

    //заменим function на static- это значит, что теперь мы их можем использовать, как методы
    static fromSeconds(seconds: number): TimeSpan {
        return new TimeSpan(seconds * TimeSpan.ticksPerSeconds);
    }

    static fromMinutes(minutes: number): TimeSpan {
        return new TimeSpan(minutes * TimeSpan.ticksPerMinutes);
    }

    static fromHours(hours: number): TimeSpan {
        return new TimeSpan(hours * TimeSpan.ticksPerHours);
    }

    static fromDays(days: number): TimeSpan {
        return new TimeSpan(days * TimeSpan.ticksPerDays);
    }
}

const oneMinunts: TimeSpan = TimeSpan.fromMinutes(1);

const fiveSeconds: TimeSpan = TimeSpan.fromSeconds(5);

//Статические методы
Date.now;
Array.from([]);