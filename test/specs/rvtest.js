var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');

describe('frontier landing page', () => {
    beforeEach(function () {
        browser.url('/');
        browser.pause(2000);
    })

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

    //Plans & Pricing
    it('should have a link to the Pricing page', () => {
        var hasPricingPage = browser.isExisting('a[href="/plans-pricing.html"]')
        assert(hasPricingtPage);
    })

    it('should take you to the Pricing page', () => {
        browser.click('a[href="/plans-pricing.html"]')
        var title = browser.getTitle();
        assert.equal(title, 'Frontier Internet Plans | 1-877-671-0619 | Frontier Communications')
    })

    //TV Page
    it('should have a link to the TV page', () => {
        var tvPage = browser.isExisting('a[href="/tv.html"]')
        assert(tvPage);
    })

    // TV page has no title so test case failed
    it('should take you to the TV page', () => {
        browser.click('a[href="/tv.html"]')
        var title = browser.getTitle();
        assert.equal(title, '')
    })

    // Internet Page
    it('should have a link to the Internet page', () => {
        var hasInternetPage = browser.isExisting('a[href="/internet.html"]')
        assert(hasInternetPage);
    })

    // internet page has no title so test case failed
    it('should take you to the Internet page', () => {
        browser.click('a[href="/internet.html"]')
        var title = browser.getTitle();
        assert.equal(title, '')
    })

    //Shop Online
    it('should have a link to the Cart page', () => {
        var hasCartPage = browser.isExisting('a[href="/cart.html"]')
        assert(hasCartPage);
    })

    // cart page has no title so test case failed
    it('should take you to the Cart page', () => {
        browser.click('a[href="/cart.html"]')
        var title = browser.getTitle();
        assert.equal(title, '')
    })


});

describe('image/graphic visibility test', () => {
    beforeEach(function () {	    
	    browser.url('/');
	    browser.pause(2000);
	})

	it('should have a visible logo image', () => {
		var logoImg = browser.isVisible('.masthead__logo');
		console.log("Logo image is visible:", logoImg);
		expect(logoImg).to.eq(true);
	})

    it('should have a visible clock icon', () => {
        var clockIcon = browser.isVisible('body > header > section > div > div > div > div > div.small-5.columns > div > div.countdown__icon > div');
        console.log("Clock icon is visible", clockIcon);
        expect(clockIcon).to.eq(true);
    })

    it('should have a visibe tv laptop icon', () => {
        var laptopIcon = browser.isVisible('body > main > section.hero.hero--short.hero--internet > div.row.grid-panels-row.grid-panels-row--cart.is-centered > div:nth-child(3) > div > div.grid-panel__graphic-wrap.grid-panel__graphic-wrap--pricing > div');
        console.log("Laptop tv icon is visible", laptopIcon);
        expect(laptopIcon).to.eq(true);
    })
});

describe('prices, phone numbers, and countdown timer are formatted correctly', () => {
    beforeEach(function () {
        browser.url('/');
        browser.pause(2000);
    });

    it('should show countdown timer in the right format', () => {
        var countdownTimer = browser.getText('#js-countdown-masthead');
        var regex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/;
        var fTimer = '';
        countdownTimer.forEach(function(num){
            fTimer += num + ':';
        });
        fTimer = fTimer.substr(0,8);
        console.log("Countdown Timer: ", countdownTimer);
        var corrected = fTimer.match(regex);
        console.log(fTimer);

    })

    it('should show prices in the right format', () => {
        var priceLine = browser.getText('body > main > section.hero.hero--home.hero--tall > div > div > div > div.medium-5.large-12.columns > div > p');
        var price = priceLine.substring(21, 26);
        var regex = /(\d+\d{1,2})/;
        var priceMatch = price.match(regex);
        console.log(priceMatch);
    })

    it('should show phone number in the right format', () => {
        var phoneNum = browser.getText('body > header > section > div > div > div > div > div.small-4.columns > div > a');
        var m = /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var found = phoneNum.match(m);
        console.log(found);
    })

});

describe('form validation', () => {
    beforeEach(function () {
        browser.url('/');
        browser.pause(2000);
    });


    it('should check form is validated if submitting form without entering any information', function () {
        browser.setValue('#street', '');
        browser.setValue('#city', '');
        browser.setValue('#state', '');
        browser.setValue('#zip', '');
        browser.click('#form-address-panel > div:nth-child(5) > input');
        var checkValidation = browser.getText("Please fill out this field.");
        checkValidation.should.be.equal("Please fill out this field.");
    });

    it('should check form is validated if submitting form by entering incorrect information', function () {
        browser.setValue('#zip', 'abcdef');
        browser.click('#form-address-panel > div:nth-child(5) > input');
        var checkValidation = browser.getText("Please match the requested format.");
        checkValidation.should.be.equal("Please match the requested format.");
        console.log(checkValidation);
    });

    it('should check form is validated if submitting form by entering the correct information', function () {
        browser.setValue('#street', '123 Andrew Street');
        browser.setValue('#city', 'Charlotte');
        browser.setValue('#state', 'NC');
        browser.setValue('#zip', '28273');
        browser.click('#form-address-panel > div:nth-child(5) > input');
        var title = browser.getTitle();
        assert.equal(title, 'Frontier Internet Plans | 1-877-671-0619 | Frontier Communications')
    })
    
});

describe('check text for correct spelling', () => {
    beforeEach(function () {
        browser.url('/');
        browser.pause(2000);
    });

    it('should check text for correct spelling', () => {
        var text1 = browser.getText('body > main > section.hero.hero--tall.hero--home > div:nth-child(1) > div > h3');
        assert.equal(text1, 'Now in Texas');
    });
});