require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    NEXT_PUBLIC_GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
    NEXT_PUBLIC_GOOGLE_SECRET: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    NEXT_PUBLIC_NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
};

module.exports = nextConfig;
