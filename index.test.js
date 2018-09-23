const stringToByteArray = require('./')

console.log(typeof stringToByteArray)

test('a is 97', () => {
    let v = stringToByteArray('a')
    expect(v[0]).toBe(97)
})


test('character from 190 to 225', () => {
    let s , v, a
    for (let i = 190; i < 225; i++) {
        s = String.fromCharCode(i)
        a = stringToByteArray(s)
        v = a[0]
        expect(v).toBe(i)
    }
})
