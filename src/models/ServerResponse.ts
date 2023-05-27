export  class ServerResponse{
  token:string;
  user:User;
  status:string;
}

export class User{
  username:string;
  password:string;
  address:string;
  emailAddress:string;
  dateOfJoing:Date;
}