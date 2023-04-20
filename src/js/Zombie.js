import Charter from "./Charter";

export default class Zombie extends Charter {
    constructor (name, type){
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}
