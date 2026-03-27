const hasPairWithSum = require('./ya-in-12');

describe('hasPairWithSum', () => {

    test('returns true when pair exists', () => {
        expect(hasPairWithSum([1, 5, 4, 30], 9)).toBe(true);
    });

});