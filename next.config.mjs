import { withSentryConfig } from '@sentry/nextjs'
import withBundleAnalyzer from '@next/bundle-analyzer'
import withPlugins from 'next-compose-plugins'
import { env } from './env.mjs'

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
  reactStrictMode: true,
  trailingSlash: true,
  productionBrowserSourceMaps: true,
  output: 'standalone',
	experimental: { instrumentationHook: true, optimizePackageImports: ['@mantine/core', '@mantine/hooks'] },
  rewrites() {
    return [
      { source: '/healthz', destination: '/api/health' },
      { source: '/api/healthz', destination: '/api/health' },
      { source: '/health', destination: '/api/health' },
      { source: '/ping', destination: '/api/health' },
    ]
  },
})

export default withSentryConfig(config, {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

// Suppresses source map uploading logs during build
  silent: true,
	org: 'next-enterpise',
	project: 'next-enterpise',
}, {
// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

// Transpiles SDK to be compatible with IE11 (increases bundle size)
  transpileClientSDK: true,

// Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
  tunnelRoute: '/monitoring',

// Hides source maps from generated client bundles
  hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors.
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
})
