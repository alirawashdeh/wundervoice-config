# wundervoice-config

WunderVoice is a Pebble smartwatch app that allows you to quickly add items to a Wunderlist list using speech.

This repository contains a node.js app, used by the WunderVoice pebble app to authenticate with Wunderlist using OAuth.

See [wundervoice](https://github.com/alirawashdeh/wundervoice) on github for the source code of the Pebble application itself.

Your app should now be running on [localhost:5000](http://localhost:5000/).


## Configuration

Sign up for API keys at [Wunderlist Developer](https://developer.wunderlist.com). Edit the following three lines app.js

Modify the following part of the app.js file to include your client ID and client secret:

```
var client_id = process.env.client_id || '03ffe0cac0a0401aa6673c3cf6d02ced';// Your client id
var client_secret = process.env.client_secret || 'a57c43efb9644574a96d6623fb8bfbc2'; // Your client secret
```

Alternatively, if you're deploying to heroku, you can set the relevant environment variables instead:

```sh
$ heroku config:set client_id=03ffe0cac0a0401aa6673c3cf6d02ced
$ heroku config:set client_secret=a57c43efb9644574a96d6623fb8bfbc2
```

Once you have deployed your application, take a note of the URL and update the following part of the app.js file:

'''```
var redirect_uri = process.env.redirect_uri || 'http://localhost:8888/callback'; // Your redirect uri
```

Remember, OAuth requires that callback URLs are hosted using SSL, so ensure that you specify an "HTTPS" URL.

# Credits

Thanks to heroku/node-js-getting-started and spotify/web-api-auth-examples for the vast majority of this code.
