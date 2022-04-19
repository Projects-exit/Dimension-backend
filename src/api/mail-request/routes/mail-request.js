'use strict';

/**
 * mail-request router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::mail-request.mail-request');
