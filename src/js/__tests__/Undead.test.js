import Undead from '../Undead'

test ('Undead', () => {
    const result = new Undead('Нежить', 'Undead');
    const expected = {
        name:'Нежить', 
        type:'Undead', 
        health:100, 
        level:1, 
        attack:25, 
        defence:25
    };
    expect(result).toEqual(expected);
})