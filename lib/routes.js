

/* Home */
FlowRouter.route('/', {
  name: 'pageHome',
  action(params, queryParams) {
  	let headerPage = "pageHome";
  	console.log(headerPage);
    BlazeLayout.render(headerPage);
  }

});

/* Detalhe */
FlowRouter.route('/trabalhos/:_id', {
  name: 'pageTrabalho',
  action(params, queryParams) {
    let headerPage = "pageTrabalho";
    console.log(headerPage);
    BlazeLayout.render(headerPage);
  }
});