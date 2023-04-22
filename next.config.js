/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_TOKEN: process.env.API_TOKEN, // this is imp for access env variables from clinet side
  }
}

module.exports = nextConfig
