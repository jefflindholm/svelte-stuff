import sirv from 'sirv';
import compression from 'compression';
import * as sapper from '@sapper/server';

import express from 'express';
import api from './api';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';


express()
	.use(express.json())
	.use(compression({ threshold: 0 }))
	.use(sirv('static', { dev }))
	.use('/api', api)
	.use(sapper.middleware())
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
