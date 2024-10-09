/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['i.ytimg.com', 'yt3.ggpht.com'],
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: `default-src 'self'; frame-src 'self' https://www.youtube.com https://youtube.com; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://i.ytimg.com https://yt3.ggpht.com;`,
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  