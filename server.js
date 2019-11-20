const express = require('express')
const mongoose = require('mongoose')
const surveys = require('./routes/surveys')
const history = require("connect-history-api-fallback");
const serveStatic = require("serve-static");
var cors = require('cors')
const path = require('path')

const uri = process.env.mongodb || 'mongodb://localhost/surveyApp';
console.log(uri)

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('could not connect', err))

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/surveys', surveys)


const staticFileMiddleware = express.static(path.join(__dirname + '/vue-client/dist'));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/vue-client/dist/index.html'));
});

// npm run build
// git commit -m "hi"
// git push heroku master
// heroku logs

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listenning on porst ${PORT}`)
})
