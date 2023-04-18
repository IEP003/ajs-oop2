import Zombie from "../Zombie";

test ('levelUp', () => {
    const result = new Zombie ('Зомби', 'Zombie');
    result.levelUp();
    expect(result).toEqual({name:'Зомби', type:'Zombie', health:100, level:2, attack:48, defence:12})
})

test ('levelUpDead', () => {
    function errorLevelUp(){
        const result = new Zombie('Зомби', 'Zombie');
        result.health = 0;
        result.levelUp()
    }
    expect(errorLevelUp).toThrow();
})

test ('damage', () => {
    const result = new Zombie ('Зомби', 'Zombie');
    result.damage(10);
    expect(result.health).toBe(91);
})

test ('damageDead', () => {
    function errorDeadDamage() {
        const result = new Zombie('Зомби', 'Zombie');
        result.health = 0;
        result.damage(10);
    }
    expect(errorDeadDamage).toThrow()
})