const express = require('express');
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async ()=>{
    const app = express();

    app.listen(PORT, async()=>{
        console.log(`server started at port ${PORT}`);
    });
}

setupAndStartServer();