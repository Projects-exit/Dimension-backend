module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/home-page/getAllconfigs',
      handler: 'custom-home-page.getAllConfigs',
    },
    {
      method: 'GET',
      path: '/list/news',
      handler: 'custom-home-page.getAllConfigs',
    },
    
  ]
}