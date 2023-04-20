import Zombie from '../Zombie'

test ('Zombie', () => {
    const result = new Zombie('Зомби', 'Zombie');
    const expected = {
        name:'Зомби', 
        type:'Zombie', 
        health:100, 
        level:1, 
        attack:40, 
        defence:10
    };
    expect(result).toEqual(expected);
})