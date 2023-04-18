import Zombie from '../Zombie'

test ('Zombie', () => {
    const result = new Zombie('Зомби', 'Zombie');
    expect(result).toEqual({name:'Зомби', type:'Zombie', health:100, level:1, attack:40, defence:10})
})