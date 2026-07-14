import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - /api routes
  // - /_next (Next.js internals)
  // - /favicon.ico, /sitemap.xml, /robots.txt (metadata files)
  // - static files with extensions
  matcher: ['/', '/(vi|en|zh)/:path*'],
};
