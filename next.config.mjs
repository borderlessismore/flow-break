/** @type {import('next').NextConfig} */
const nextConfig = {
  // The Flow Break prototype is a self-contained HTML app (public/app.html).
  // Serve it at "/" as a real document so its viewport/PWA tags and mobile-fit CSS apply untouched.
  async rewrites() {
    return { beforeFiles: [{ source: '/', destination: '/app.html' }] }
  },
  async headers() {
    return [
      { source: '/(.*)', headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' } ] },
      { source: '/manifest.webmanifest', headers: [{ key: 'Content-Type', value: 'application/manifest+json' }] },
    ]
  },
}
export default nextConfig
