const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const app = require('./app.js');
const connectDB = require('./config/db.js');

const PORT = process.env.PORT || 3000;

const startServer = async () =>{
    await connectDB();
    app.listen(PORT,()=>{
        console.log(`Server running at http://localhost:${PORT}`);
    })
}
startServer();