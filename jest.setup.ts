import '@inrupt/jest-jsdom-polyfills';
import '@testing-library/jest-dom';
import { TextEncoder } from 'util';
import { server } from './src/mocks/node';

global.TextEncoder = TextEncoder;

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});