module.exports = {
    async getAllConfigs(ctx, next) {

        const { body } = ctx.request

        // const { name, email, phone, position, job_type } = body

        const home_page = await strapi.entityService.findMany('api::home-page.home-page', {
            populate: {
                market_researches: { populate: ["image"] },
                news: { populate: ["image"] },
                portfolios: { populate: ["image"] },
            }
        })
        const footer = await strapi.entityService.findMany('api::footer.footer', {
            populate: { tarrif: true }
        })
        // ----------------------------
        const about_page = await strapi.entityService.findMany('api::about-page.about-page', {
            populate: ["license_pdf", "charter_pdf", "regilation_pdf", "central_bank_regulation_pdf"]
        })
        const service_page_capital_market = await strapi.entityService.findMany('api::services-page.services-page', {
            populate: ["regilation_documents_capital_market_pdf", "regilation_documents_investment_securities_pdf", "regilation_documents_asset_management_pdf"]
        })
        const service_page_investment_service = await strapi.entityService.findMany('api::services-page-investment-service.services-page-investment-service', {
            populate: ["regilation_documents"]
        })
        const service_page_asset_management = await strapi.entityService.findMany('api::services-page-asset-management.services-page-asset-management', {
            populate: ["regilation_documents"]
        })
        // ----------------------------
        // Indices
        // ----------------------------
        const indices_amd_table = await strapi.entityService.findMany('api::amd-bond-index-table.amd-bond-index-table', {})
        const indices_usd_table = await strapi.entityService.findMany('api::usd-corporate-index-table.usd-corporate-index-table', {})
         // ----------------------------
        // Market research
        // ----------------------------
        const market_research = await strapi.entityService.findMany('api::market-research.market-research', {
            populate : ["image"]
        })
        const client_rights = await strapi.entityService.findMany('api::client-rights-page.client-rights-page', {
            populate : ["regilation_documents_pdf"]
        })
        // ----------------------------
        // Investor relation
        // ----------------------------
        const annual_report = await strapi.entityService.findMany('api::annual-report.annual-report', {
            populate : ["pdf"]
        })
        const annual_financial_statement = await strapi.entityService.findMany('api::financial-statments-annual.financial-statments-annual', {
            populate : ["pdf"]
        })
        const quaterly_financial_statement = await strapi.entityService.findMany('api::financial-statment.financial-statment', {
            populate : ["q1_pdf", "q2_pdf", "q3_pdf", "q4_pdf"]
        })
        const normatives = await strapi.entityService.findMany('api::normative.normative', {
            populate : ["q1_pdf", "q2_pdf", "q3_pdf", "q4_pdf"]
        })
        const investor_relation = await strapi.entityService.findMany('api::investor-relation.investor-relation', {})
        // ----------------------------
        // regulation
        // ----------------------------
        const regulation = await strapi.entityService.findMany('api::regulations-pdf.regulations-pdf', {
            populate : ["civil_code_of_armenia", "law_on_securities_market", "law_on_the_central_bank_of_armenia", "law_on_currency_regulation", "anti_money_laundering_law", "law_on_financial_system_mediator", "rules_of_amx_armenia", "rules_of_central_depository"]
        })
        const regulation_laws = await strapi.entityService.findMany('api::regulations-page-law.regulations-page-law', {
            populate : ["pdf"]
        })


        // console.log(home_page)
        ctx.response.body = {
            data: {
                home_page,
                footer,
                about_page,
                service_page_capital_market,
                service_page_investment_service,
                service_page_asset_management,
                indices: {
                    amd: { indices_amd_table },
                    usd: { indices_usd_table }
                },
                market_research,
                client_rights,
                reports : {
                    annual_report,
                    quaterly_financial_statement,
                    annual_financial_statement,
                    normatives,
                    investor_relation
                },
                regulations : {
                    regulation,
                    regulation_laws
                }
            }
        };

    },

}