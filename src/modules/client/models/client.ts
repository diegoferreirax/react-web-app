export class Client {

    public id: string;
    public name: string;
    public cpf: string;
    public dateOfBirth: string;
    public motherName: string;
    public age: number;

    constructor(
        id: string,
        name: string,
        cpf: string,
        dateOfBirth: string,
        motherName: string,
        age: number,
    ) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.dateOfBirth = dateOfBirth;
        this.motherName = motherName;
        this.age = age;
    }
    
}