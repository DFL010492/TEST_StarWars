const request = require('supertest');

describe('Testes da API SWAPI', () => {
    test('Deve visualizar informações de um planeta existente', async () => {
        const resposta = await request('https://swapi.dev/api').get('/planets/1');

        expect(resposta.status).toBe(200);
        expect(resposta.body.name).toBe('Tatooine');
        expect(resposta.body).toHaveProperty('climate');
        expect(resposta.body).toHaveProperty('terrain');
    });

    test('Deve receber uma mensagem de erro ao buscar por um planeta inexistente', async () => {
        const resposta = await request('https://swapi.dev/api').get('/planets/9999');

        expect(resposta.status).toBe(404);
        expect(resposta.body.detail).toBe('Not found');
    });

    test('Deve visualizar informações de uma nave existente', async () => {
        const resposta = await request('https://swapi.dev/api').get('/starships/9');

        expect(resposta.status).toBe(200);
        expect(resposta.body.name).toBe('Death Star');
        expect(resposta.body).toHaveProperty('model');
        expect(resposta.body).toHaveProperty('manufacturer');
    });

    test('Deve receber uma mensagem de erro ao buscar por uma nave inexistente', async () => {
        const resposta = await request('https://swapi.dev/api').get('/starships/9999');

        expect(resposta.status).toBe(404);
        expect(resposta.body.detail).toBe('Not found');
    });

    test('Deve visualizar informações de um filme existente', async () => {
        const resposta = await request('https://swapi.dev/api').get('/films/1');

        expect(resposta.status).toBe(200);
        expect(resposta.body.title).toBe('A New Hope');
        expect(resposta.body).toHaveProperty('director');
        expect(resposta.body).toHaveProperty('producer');
    });

    test('Deve receber uma mensagem de erro ao buscar por um filme inexistente', async () => {
        const resposta = await request('https://swapi.dev/api').get('/films/9999');

        expect(resposta.status).toBe(404);
        expect(resposta.body.detail).toBe('Not found');
    });

    test('Deve receber uma mensagem de erro ao buscar por uma rota inexistente', async () => {
        const resposta = await request('https://swapi.dev/api').get('/heroes');

        expect(resposta.status).toBe(404);
        // expect(resposta.body.detail).toBe('Not found');
    });

    test('Deve listar todos os planetas', async () => {
        const resposta = await request('https://swapi.dev/api').get('/planets/');

        expect(resposta.status).toBe(200);
        expect(resposta.body.results.length).toBeGreaterThan(0);
    });

    test('Deve listar todas as naves', async () => {
        const resposta = await request('https://swapi.dev/api').get('/starships/');

        expect(resposta.status).toBe(200);
        expect(resposta.body.results.length).toBeGreaterThan(0);
    });

    test('Deve listar todos os filmes', async () => {
        const resposta = await request('https://swapi.dev/api').get('/films/');

        expect(resposta.status).toBe(200);
        expect(resposta.body.results.length).toBeGreaterThan(0);
    });
});
