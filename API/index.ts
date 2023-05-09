import express from 'express';
const app = express();
const port = 8080; // default port to listen

import router from './Routes';

app.use(router)

// start the express server
app.listen(port, () => console.log(`server started at http://localhost:${port}`));
