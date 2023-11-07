const app = require("./app");
const http = require('http'); // Import the http module for Socket.io
const uuid = require('uuid');
// const connectDatabase = require("./config/database");
// const server2 = http.createServer(app); // Create an HTTP server using Express
const connectedClients = {};
// const io = socketIo(server2);

const dotenv = require("dotenv")
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "./config/config.env" })
}

// connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
// const io = require('socket.io')(server)
// io.on('connection', (socket) => {
//   socket.on('setUp', (message) => {
//     console.log(message)
//   });

//   socket.on('disconnect', () => {
//   });
// });
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
