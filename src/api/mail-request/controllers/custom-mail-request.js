module.exports = {
    async jobRequest(ctx, next) {

        const { body, files: { files = {} } } = ctx.request

        const { name, email, phone, position, job_type } = body

        const templateId = "2",
            to = email,
            from = "requests@dimension.am",
            replyTo = "requests@dimension.am",
            subject = "[TEST] This is a test using strapi-email-designer", // If provided here will override the template's subject. Can include variables like "Welcome to {{= project_name }}"
            userData = {
                name,
                email,
                phone,
                position,
                job_type
            }


        if (name === '' || email === '' || phone === '') {
            return ctx.badRequest("Invalid inputs")
        }

        try {

            await strapi.plugin('email-designer').service('email').sendTemplatedEmail(
                {
                    to,
                    from ,
                    replyTo, 
                    attachments: [{
                        filename: files?.name,
                        path: files?.path
                    }]
                },
                {
                    templateReferenceId : templateId,
                    subject,
                },
                { userData }
            )
            ctx.response.body = {
                data: {}
            };

        } catch (ex) {
            console.log(ex)
            return ctx.internalServerError('Something went wrong')
        }



    },
    async researchRequest(ctx, next) {

        const { name, email, item_name, item_description } = ctx.request.body

        const templateId = "1",
            to = email,
            from = "requests@dimension.am",
            replyTo = "requests@dimension.am",
            subject = "[TEST] This is a test using strapi-email-designer", // If provided here will override the template's subject. Can include variables like "Welcome to {{= project_name }}"
            userData = {
                name,
                email,
                item_name,
                item_description
            }

        try {
            
            console.log(name, email, item_name, item_description, templateId)

            await strapi.plugin('email-designer').service('email').sendTemplatedEmail(
                {
                    to,
                    from,
                    replyTo,
                },
                {
                    templateReferenceId : templateId,
                    subject,
                },
                {
                    userData,
                }
            );
            ctx.response.body = {
                data: {}
            };
        } catch (err) {
            strapi.log.debug('📺: ', err);
            return ctx.badRequest(null, err);
        }


    },
    async userQuestion(ctx, next) {

        const { name, email, title, details } = ctx.request.body

        const templateId = "3",
            to = email,
            from = "requests@dimension.am",
            replyTo = "requests@dimension.am",
            subject = "[TEST] This is a test using strapi-email-designer", // If provided here will override the template's subject. Can include variables like "Welcome to {{= project_name }}"
            userData = {
                name,
                email,
                title,
                details
            }

        try {
            
            // console.log(name, email, item_name, item_description, templateId)

            await strapi.plugin('email-designer').service('email').sendTemplatedEmail(
                {
                    to,
                    from,
                    replyTo,
                },
                {
                    templateReferenceId : templateId,
                    subject,
                },
                {
                    userData,
                }
            );
            ctx.response.body = {
                data: {}
            };
        } catch (err) {
            strapi.log.debug('📺: ', err);
            return ctx.badRequest(null, err);
        }


    },
}