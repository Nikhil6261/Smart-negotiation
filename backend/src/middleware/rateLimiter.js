import ratelimit from "express-rate-limit";

export const authlimit = ratelimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  legacyHeaders: true,
  standardHeaders: false,
  
  message: {
    succes: false,
    message: "too many attempt , please try again later",
  },
});

