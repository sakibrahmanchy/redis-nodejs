// Require dependencies
const express = require('express');
const routes = require('./routes/router');
const expresshbs = require('express-handlebars');

// Define port
const PORT = 4000;

// Routes
const app = express();
app.use('/public', express.static(`${__dirname}/public`));
app.use('/', routes);

// Rendering views
const hbs = expresshbs.create({
    extname: '.hbs',
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/components`,
    defaultLayout: `layout`,
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', `${__dirname}/views`);

app.listen(PORT, () => {
    console.log(`Server is ready at ${PORT}`);
})

