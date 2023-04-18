import Swordsman from '../Swordsman'

test ('Swordsman', () => {
    const result = new Swordsman('Арагорн', 'Swordsman');
    expect(result).toEqual({name:'Арагорн', type:'Swordsman', health:100, level:1, attack:40, defence:10})
})