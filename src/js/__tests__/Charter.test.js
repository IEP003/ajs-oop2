import Charter from "../Charter";

test ('Charter', () => {
    const result = new Charter('Леголас', 'Bowerman');
    expect(result.name).toBe('Леголас'),
    expect(result.type).toBe('Bowerman'),
    expect(result.health).toBe(100),
    expect(result.level).toBe(1);
})

test ('checkName', () => {
    function result(){
       return new Charter('v', 'Zombie')
    } 
    expect(result).toThrow()
})

test ('checkType', () => {
    function result(){
        return new Charter('Granny', 'Grandmother')
    }
    expect(result).toThrow()
})