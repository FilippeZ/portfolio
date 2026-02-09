/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'fonts.googleapis.com',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
            },
            {
                protocol: 'https',
                hostname: 'www.cnet.com',
            },
            {
                protocol: 'https',
                hostname: 'r2.cms-shared-media.twodo.cz',
            },
            {
                protocol: 'https',
                hostname: 'media.licdn.com',
            },
            {
                protocol: 'https',
                hostname: 'msftstories.thesourcemediaassets.com',
            },
            {
                protocol: 'https',
                hostname: 'newsroom.ocde.us',
            },
        ],
    },
};

export default nextConfig;
