export class UserAlreadyExistError extends Error{
  constructor(){
    super("'E-mail already exists.'")
  }
}

//class de error personalizado