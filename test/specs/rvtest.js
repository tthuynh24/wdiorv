var chai = require('chai');
var expect = chai.expect;

describe('image visibility test', () => {

    beforeEach(function () {	    
	    browser.url('/');
	    browser.pause(2000);
	});

	
	it('should have a visible logo image', () => {
		var logoImg = browser.isVisible('.masthead__logo');
		console.log("Logo image is visible:", logoImg);
		expect(logoImg).to.eq(true);
	});

	

	

	

});