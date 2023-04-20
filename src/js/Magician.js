import Charter from "./Charter";

export default class Magician extends Charter {
    constructor (name, type){
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}