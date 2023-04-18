import Magician from '../Magician'

test ('Magician', () => {
    const result = new Magician('Гэндальф', 'Magician');
    expect(result).toEqual({name:'Гэндальф', type:'Magician', health:100, level:1, attack:10, defence:40})
})