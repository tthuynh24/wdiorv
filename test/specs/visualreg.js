let expect = require('chai').expect;

describe("Demo test", () => {
  it("pull up browser, navigate, wait, log title", () => {
    browser.url('/'); //get the 'baseUrl:' inside wdio.config
    browser.pause(1000);
    const title = browser.getTitle();
    console.log("Page Title:", title);
    expect(title).to.eq("Frontier® Internet Service | 877-870-4601 | Frontier Communications");
  });

  it("first image visisble", () => {
	browser.url('/');
	browser.pause(1000);
	const isVis = browser.isVisible('body > main > section:nth-child(6) > div > div.medium-6.columns.img-wrap > img');
	console.log("First image:", isVis);
	expect(isVis).to.eq(true);
  });

  //the timer sometimes comes back as undefined, not entirely sure why.
  it("timer format correctly", () => {
	browser.url('/');
	browser.pause(1000);
	const timer = browser.getText('.countdown__timer-num');
	const regex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/;
	var formatTimer = '';
	console.log("Timer Array: ", timer);
	timer.forEach(function(value) {
		formatTimer += value + ':';
	});
		formatTimer = formatTimer.substr(0,8);
		console.log("Timer: " +formatTimer);
	expect(regex.test(formatTimer)).to.be.true;
  });

  it("price format correctly", () => {
	browser.url('/');
	browser.pause(1000);
	const price = browser.getText('p.price-hero-wordpress__amount');
	const cents = browser.getText('p.price-hero-wordpress__cents span.js-hide-zero-cents');
	const formatPrice = price + cents;
	const regex = /(\d+\d{1,2})/;
	console.log("Price:",price + cents);
	expect(regex.test(formatPrice)).to.be.true;
  });

  it("phone number format correctly", () => {
	browser.url('/');
	browser.pause(1000);
	const phone = browser.getAttribute('body > header > div.show-for-large-up > section > div > div.small-4.columns.is-align-right > a', 'href');
	const formatPhone = phone.substr(4);
	const regex = /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	console.log("Phone:", formatPhone);
	expect(regex.test(formatPhone)).to.be.true;
  });

  it("submit form without entering information", () => {
	browser.url('/');
	browser.pause(1000);
	browser.submitForm('#address-check');
	//browser.debug();
  });

  it("click on button and direct to price plans page", () => {
	browser.pause(1000);
	const aLink = browser.getAttribute('body > main > section.hero-wordpress > div > div.small-12.large-7.columns > div.price-hero-wordpress > div > a', 'href');
	console.log("URL:" + aLink);
	browser.click('body > main > section.hero-wordpress > div > div.small-12.large-7.columns > div.price-hero-wordpress > div > a');
	//browser.debug();
  });

  it("should check for spelling", () => {
	browser.pause(1000);
	const myText = browser.getText('body > footer > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(1) > a');
	expect(myText).to.eq("High Speed Internet");
	//console.log(myText);
  });
  
})  
		