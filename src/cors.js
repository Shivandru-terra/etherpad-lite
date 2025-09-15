// src/cors.js

exports.expressConfigure = function (hookName, args, cb) {
  const cors = require("cors");

  const corsOptions = {
    origin: ["https://terra-ai-games-dash.vercel.app", "http://localhost:8080"], // allow prod + local dev
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  };

  args.app.use(cors(corsOptions));

  return cb();
};
