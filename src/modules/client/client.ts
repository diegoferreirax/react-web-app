export class Client {

    public name: string;
    public surname: string;
    public age: number;
    public state: string;
    public phoneNumber: string;

    constructor(
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
    
}