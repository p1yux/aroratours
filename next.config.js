/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'tailwindui.com', 'via.placeholder.com'],
  },
}



module.exports = {
  reactStrictMode: true,
  ...nextConfig
};
