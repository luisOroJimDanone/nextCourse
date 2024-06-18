/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;


module.exports = {
	exportPathMap() {
		return {
			'/': { page: '/' },
		}
	}
}
