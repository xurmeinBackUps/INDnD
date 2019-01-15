export interface ActiveUser{
    email : string;
    username : string;
    pin : number;
    sessionToken : string
}

export class LoginForm{
    constructor(
        public username : string,
        public pin : number,
        public email : string
    ){}
}
    
// export interface SessionToken extends ActiveUser{
//     token : string
// }