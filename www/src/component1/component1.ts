export default class Component1{
    constructor(
        private name: string,
        private lastname: string,
        public nickName: string
    ){}

    public sayName() : string{
        return this.name+'*';
    }
}