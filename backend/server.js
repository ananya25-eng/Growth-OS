import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const PORT = Number(process.env.PORT) || 5000;

async function start() {
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI is missing. Configure backend/.env.");
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 24) {
    throw new Error("JWT_SECRET must be at least 24 characters.");
  }
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Growth OS API: http://localhost:${PORT}`);
    console.log(`Health: http://localhost:${PORT}/api/health`);
  });
}

start().catch((error) => {
  console.error("Server startup failed:", error.message);
  process.exit(1);
});
