const request = require('supertest');
const app = require('./index');

describe('Game API', () => {
  it('GET /scores should return running message', async () => {
    const res = await request(app).get('/scores');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Game Scoring API is running!');
  });

  it('POST /score should create a score', async () => {
    const res = await request(app)
      .post('/score')
      .send({ player: 'Alice', score: 100 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ player: 'Alice', score: 100 });
  });

  it('POST /score without data should fail', async () => {
    const res = await request(app).post('/score').send({});
    expect(res.statusCode).toBe(400);
    expect(res.text).toBe('Player and score required');
  });
});
