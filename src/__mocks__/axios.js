export default {
  get: jest.fn().mockResolvedValue({ data: {} }),
  create: jest.fn().mockResolvedValue({ baseURL: 'https://themealdb.com/api', headers: { 'Content-type': 'application/json' } }),
};
