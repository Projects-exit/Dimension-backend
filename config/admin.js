module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5edf02cbdc7885e9c4c117f0d170e898'),
  },
});
