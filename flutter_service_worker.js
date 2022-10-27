'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fa59c0bb73533304d84c5c68f1a9eb2d",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"manifest.json": "217eff424529abc130c9d4099e6c423f",
"assets/assets/icon/ppc-icon-white-bg.png": "8cd7ed6b2529c18bbb34c3cfb0016c03",
"assets/assets/icon/ppc-ios-app-xxl.png": "20d868078e261bb163ea0bdcffb23e2d",
"assets/assets/icon/ppc-logo.png": "5c185c1f46f8a15f15d07e8329154cae",
"assets/assets/icon/ppc-icon-48.png": "c2a1ed4598580901e4b7cfd553f62983",
"assets/assets/icon/ppc-icon.png": "8cd7ed6b2529c18bbb34c3cfb0016c03",
"assets/assets/icon/bitmap.png": "ac5c3a6361a833281f09ca443d04272b",
"assets/assets/icon/ppc-icon-white-48.png": "8b9dd925d6002ea06e9faf2042f3d400",
"assets/assets/icon/ppc-icon-256.png": "19fc8d0575840690efd48655bf56f68d",
"assets/assets/translations/id.json": "f952e874afd67538eb518cfa274c5e0f",
"assets/assets/translations/ha.json": "ee417f414b90811b69af52fb7fb39574",
"assets/assets/translations/el.json": "7b610e956700ed0d2e7fa177548dc3d0",
"assets/assets/translations/ur.json": "79e5825f42707262183f4398e83d2c66",
"assets/assets/translations/de.json": "55b8d32e9bc17a40c3375861c937c29e",
"assets/assets/translations/es.json": "5acb82bb29f29592b521d42f65fb4436",
"assets/assets/translations/bn_BD.json": "e0eb0e49a4306bb3ead3ce2374e9d4c7",
"assets/assets/translations/ro.json": "41d81e420d6accc9f6600d83e551d4f7",
"assets/assets/translations/hr.json": "eb683c20d52098f70b628f8512f23396",
"assets/assets/translations/pl.json": "be68153563d5618a2a4959b873ec0409",
"assets/assets/translations/tr.json": "d15cdbe0fd903fd22bd77c032f78a674",
"assets/assets/translations/hi.json": "90f372ca8e8335f73c8ca14eb6c0048b",
"assets/assets/translations/en.json": "99e6ef93041a6a4499301152b8b8b80a",
"assets/assets/translations/ru.json": "bc88f7ee02e7e3cc7b0d5ef79d238eb4",
"assets/assets/translations/nl.json": "1d91b8b1f6645c38edbc228d49aaf191",
"assets/assets/translations/zh.json": "fdac7dc91de9673a54a9a7214300bf5f",
"assets/assets/translations/da.json": "a52f7b259aae59220273a98405d83040",
"assets/assets/translations/pt.json": "73dbcbb29ad904fa0454c992d21f1621",
"assets/assets/translations/it.json": "ed206c70b13d85941a5739a79f143414",
"assets/assets/translations/vi.json": "8a5c6f88d9b7b48f3f506059a2726cf3",
"assets/assets/translations/fa.json": "024257d523bc89491b406ad90a7dc931",
"assets/assets/translations/sw.json": "4cd3a3c3b34a7293e502de0a28ce75e9",
"assets/assets/translations/fr.json": "78e8e72e11dbcb8783015bdfc71d0224",
"assets/assets/translations/sv.json": "5876968a3d1c8086f13896a5aef318f6",
"assets/assets/translations/nb_NO.json": "78fdd785584a43e5e0c066632638efec",
"assets/assets/translations/ja.json": "4417b6f7b594cdbe25dbf5122ec7ae1c",
"assets/assets/translations/th.json": "cc735b88a3944cee6206a31b9f7a7166",
"assets/assets/translations/fil.json": "137d76c475e371b355d3f11d8426faef",
"assets/assets/translations/uk.json": "d1d681bdb631226fcf9fc837b74911d5",
"assets/assets/translations/ar.json": "3724c1b380f53f4c3b4620fdddec1494",
"assets/assets/translations/ko.json": "d203620513ed128d51b4f0abe858d589",
"assets/assets/img/setup-launch.png": "8cb302866d91c8bb5b5978233d57de81",
"assets/assets/img/setup-legal.png": "c23a10b6db8912d55c6c148382d737b8",
"assets/assets/img/list-empty.png": "99db3da7de5f9bf9750bb7f90affcd5b",
"assets/assets/img/setup-consent.png": "c2a0e744740dfeff5ae50dc4cb1d7b45",
"assets/assets/img/setup-protection.png": "596458bdd2006b9ceac977e0484f0a2f",
"assets/assets/img/setup-security.png": "60a9b8d3a6357fbb5723add6df2f9cdb",
"assets/AssetManifest.json": "4667da34408f93f68b7828e14820c4e2",
"assets/CHANGELOG.md": "cb18118beec25ff9f3401b6c27b9af0d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "69f0698125a9071258c73e1cf0087d4b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "09b419ee6f24dfb98f334592438333ef",
"favicon.ico": "093138dc5844d12300546d7965a641ca",
"index.html": "b595ac1209fdd1a3446b0e22f6201865",
"/": "b595ac1209fdd1a3446b0e22f6201865",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"main.dart.js": "ff4472555499b77acbb2b1897270a4b3",
"splash/style.css": "2e6df68c18efc965e0beb1b72c5b4ae9",
"splash/img/light-3x.png": "4efa93e39a5af8100a62de6937899ed4",
"splash/img/dark-4x.png": "d2358b3b17d4664f7359020da33ee61d",
"splash/img/light-2x.png": "c4f4c355dc4fad0a3ff8f825372b1ba0",
"splash/img/dark-1x.png": "5d5d8d85da01897d725a3a1ef70b1d20",
"splash/img/dark-2x.png": "c4f4c355dc4fad0a3ff8f825372b1ba0",
"splash/img/light-4x.png": "d2358b3b17d4664f7359020da33ee61d",
"splash/img/light-1x.png": "5d5d8d85da01897d725a3a1ef70b1d20",
"splash/img/dark-3x.png": "4efa93e39a5af8100a62de6937899ed4",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"icons/Icon-512.png": "bb504a8fae0dcf8ee2bb127e117e39c1",
"icons/Icon-192.png": "0fd9acc74c10fd69514128470133fb05",
"icons/Icon-256.png": "ac5c3a6361a833281f09ca443d04272b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
