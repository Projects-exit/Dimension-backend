module.exports = {
    async getAllConfigs(ctx, next) {

        const { body } = ctx.request

        const { name, email, phone, position, job_type } = body

        const home_page = await strapi.entityService.findMany('api::home-page.home-page')
        const footer = await strapi.entityService.findMany('api::footer.footer', {
            populate : { tarrif : true}
        })
        // ----------------------------
        const about_page = await strapi.entityService.findMany('api::about-page.about-page', {
            populate : ["license_pdf", "charter_pdf", "regilation_pdf", "central_bank_regulation_pdf"]
        })
        const service_page_capital_market = await strapi.entityService.findMany('api::services-page.services-page', {
            populate : ["regilation_documents_capital_market_pdf", "regilation_documents_investment_securities_pdf", "regilation_documents_asset_management_pdf"]
        })
        const service_page_investment_service = await strapi.entityService.findMany('api::services-page-investment-service.services-page-investment-service', {
            populate : ["regilation_documents"]
        })
        const service_page_asset_management = await strapi.entityService.findMany('api::services-page-asset-management.services-page-asset-management', {
            populate : ["regilation_documents"]
        })
        // ----------------------------
        
        console.log(home_page)
        ctx.response.body = { data:{
            home_page,
            footer,
            about_page,
            service_page_capital_market,
            service_page_investment_service,
            service_page_asset_management,
        }  };

    },
    
}