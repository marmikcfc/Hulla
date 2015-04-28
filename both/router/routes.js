Router.route('/', {
  name: 'home'
});


Router.map(function () {
	
	this.route('/account', {
  name: 'account',
  controller: 'AppController',
});

	this.route('/dashboard', {
  name: 'dashboard'
//  fastRender: true
});

});