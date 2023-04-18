import Bowerman from '../Bowerman'

test ('Bowerman', () => {
    const result = new Bowerman('Леголас', 'Bowerman');
    expect(result).toEqual({name:'Леголас', type:'Bowerman', health:100, level:1, attack:25, defence:25})
})