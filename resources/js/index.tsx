import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.css';
// eslint-disable-next-line import/no-extraneous-dependencies
// import 'flatpickr/dist/flatpickr.css';
import 'translations';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
