'use strict';

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true };
  });
  fastify.get('/about', async function (request, reply) {
    return reply.sendFile('about.html');
  });
    fastify.get('/home', async function (request, reply) {
      return reply.sendFile('home.html');
    });
};
