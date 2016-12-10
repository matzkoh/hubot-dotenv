# hubot-dotenv

## About .env

[dotenv](https://github.com/motdotla/dotenv/)

## Install

```
npm i -S hubot-dotenv
```

## Example

Your `.env` file:

```
FOO=42
```

Part of your `package.json` file:

```json
{
  "scripts": {
    "start": "hubot-dotenv -n botname"
  }
}
```

Run `npm start`

Get environment variables from your bot:

```js
console.log(process.env.FOO);
// 42
```
