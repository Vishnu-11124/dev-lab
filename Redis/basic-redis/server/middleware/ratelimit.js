import redis from "../config/redis.js";

const rateLimiter = async (req, res, next) => {
  try {
    const ip = req.ip;
    const key = `rate_limit:${ip}`;

    const attempts = await redis.incr(key);

    if (attempts === 1) {
      await redis.expire(key, 120);
    }

    if (attempts > 5) {
      const ttl = await redis.ttl(key);
      return res.status(429).json({
        message: `Too many requests, comback after ${ttl} seconds`,
      });
    }

    next();
  } catch (error) {
    console.error("Rate limiter error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default rateLimiter;
