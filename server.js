// import './config';

// new

// import config, { nodeEnv, logStars } from './config';

// console.log(config, nodeEnv);

// materi baru logstars

// logStars('Function');

//materi https module

// import https from 'https';

// https.get('https://www.lynda.com', res => {
// 		console.log('Response status code: ', res.statusCode);

// 	res.on('data', chunk => {
// 		console.log(chunk.toString());
// 	});
// });

//materi https selanjutnya

// import http from 'http';

// const server = http.createServer();

// server.listen(8080);

// server.on('request', (req, res) => {

// 	res.write('hello HTTP!\n');

// 	setTimeout(() => {

// 		res.write('I can Stream!\n');


// 	}, 3000);

// });

//materi express server

import config from './config';
import apiRouter from './api';


// import fs from 'fs';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {

	// res.send('halo express');

	res.render('index', {
		content: 'Hello <b>Express</b> and <em>EJS!</em>',
		content2: '<p>selamat datang</p>'
	});

});

// ringkas disini 
server.use('/api', apiRouter);
server.use(express.static('public'));


// server.get('/about.html', (req, res) => {

// 	// res.send('The About Page');

// 	fs.readFile('./about.html', (err, data) => {
// 		res.send(data.toString());

// 	});

// });


server.listen(config.port, () => {
	console.info('Express listening on port', config.port);
});