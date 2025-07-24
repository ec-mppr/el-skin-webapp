import '@inrupt/jest-jsdom-polyfills';
import '@testing-library/jest-dom';
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;