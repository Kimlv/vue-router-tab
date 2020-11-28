/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d2d5707d49050ab6c2450c08342bfb8d"
  },
  {
    "url": "api/index.html",
    "revision": "f94670f1b20856354aa8862f3e482625"
  },
  {
    "url": "assets/css/0.styles.7da23101.css",
    "revision": "77f46df5da5dc78c560228dd1ee494b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.df9263c0.js",
    "revision": "6f8947dc67f3e5752a37c43eb0c91ac7"
  },
  {
    "url": "assets/js/11.8001288f.js",
    "revision": "0d972e2e2a5d9f172c427a4d2d48d47e"
  },
  {
    "url": "assets/js/12.5b734ca1.js",
    "revision": "851b5d885f1fd215755a44dd6de92126"
  },
  {
    "url": "assets/js/13.6fa55e3e.js",
    "revision": "ba57d1d47d6558af4ac163a5b8bd7f17"
  },
  {
    "url": "assets/js/14.9ff80045.js",
    "revision": "476d8cea06ce1c5355f5d152f9551dcd"
  },
  {
    "url": "assets/js/15.9ba81aa8.js",
    "revision": "297b52064ca46caa48f71bb791544e8c"
  },
  {
    "url": "assets/js/16.70d9277e.js",
    "revision": "1bc681887a7a2826f35506d55fb761a4"
  },
  {
    "url": "assets/js/17.67acf2a3.js",
    "revision": "031654ac2b0099d6410d7842fc15702c"
  },
  {
    "url": "assets/js/18.f7d87bfe.js",
    "revision": "b1c09d9658fafac57b1e430b54a87d1a"
  },
  {
    "url": "assets/js/19.2afe8e14.js",
    "revision": "df181186369662765fcf6e075c46ec29"
  },
  {
    "url": "assets/js/20.c6dee36b.js",
    "revision": "40dd46fd9a9f865e641a82595cb2b5ba"
  },
  {
    "url": "assets/js/21.2a0770b8.js",
    "revision": "b41e6a36e7d575d50b45aeda109f9f7c"
  },
  {
    "url": "assets/js/22.b786b301.js",
    "revision": "4d6441c49d01b47f26d1b2fcb18c7586"
  },
  {
    "url": "assets/js/23.ae0c47e7.js",
    "revision": "48d9cb522cb4efa7dd3a02d291cf1e56"
  },
  {
    "url": "assets/js/24.2119cee2.js",
    "revision": "caaeb1d306e0cb31e0e69b178b8f0971"
  },
  {
    "url": "assets/js/25.aa96abeb.js",
    "revision": "40a6a133123f105e8f29f514a00adbc3"
  },
  {
    "url": "assets/js/26.9642420b.js",
    "revision": "12b66c9c7f1376b2c633b131ac7a27fe"
  },
  {
    "url": "assets/js/27.3d9a7dbc.js",
    "revision": "dc0c0f79d1dbee31e1e01d1381f900cc"
  },
  {
    "url": "assets/js/28.f72a5c68.js",
    "revision": "03e91dc25a658a8153d74360e53a0aa4"
  },
  {
    "url": "assets/js/29.ee917864.js",
    "revision": "81763e1398dfd691e728f06c6f7f7ad1"
  },
  {
    "url": "assets/js/3.a801d51d.js",
    "revision": "a4fdceba328a473423f9681c50e71808"
  },
  {
    "url": "assets/js/30.3f1eab1f.js",
    "revision": "5ed9c41d9dabb7ad1827afd4414c32c3"
  },
  {
    "url": "assets/js/31.c67951bb.js",
    "revision": "1d69a8b1180000c73a61bc3d89a46506"
  },
  {
    "url": "assets/js/32.ae392789.js",
    "revision": "e971ca37b8c865a96513577015530350"
  },
  {
    "url": "assets/js/33.f252bd51.js",
    "revision": "e8e6cf6075514ca9c1cc766cab2f0a0a"
  },
  {
    "url": "assets/js/34.6972b076.js",
    "revision": "1cf23db5c2db6adfd47f1672393eb5ef"
  },
  {
    "url": "assets/js/35.510df751.js",
    "revision": "d8df66a7ca7858518bccac8caca4c81f"
  },
  {
    "url": "assets/js/36.980041c9.js",
    "revision": "27f1bcea399222e6a1ba3caca34b4d00"
  },
  {
    "url": "assets/js/37.e5169419.js",
    "revision": "02efb89074bf6e5ed2fc6cb5fb1421fc"
  },
  {
    "url": "assets/js/38.32db0993.js",
    "revision": "d68cb36eb12271c48a06991f577855e2"
  },
  {
    "url": "assets/js/39.3c89f3ed.js",
    "revision": "3b62cb879e9bc313fbf55f38bfb8c92f"
  },
  {
    "url": "assets/js/4.2f187711.js",
    "revision": "bc6ced82bc7e71bc7b8dab9d1ab298cc"
  },
  {
    "url": "assets/js/40.a3dc7c71.js",
    "revision": "580dee33d963fbd557cb03ece19dc33e"
  },
  {
    "url": "assets/js/41.32329975.js",
    "revision": "87e5a6b19ce6f1958e1ae471b5cf3b48"
  },
  {
    "url": "assets/js/42.46c5ad9a.js",
    "revision": "2e6cd533ccc8f71162196b3c497de011"
  },
  {
    "url": "assets/js/43.7e55195d.js",
    "revision": "4a6f3fbf2a13d8a1ecaf1f305db35c68"
  },
  {
    "url": "assets/js/44.27d84e99.js",
    "revision": "79d89cf4060a72051047abf11007f3fd"
  },
  {
    "url": "assets/js/45.a324ab5d.js",
    "revision": "e88864f4c4297c29a6ca120245dd602c"
  },
  {
    "url": "assets/js/46.cc33e96e.js",
    "revision": "798e7444575987eb9e89469494f8697b"
  },
  {
    "url": "assets/js/47.3f0ee4aa.js",
    "revision": "2fd497d171809a293ec9d0710c5a9d79"
  },
  {
    "url": "assets/js/48.ff13f87e.js",
    "revision": "b695d9c8250802250c9e04cb360a8c4f"
  },
  {
    "url": "assets/js/49.ec58faae.js",
    "revision": "378ddc10c1c6713f8e4c6a953cbea440"
  },
  {
    "url": "assets/js/5.113bf9b3.js",
    "revision": "ee1455590ebf29c08f77054b34ef279e"
  },
  {
    "url": "assets/js/50.26eb9d66.js",
    "revision": "8f703dfca2ead4f6614d624443d741ae"
  },
  {
    "url": "assets/js/51.44322f8b.js",
    "revision": "89467e16c8bfed8dd7d0d91b7ea40577"
  },
  {
    "url": "assets/js/52.9106a4e0.js",
    "revision": "fc45b250939fb7cd789d334b4d0de342"
  },
  {
    "url": "assets/js/53.e32f735b.js",
    "revision": "e1db89cbca5732f0c208e8ea79b09a29"
  },
  {
    "url": "assets/js/54.9163cf8b.js",
    "revision": "1047c7731e916f801c52519f58bcdb8b"
  },
  {
    "url": "assets/js/55.42c03ce9.js",
    "revision": "08b675b5054185efbe2b4b79f6c823a6"
  },
  {
    "url": "assets/js/6.61f8daa8.js",
    "revision": "589fbbf34f7e1a4bbc0be4fc3525a9a3"
  },
  {
    "url": "assets/js/7.70699627.js",
    "revision": "ae5fb36931e887737518fcb833ff3ff0"
  },
  {
    "url": "assets/js/8.f2442fd7.js",
    "revision": "33a1cde5ca37f5bf404c43b9d3179857"
  },
  {
    "url": "assets/js/9.ace222c4.js",
    "revision": "d08aeb7a2adfb70652b9814535b0ab6b"
  },
  {
    "url": "assets/js/app.b18f6344.js",
    "revision": "49500652b1e818e26f75b2f079100322"
  },
  {
    "url": "assets/js/vendors~docsearch.b4d343ba.js",
    "revision": "f54217f9cfb4e385b761e78a1ac24bdb"
  },
  {
    "url": "guide/advanced/cache.html",
    "revision": "63488c7515375ed17b9f8aad720cf4fa"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "458ef80f81d334ff00bbd556789b5996"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "05fef3334705c7bca1d7f7394de3e4ee"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "e0560bcab160b3a0249300a5c3b7c289"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "238d2ee445f3786937502d20eb9ac4f3"
  },
  {
    "url": "guide/changelog.html",
    "revision": "cea101e306efc1be601fafe492b4cf64"
  },
  {
    "url": "guide/custom/contextmenu.html",
    "revision": "f0e23c7528c9436007ed3edf9d50097d"
  },
  {
    "url": "guide/custom/i18n.html",
    "revision": "c3991da1d8416d90cf350f32af0ff4dd"
  },
  {
    "url": "guide/custom/index.html",
    "revision": "880b7636d0a11e718733b4cc52f7531b"
  },
  {
    "url": "guide/custom/slot.html",
    "revision": "94419b6804e7b2d8b5554814d652a3c6"
  },
  {
    "url": "guide/custom/transition.html",
    "revision": "a074f107459a3477345953f695c0d0f2"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "1802a697cd7c1cb8b301d0bd7e397f8f"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "f4ea4eb40c0859df6fadccee6e4aa66a"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "c4929a475fabfa4f0be6d8d757a0e89c"
  },
  {
    "url": "guide/essentials/nuxt.html",
    "revision": "16e401710170d0ecb243a8e7c9cf1185"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "5709141375f98b9a20586e66424fae58"
  },
  {
    "url": "guide/index.html",
    "revision": "b3db1a01976219e96bf632187b3ae90c"
  },
  {
    "url": "guide/meta/faqs.html",
    "revision": "541f94b8b23e49ef0de52a3e60ff837a"
  },
  {
    "url": "guide/meta/solutions.html",
    "revision": "c2f2de8ffb1356baba07d7563867e8bd"
  },
  {
    "url": "guide/meta/uninstall.html",
    "revision": "238406713ef68b10c6b7946a3908df3b"
  },
  {
    "url": "index.html",
    "revision": "8adbb57be952244e813cd52110de1fa0"
  },
  {
    "url": "zh/api/index.html",
    "revision": "ac6b74888dc08e910f5d5ebe98714e26"
  },
  {
    "url": "zh/guide/advanced/cache.html",
    "revision": "de64f0987ffc39cb43c48e739bfa60db"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "8a73523ae084a42fc54ed1509d9ddee3"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "6f112e1d945a97be342458e23d495e0b"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "1b8e077806fe0bc0c8e4d09d3a622d9b"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "58762da30b667112e572874003680cd9"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "af0d842e98f5287974a885e8faaf3fe1"
  },
  {
    "url": "zh/guide/custom/contextmenu.html",
    "revision": "40e2f8d5b8fe4e3ea6fd980bc3133070"
  },
  {
    "url": "zh/guide/custom/i18n.html",
    "revision": "9827b3ce95c54b17fb0f0124bfa268b2"
  },
  {
    "url": "zh/guide/custom/index.html",
    "revision": "09d599527526a41807677ca16b5f7b1b"
  },
  {
    "url": "zh/guide/custom/slot.html",
    "revision": "66ae06562c1d8487ec8678a3b3bb6eac"
  },
  {
    "url": "zh/guide/custom/transition.html",
    "revision": "84ce547c90c5fbaa86acff5f6c64514d"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "03ba914f52f5ed6c26acc37ee63a8baa"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "267f937cdd05cbfad7775990c735936f"
  },
  {
    "url": "zh/guide/essentials/installation.html",
    "revision": "58019d923a61b57a7d2ab1b734bdf26a"
  },
  {
    "url": "zh/guide/essentials/nuxt.html",
    "revision": "53efa910f970a5bade8f97d8ed20469f"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "293dc16bcc377c8f1027a40bb19f4d91"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "21e4bfc138582a01c0240df14caa3578"
  },
  {
    "url": "zh/guide/meta/faqs.html",
    "revision": "b41d18196b870272a147263588ebf0c3"
  },
  {
    "url": "zh/guide/meta/solutions.html",
    "revision": "db7ef16929f0b6db21617b086ce120b2"
  },
  {
    "url": "zh/guide/meta/uninstall.html",
    "revision": "bb6da4d14534854681f6cacff085ec2d"
  },
  {
    "url": "zh/index.html",
    "revision": "c615c449c6fd0670e6d8eb2b2bafb6a6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
