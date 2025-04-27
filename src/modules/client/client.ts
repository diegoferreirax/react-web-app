export class Client {

    public name: string;
    public surname: string;
    public age: number;
    public state: string;
    public phoneNumber: string;

    private constructor(
        name: string,
        surname: string,
        age: number,
        state: string,
        phoneNumber: string
    ) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.state = state;
        this.phoneNumber = phoneNumber;
    }

    public static Create(
        name: string,
        surname: string,
        age: number,
        state: string,
        phoneNumber: string
    ): Client {
        return new Client(name, surname, age, state, phoneNumber);
    }
    
}