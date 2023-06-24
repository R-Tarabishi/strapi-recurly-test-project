module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/client',
     handler: 'client.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
