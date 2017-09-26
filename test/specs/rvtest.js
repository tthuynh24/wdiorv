var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');

describe('frontier landing page', () => {
    it('should have the right title', () => {
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'Frontier® Internet Service | 877-870-4601 | Frontier Communications')
    })
});

describe('making sure links direct correctly', () => {
    beforeEach(function () {
        browser.url('/');
        browser.pause(2000);
    })

    //Existing Customer Page
    it('should have a link to the Existing Customers page', () => {
        var hasExistCustPage = browser.isExisting('a[href="/existing-customers.html"]')
        assert(hasExistCustPage);
    })

    it('should take you to the Existing Customer page', () => {
        browser.click('a[href="/existing-customers.html"]')
        var title = browser.getTitle();
        assert.equal(title, 'Frontier Customer Service | Call to Upgrade Today!')
    })

    //Shop Online Page
    it.only('should have a link to the Shop Online page', () => {
        var shopOnlinePage = browser.isExisting('=Shop Online')
        assert(shopOnlinePage);
    })

    // Ended up to a page that has no title so test failed
    it.only('should take you to the Shop Online page', () => {
        browser.click('=Shop Online')
        var title = browser.getTitle();
        assert.equal(title, 'https://internet.frontier.com/cart/address')
    })
});

describe('image/graphic visibility test', () => {

    beforeEach(function () {	    
	    browser.url('/');
	    browser.pause(2000);
	});

	
	it('should have a visible logo image', () => {
		var logoImg = browser.isVisible('.masthead__logo');
		console.log("Logo image is visible:", logoImg);
		expect(logoImg).to.eq(true);
	});

	it('should detect main nav bar is visible ', () => {
	    var navBar = browser.isVisible('.nav-aux');
	    console.log("Nav bar is visible:", navBar);
	    expect(navBar).to.eq(true);
	});

	
	

});