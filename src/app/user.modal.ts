export class User{
    
    id:number;
    username:string;
    email:string;
    phone:number;

    constructor(id, username, email, phone){
        this.id = id;
        this.username = username;
        this.email = email;
        this.phone = phone;
    }
}