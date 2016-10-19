;(function(){
	"use strict";

	angular
    .module('app')
		.factory('DummyData', function() {
		  return [{
		    id: '01',
		    name: 'item1',
		    price: '$100',
		    description: 'this is item 1.'
		  }, {
		    id: '02',
		    name: 'item2',
		    price: '$10 ',
		    description: 'this is item 2.'
		  }, {
		    id: '03',
		    name: 'item3',
		    price: '$1 ',
		    description: 'this is item 3.'
		 }];
	});

})();