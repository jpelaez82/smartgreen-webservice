const express = require('express');
const app = express();
//const smartgreenRouter = require('./routes/smartgreen_routes');
const saturnoRuter = require('./routes/saturno_routes');

// Middlewares
app.set('port', process.env.PORT || 3005);
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Smart Green Houses is LIVE!' });
});

// Routes
//app.use('/smartgreenhouses', smartgreenRouter);
app.use('/saturno', saturnoRuter);

// Start WebService
app.listen(app.get('port'), () => {
    console.log('Smart Green House WebService running successfully on port 3005');
});
