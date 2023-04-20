import Zombie from "../Zombie";

test ('Тестирование повышения уровня', () => {
    const result = new Zombie ('Зомби', 'Zombie');
    result.levelUp();
    const expected = {
        name:'Зомби', 
        type:'Zombie', 
        health:100, 
        level:2, 
        attack:48, 
        defence:12
    } 
    expect(result).toEqual(expected)
})

test ('Тестирование повышение уровня мертвого персонажа', () => {
    expect(() => {
        const result = new Zombie('Зомби', 'Zombie');
        result.health = 0;
        result.levelUp();
    }).toThrow();
})

test ('Тестирование получения урона', () => {
    const result = new Zombie ('Зомби', 'Zombie');
    result.damage(10);
    expect(result.health).toBe(91);
})

test ('Тестирование получения урона мертвого персонажа', () => {
    expect(() => {
        const result = new Zombie('Зомби', 'Zombie');
        result.health = 0;
        result.damage(10);
    }).toThrow()
})