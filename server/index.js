import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app/components/App';
import template from '../app/template';

const render = require('../dist/assets/SSR');
const app = express();

app.get('/', render.default);

const port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);