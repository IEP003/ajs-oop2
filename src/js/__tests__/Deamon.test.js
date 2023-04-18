import Deamon from '../Deamon'

test ('Daemon', () => {
    const result = new Deamon('Саурон', 'Daemon');
    expect(result).toEqual({name:'Саурон', type:'Daemon', health:100, level:1, attack:10, defence:40})
})