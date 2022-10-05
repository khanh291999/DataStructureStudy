namespace test {
  class User{
    name: string;
    constructor (name: string){
      this.name= name;
    }
  }
  const user = new User('Bob')
  console.log(user);
}