---
title: How to configure Netlify redirects to use Plausible service
date: 2024-08-26 13:22:00 +0100
---





To set up redirects in [Netlify](https://www.netlify.com/) to mask [Plausible](https://plausible.io/) analytics as a first-party service, you'll need to use the following configuration in your `netlify.toml` file:

```toml
[[redirects]]
  from = "/js/script.js"
  to = "https://plausible.io/js/plausible.js"
  status = 200

[[redirects]]
  from = "/api/event"
  to = "https://plausible.io/api/event"
  status = 202
```

### How It Works

- **Masking URLs**: The redirects make it seem like your analytics script and event tracking are being served from your own domain instead of a third-party service, ensuring better privacy and potentially bypassing ad blockers.
- **Custom Paths**: Requests made to `/js/script.js` and `/api/event` on your domain are transparently redirected to Plausible’s servers.

### Key Points:

- **Status 200 and 202**: These status codes ensure that the redirects are treated as successful and invisible to the user.
- **First-Party Integration**: This approach keeps your tracking fully functional while appearing native to your domain.

By implementing this, your website benefits from Plausible's privacy-focused analytics while seamlessly integrating as a first-party service.