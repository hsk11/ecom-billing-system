const JaiServer = require('jai-server');
const billController = require('./src/controllers/bill');
const app = JaiServer();



app.use('/bill', billController);

const PORT=3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});