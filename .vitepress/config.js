import { createLogger } from 'vite-logger';
import { defineConfig } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';

const logger = createLogger('info', true);

export default withPwa(defineConfig({
    srcDir: './src',
    title: '3WEBS LLC',
    description: 'TODO: Add description',
    cleanUrls: true,
    base: '/',
    lastUpdated: false,
    themeConfig: {
        logo: undefined,
        outline: 'deep',
        nav: [
        ],
        search: {
            provider: 'local'
        }
    },
    head: [
        [ 'meta', { charset: 'utf-8' } ],
        [ 'meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } ],
        [ 'meta', { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge,chrome=1' } ],
        [ 'meta', { name: 'Content-Type', content: 'text/html; charset=utf-8' } ],
        [ 'meta', { name: 'robots', content: 'index, follow' } ],
/*        [ 'link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' } ],
        [ 'link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' } ],
        [ 'link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' } ],
        [ 'link', { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#5bbad5' } ],
        [ 'link', { rel: 'shortcut icon', href: '/favicon.ico' } ],*/
        [ 'meta', { name: 'apple-mobile-web-app-title', content: '3WEBS LLC' } ],
        [ 'meta', { name: 'application-name', content: '3WEBS LLC' } ],
        /*[ 'meta', { name: 'msapplication-TileColor', content: '#da532c' } ],
        [ 'meta', { name: 'msapplication-config', content: '/browserconfig.xml' } ],*/
        [ 'meta', { name: 'theme-color', content: '#ffffff' } ]
    ],
    appearance: true,
    titleTemplate: false,
    mpa: false,
    rewrites: {
        'public/:path*': '/:path*'
    },
    ignoreDeadLinks: false,
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
            theme_color: '#ffffff',
            background_color: '#ffffff',
            display: 'browser',
            start_url: '/',
            icons: []
        }
    }
}));