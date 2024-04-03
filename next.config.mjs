/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	productionBrowserSourceMaps: true,
	rewrites() {
		return [
			{source: '/healthz', destination: '/api/health'},
			{source: '/api/healthz', destination: '/api/health'},
			{source: '/health', destination: '/api/health'},
			{source: '/ping', destination: '/api/health'},
		]
	},
};

export default nextConfig;
