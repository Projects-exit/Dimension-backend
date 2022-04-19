module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/mail-request/jobRequest',
      handler: 'custom-mail-request.jobRequest',
    },
    {
      method: 'POST',
      path: '/mail-request/researchRequest',
      handler: 'custom-mail-request.researchRequest',
    },
  ]
}