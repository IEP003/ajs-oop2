import Charter from "./Charter";

export default class Bowerman extends Charter {
    constructor (name, type){
        super(name, type)
        this.attack = 25,
        this.defence = 25;
    }
}
