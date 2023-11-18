const { mean, median, mode } = require('./calculate');

describe('test calculate', () => {
    test('test mean', () => {
        expect(mean([3,3,3])).toBe(3);
    });

    test('test median', () => {
        expect(median([1,2,3,4,5])).toBe(3);
    });

    test('test mode', () => {
        expect(mode([1,2,3,4,5,2])).toBe(2);
    });
});