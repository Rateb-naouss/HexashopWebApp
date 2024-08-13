/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    
    images : {
        domains: [
            "images.unsplash.com",
            "cdn.dummyjson.com"
        ]
    }
};

export default nextConfig;
