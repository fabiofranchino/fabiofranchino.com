self.addEventListener('fetch', function(event) {
    const url = event.request.url
    const status = event.request.status
    console.log(url, status)
})

self.addEventListener("install", event => {
    console.log("Service worker installed")
})

self.addEventListener("activate", event => {
    console.log("Service worker activated")
})