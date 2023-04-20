export default class Charter {
    constructor(name, type){
        if (name.length < 2 || name.length > 10){
            throw new Error('имя должно содержать не менее 2-ух символов');
        };
        const arrType = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (arrType.indexOf(type) === -1){
            throw new Error('не корректный тип персонажа');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }

    levelUp(){
        if(this.health >= 1){
            this.level ++;
            this.attack += (this.attack * (20 / 100));
            this.defence += (this.defence * (20 / 100));
            this.health = 100;
        } else {
            throw new Error('нельзя повысить левел умершего');
        }
    }
    
    damage(points){
        if(this.health >= 1){
            this.health -= points * (1 - this.defence / 100)
        } else {
            throw new Error('нельзя получить урон умершему персонажу');
        }
    }
}