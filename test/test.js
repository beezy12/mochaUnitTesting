var assert = require('assert');

describe('Array here', function() {

	it("should equal -1 when the value is not found", function() {
		assert.equal(-1, [1, 2, 3].indexOf(30));
	})
});



describe('length of array', function() {
	var arr = [1, 2, 3, 4, 5];
	var funky = function(myArray) {
		return myArray.length;
	}

	it('should return the length of an array', function() {
		assert.equal(5, funky(arr));
		assert.equal(3, funky(["apple", "knife", "donkey"]));
		// assert.equal(5, funky(arr));
	})
})




var expect = require('chai').expect;

describe('length of an array with chai', function() {

	var butt = require('./importThis.js');

	it("should return the length of an array", function() {
		expect(butt([3, 6, 8, 23])).to.eql(4);
	})


})








