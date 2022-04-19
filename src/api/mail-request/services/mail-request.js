'use strict';

/**
 * mail-request service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mail-request.mail-request');
