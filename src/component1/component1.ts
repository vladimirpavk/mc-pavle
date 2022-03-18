export default class Component1{
    constructor(
        private name: string,
        private lastname: string,
        public nickName: string
    ){}

    public sayName() : void{
        console.log(this.name);
    }
}