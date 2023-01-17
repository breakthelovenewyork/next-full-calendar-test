/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // swcMinify: true,
  // transpilePackages: [
  //   "@fullcalendar/core",
  //   "@fullcalendar/daygrid",
  //   "@fullcalendar/interaction",
  //   "@fullcalendar/premium-common",
  //   "@fullcalendar/react",
  //   "@fullcalendar/resource-timeline",
  //   "@fullcalendar/scrollgrid",
  //   "@fullcalendar/timeline",
  //   "@fullcalendar/resource",
  //   "@fullcalendar/scrollgrid",
  //   "@fullcalendar/timegrid", 
  // ],
  webpack: config => {
    config.optimization.minimize = false
    return config
  }
}

module.exports = nextConfig
