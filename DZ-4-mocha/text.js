var assert = require('assert')
decribe('Array', function() {
	decribe('#indexOf()', finction() {
		if('should return -1 when the value is not present', function() {
			assert.equal([1, 2, 3].indexOf(4), -1);
		});
	});
});