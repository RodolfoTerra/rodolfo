

/* Home */
FlowRouter.route('/', {
  name: 'pageHome',
  action(params, queryParams) {
  	let headerPage = "pageHome";
    BlazeLayout.render(headerPage);
  }
});


/* Trabalhos */
FlowRouter.route('/trabalhos/:_id', {
  name: 'pageTrabalho',
  action(params, queryParams) {
    let headerPage = "pageTrabalho";
    BlazeLayout.render(headerPage);
  }
});