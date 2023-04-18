import Undead from '../Undead'

test ('Undead', () => {
    const result = new Undead('Нежить', 'Undead');
    expect(result).toEqual({name:'Нежить', type:'Undead', health:100, level:1, attack:25, defence:25})
})