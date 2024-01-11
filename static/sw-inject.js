self.addEventListener('fetch', function(event) {
    const url = event.request.url
    const status = event.request.status
    console.log(url, status)
})

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/sw.js");
}