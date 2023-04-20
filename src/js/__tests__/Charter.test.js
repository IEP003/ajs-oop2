import Charter from "../Charter";

test ('Проверка создания персонажа', () => {
    const result = new Charter('Леголас', 'Bowerman');
    const expected = {
        name: 'Леголас',
        type: 'Bowerman',
        health: 100,
        level: 1
    }
    expect(result).toEqual(expected);
})

test ('Проверка на корректное имя', () => {
    expect(() => {
        return new Charter('v', 'Zombie');
    }).toThrow()
})

test ('Проверка на корректный тип', () => {
    expect(() => {
        return new Charter('Granny', 'Grandmother');
    }).toThrow()
})