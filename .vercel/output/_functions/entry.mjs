import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D3PwSCHB.mjs';
import { manifest } from './manifest_D2ZA8b47.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/form/form.astro.mjs');
const _page3 = () => import('./pages/works/works-01.astro.mjs');
const _page4 = () => import('./pages/works/works-02.astro.mjs');
const _page5 = () => import('./pages/works/works-03.astro.mjs');
const _page6 = () => import('./pages/works/works-04.astro.mjs');
const _page7 = () => import('./pages/works/works-05.astro.mjs');
const _page8 = () => import('./pages/works/works-06.astro.mjs');
const _page9 = () => import('./pages/works/works-07.astro.mjs');
const _page10 = () => import('./pages/works/works-08.astro.mjs');
const _page11 = () => import('./pages/works/works-09.astro.mjs');
const _page12 = () => import('./pages/works/works-10.astro.mjs');
const _page13 = () => import('./pages/works/works-11.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.js", _page1],
    ["src/pages/form/form.astro", _page2],
    ["src/pages/works/works-01.astro", _page3],
    ["src/pages/works/works-02.astro", _page4],
    ["src/pages/works/works-03.astro", _page5],
    ["src/pages/works/works-04.astro", _page6],
    ["src/pages/works/works-05.astro", _page7],
    ["src/pages/works/works-06.astro", _page8],
    ["src/pages/works/works-07.astro", _page9],
    ["src/pages/works/works-08.astro", _page10],
    ["src/pages/works/works-09.astro", _page11],
    ["src/pages/works/works-10.astro", _page12],
    ["src/pages/works/works-11.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9940e433-0071-4eaf-a689-6be4c76a3b46",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
