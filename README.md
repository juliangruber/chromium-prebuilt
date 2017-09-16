
# chromium-prebuilt

Use prebuilt Chromium binaries.

## Usage

First install the module, which downloads Chromium unless you have it cached already:

```bash
$ npm install --save chromium-prebuilt
```

Then get the path to the executable in Node:

```js
const chromium = require('chromium-prebuilt')
console.log(chromium)

// for example:
spawn(chromium, ['--headless'])
```

## License

MIT
