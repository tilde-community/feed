import path from 'path';
import express from 'express';
import nunjucks from 'nunjucks';

import feedsRouter from './routers/feeds';


let app = express();

app.set('PORT', process.env.PORT || 3000);
app.set('VIEWS_DIRECTORY', path.join(__dirname, 'templates'));
app.set('STATIC_DIRECTORY', path.join(__dirname, 'static'));

// setup views to use nunjucks for templating
nunjucks.configure(app.get('VIEWS_DIRECTORY'), { express: app });
app.set('views', app.get('VIEWS_DIRECTORY'));

// setup app routes
app.use('/', feedsRouter);
app.use('/static', express.static(app.get('STATIC_DIRECTORY')));

app.listen(app.get('PORT'), () =>
    console.log(`Server running at localhost:${app.get('PORT')}`));
