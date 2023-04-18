import Charter from "./Charter";

export default class Undead extends Charter {
    constructor (name, type){
        super(name, type)
        this.attack = 25,
        this.defence = 25;
    }
}