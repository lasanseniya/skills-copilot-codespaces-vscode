// Create web server
// 1. Import the express module
const express = require('express');
// 2. Create an express object
const app = express();
// 3. Define the port
const port = 3000;
// 4. Define the route for the web server
app.get('/', (req, res) => res.send('Hello World!'));
// 5. Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
// 6. Export the app object
module.exports = app;