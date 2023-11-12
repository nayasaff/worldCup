const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const apiRoutes = require('./routes/api');
const { startKafkaProducer } = require('./connectors/kafka');
const rateLimit = require('express-rate-limit') ;

// Config setup to parse JSON payloads from HTTP POST request body



// Apply the rate limiting middleware to all requests

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 2 minutes
	max: 50, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message:
		'Too many purchases are happening, please try again in a minute',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(limiter)


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", value="*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","POST,PATCH,GET,DELETE");
  next();
});

app.use(function (req, res, next) {

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(cors({ origin : '*'}));

app.use(express.json());
app.use(express.urlencoded({extended:false}));


// Register the api routes
apiRoutes(app);

// If request doesn't match any of the above routes then return 404

app.get("/api", (req, res)=>{
  res.send("succes")
})

app.use((req, res, next) => {
  return res.status(404).send("error wrong request");
});


// Create HTTP Server and Listen for Requests



app.listen(7789, async (req, res) => {
  // Start Kafka Producer
  await startKafkaProducer();
  console.log("client listening on")
});