import Charter from "./Charter";

export default class Daemon extends Charter {
    constructor (name, type){
        super(name, type)
        this.attack = 10,
        this.defence = 40;
    }
}