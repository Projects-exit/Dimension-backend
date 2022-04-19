module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/mail-request/jobRequest',
      handler: 'custom-mail-request.jobRequest',
    },
  ]
}