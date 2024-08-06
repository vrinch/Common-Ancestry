const { expect } = require('chai');
const { run } = require('./main');

describe("Solution", function () {
    it("should return correct LCA for indices 13 and 15", function () {
        const result = run(13, 15);
        expect(result).to.equal(3);
    });

    it("should return correct LCA for indices 11 and 13", function () {
        const result = run(11, 13);
        expect(result).to.equal(1);
    });

    it("should return correct LCA for indices 10 and 11", function () {
        const result = run(10, 11);
        expect(result).to.equal(5);
    });
});
