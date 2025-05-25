require("dotenv").config();
const Redis = require("ioredis");

let redis;

if (process.env.REDIS_MODE === "cloud" && process.env.REDIS_DB_URL) {
  redis = new Redis(process.env.REDIS_DB_URL); // Auto TLS if using rediss://
  console.log("📡 Using Cloud Redis");
} else {
  redis = new Redis({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379,
    retryStrategy: (times) => Math.min(times * 50, 2000),
  });
  console.log("🖥️ Using Local Redis");
}

redis.on("connect", () => {
  console.log("🔌 Redis connected");
});

redis.on("error", (err) => {
  console.error("❌ Redis error:", err);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("🧹 Closing Redis...");
  await redis.quit();
  process.exit(0);
});

module.exports = redis;
