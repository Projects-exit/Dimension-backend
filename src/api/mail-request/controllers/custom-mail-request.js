module.exports = {
    async jobRequest(ctx, next) {

        const { body, files : {files = {}} } = ctx.request

        const {name, email, phone} = body

        if(name === '' || email === '' || phone === '') {
            return ctx.badRequest("Invalid inputs")
        }

        const emailTemplate = {
            subject: 'Testing dimension email functionalities',
            text: `This is for development purpose!
             Setting up email`,
            html: `<h1>Testing</h1>
              <p>Checking file attachment!<p>
              <p>Checking Data stream sample !<p>
              <p>Job application details!<p>
              <p>Name <%= name %>!<p>
              <p>Email <%= email %>!<p>
              <p>Email <%= phone %>!<p>
              <p>CV attached with mail!<p>
              
              `
              
              ,
        };

        try {

            await strapi.plugins['email'].services.email.sendTemplatedEmail(
                { 
                    to : ['jithinksatheesh@gmail.com'],
                    attachments : [{
                        filename : files?.name,
                        path : files?.path
                    }]
                },
                emailTemplate,
                {name, email, phone}
            )
            ctx.response.body = {
                data : {}
            };

        } catch (ex) {
            console.log(ex)
            return ctx.internalServerError('Something went wrong')
        }

        

    }
}