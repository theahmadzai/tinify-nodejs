[<img src="https://travis-ci.org/tinify/tinify-nodejs.svg?branch=master" alt="Build Status">](https://travis-ci.org/tinify/tinify-nodejs)

# Tinify API client for Node.js

## Installation

Install the API client:

```
npm install tinify
```

Or add this to your `package.json`:

```json
{
  "dependencies": {
    "tinify": "*"
  }
}
```

## Usage

```javascript
var tinify = require("tinify");
tinify.key = "YOUR_API_KEY";

tinify.fromFile("unoptimized.png").toFile("optimized.png",);
```

## Running tests

```
npm install
npm test
```

## License

This software is licensed under the MIT License. [View the license](LICENSE).