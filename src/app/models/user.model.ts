export interface ActiveUser{
    username : string;
    email : string;
    password : string;
    sessionToken : string
}

export class LoginForm{
    constructor(
        public username : string,
        public email : string,
        public password : string
    ){}
}
    
// export interface SessionToken extends ActiveUser{
//     token : string
// }