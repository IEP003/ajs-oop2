import Magician from '../Magician'

test ('Magician', () => {
    const result = new Magician('Гэндальф', 'Magician');
    const expected = {
        name:'Гэндальф', 
        type:'Magician', 
        health:100, 
        level:1, 
        attack:10, 
        defence:40
    };
    expect(result).toEqual(expected);
})