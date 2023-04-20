import Deamon from '../Deamon'

test ('Daemon', () => {
    const result = new Deamon('Саурон', 'Daemon');
    const expected = {
        name:'Саурон', 
        type:'Daemon', 
        health:100, 
        level:1, 
        attack:10, 
        defence:40
    };
    expect(result).toEqual(expected);
})