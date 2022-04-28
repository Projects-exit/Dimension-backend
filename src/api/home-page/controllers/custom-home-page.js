module.exports = {
    async getAllConfigs(ctx, next) {

        const { body } = ctx.request

        const { name, email, phone, position, job_type } = body

        const home_page = await strapi.entityService.findMany('api::home-page.home-page')
        const footer = await strapi.entityService.findMany('api::footer.footer', {
            populate : { tarrif : true}
        })
        const about_page = await strapi.entityService.findMany('api::about-page.about-page', {
            populate : ["license_pdf", "charter_pdf", "regilation_pdf", "central_bank_regulation_pdf"]
        })

        console.log(home_page)
        ctx.response.body = { data:{
            home_page,
            footer,
            about_page
        }  };

    },
    
}