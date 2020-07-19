---
title: Local communication between browser tabs
date: 2020-07-19 13:59:00 +0100
---



Making a communication channel in javascript between two or more browser windows is a breeze.

Here the snippets. 

Make sure to have two HTML documents, served both from a local webserver, let's say a `sender.html` and a `receiver.html` (you can make a two-ways communication with the same code, though).

The `receiver` needs this code:

```html
<!DOCTYPE html>
<head></head>
<body>
        <script>
            const bus = new BroadcastChannel('mybus')
            
            bus.onmessage = e => {
                console.log(e)
              // will print {msg: 'Postcard from the Sender'}
            }
        </script>
</body>
</html>
```

and the `sender` this one:

```html
<!DOCTYPE html>
<head></head>
<body>
    <button onclick="send()">Send message</button>
    <script>
        const bus = new BroadcastChannel('mybus')

        function send(){
            bus.postMessage({msg: 'Postcard from the Sender'})
        }
    </script>
</body>
</html>
```

The channel name is key to make it work.