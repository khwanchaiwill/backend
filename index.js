require('dotenv').config();

const server = require('./api/server')

const port = process.env.PORT || 4505;

server.listen(port, () => console.log(`listening to ${port}`));
