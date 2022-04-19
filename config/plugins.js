module.exports = ({ env }) => ({
    // ...
    email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            service: 'Yandex',
            auth: {
              user: 'requests@dimension.am',
              pass: 'hnsbcsfrjiutiqqb',
            },
            // ... any custom nodemailer options
          },
          settings: {
            defaultFrom: 'requests@dimension.am',
            defaultReplyTo: 'requests@dimension.am',
          },
        },
      },
    // ...
  });