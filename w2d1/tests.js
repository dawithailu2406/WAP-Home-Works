describe("Testing", function () {
    describe("my test for the sum", function () {
        it("sum given arrays elements", function () {
            assert.equal(20, sum([2, 4,6,8]));

        });
    });
    describe("my test for the multiplacation ", function () {
        it("Multiply given array elements", function () {
            assert.equal(120, multiply([2, 3, 4, 5]))
        });
    });
    describe("my test for reversed", function () {
        it("Reverses a given string", function () {
            assert.equal('sennahafset', reverse('tesfahannes'))
        });
    });
    describe("my test for the longest word", function () {
        it("Filters long words", function () {
            assert.equal('berhane', filterLongWords(['dawit', 'berhane', 'helen', 'tirhas'], 6));
        });
    });
    



    // ... more tests to follow here, both describe and it can be added
});