import { createLogger } from 'vite-logger';
import { defineConfig } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';

import { icons } from '../src/public/img/pwa/icons.json';

const logger = createLogger('info', true);

export default withPwa(defineConfig({
    srcDir: './src',
    lang: 'en-US',
    title: '3WEBS LLC',
    description: 'TODO: Add description',
    cleanUrls: true,
    base: '/',
    lastUpdated: true,
    appearance: true,
    titleTemplate: false,
    mpa: false,
    ignoreDeadLinks: false,
    rewrites: {
        'public/:path*': '/:path*'
    },
    head: [
        [ 'meta', { charset: 'utf-8' } ],
        [ 'meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } ],
        [ 'meta', { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge,chrome=1' } ],
        [ 'meta', { name: 'Content-Type', content: 'text/html; charset=utf-8' } ],
        [ 'meta', { name: 'robots', content: 'index, follow' } ],
        [ 'link', { rel: 'apple-touch-icon', sizes: '512x512', href: '/img/favicon.png' } ],
        [ 'link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/img/favicon.png' } ],
        [ 'link', { rel: 'mask-icon', href: '/img/favicon.png', color: '#0a2133' } ],
        [ 'link', { rel: 'shortcut icon', href: '/img/favicon.png' } ],
        [ 'meta', { name: 'apple-mobile-web-app-title', content: '3WEBS LLC' } ],
        [ 'meta', { name: 'application-name', content: '3WEBS LLC' } ],
        [ 'meta', { name: 'msapplication-TileColor', content: '#0a2133' } ],
        [ 'meta', { name: 'msapplication-config', content: '/browserconfig.xml' } ],
        [ 'meta', { name: 'theme-color', content: '#0a2133' } ]
    ],
    themeConfig: {
        siteTitle: false,
        logo: {
            src: '/img/favicon.png',
            alt: '3WEBS LLC'
        },
        outline: 'deep',
        nav: [
        ],
        search: {
            provider: 'local'
        }
    },
    pwa: {
        injectRegister: 'script',
        workbox: {
            globPatterns: [
                '**/*.{js,css,html}'
            ]
        },
        manifest: {
            name: '3WEBS LLC',
            short_name: '3WEBS',
            description: 'TODO: Add description',
            theme_color: '#0a2133',
            background_color: '#0a2133',
            display: 'browser',
            start_url: '/',
            icons: icons.map(icon => {
                return {
                    src: `/img/pwa/${icon.src}`,
                    type: 'image/png', // All icons are png
                    sizes: icon.sizes,
                    purpose: 'any maskable'
                };
            })
        }
    },
    sitemap: {
        hostname: 'https://3webs.org'
    }
}));