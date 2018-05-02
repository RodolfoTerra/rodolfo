

/* Home */
FlowRouter.route('/', {
  name: '/',
  action(params, queryParams) {
  	let headerPage = "pageHome";
    BlazeLayout.render(headerPage);
  }
});


/* Trabalhos */
FlowRouter.route('/trabalhos/:_id', {
  name: 'trabalhos',
  action(params, queryParams) {
    let headerPage = "pageTrabalho";
    BlazeLayout.render(headerPage);
  }
});