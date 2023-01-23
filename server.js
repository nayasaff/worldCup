const { startKafkaConsumer } = require('./connectors/kafka');
const express = require("express");
const app = express();

startKafkaConsumer();

