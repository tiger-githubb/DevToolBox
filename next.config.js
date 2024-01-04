/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['images.unsplash.com'],
    domains: ['st3.depositphotos.com'],
  },
}

