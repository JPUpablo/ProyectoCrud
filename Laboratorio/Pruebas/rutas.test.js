const request = require('supertest');
const express = require('express');
const router = require('../router');

const app = express();
app.use(express.json());
app.use('/', router);

describe('GET /', () => {
  it('Deberia retornar una lisa de pacietnes', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.results).toBeDefined();
    expect(response.body.results.length).toBeGreaterThan(0);
  });
});

describe('GET /doctores', () => {
  it('Deberia retornar una lista de doctores', async () => {
    const response = await request(app).get('/doctores');
    expect(response.status).toBe(200);
    expect(response.body.results).toBeDefined();
    expect(response.body.results.length).toBeGreaterThan(0);
  });
});

describe('GET /citas', () => {
  it('deberia retornar una lista de citas', async () => {
    const response = await request(app).get('/citas');
    expect(response.status).toBe(200);
    expect(response.body.results).toBeDefined();
    expect(response.body.results.length).toBeGreaterThan(0);
  });
});

describe('GET /editar/:id', () => {
  it('Deberia retornar un paciente en especifico', async () => {
    const response = await request(app).get('/editar/1');
    expect(response.status).toBe(200);
    expect(response.body.paciente).toBeDefined();
    expect(response.body.paciente.id).toBe(1);
  });
});
