/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sign-in",
        permanent: true,
      },
    ];
  },
  typescript:{
    ignoreBuildErrors:true
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'img.clerk.com'
            },
            {
                protocol: "https",
                hostname: "images.clerk.dev",
              },
              {
                protocol: "https",
                hostname: "uploadthing.com",
              },
              {
                protocol: "https",
                hostname: "placehold.co",
              },
        ]
    }
};

export default nextConfig;
