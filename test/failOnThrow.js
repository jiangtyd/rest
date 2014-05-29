/*
 * Copyright 2013-2014 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */

(function (buster) {
	'use strict';

	var fail;

	fail = buster.referee.fail;

	buster.referee.failOnThrow = function failOnThrow(func) {
		return function () {
			try {
				return func.apply(this, arguments);
			}
			catch (e) {
				fail(e);
			}
		};
	};

}(
	this.buster || require('buster')
));
