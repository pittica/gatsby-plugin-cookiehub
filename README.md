# pittica/gatsby-plugin-cookiehub

![License](https://img.shields.io/github/license/pittica/gatsby-plugin-cookiehub)
![Version](https://img.shields.io/github/package-json/v/pittica/gatsby-plugin-cookiehub)
![Release](https://img.shields.io/github/v/release/pittica/gatsby-plugin-cookiehub)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/pittica/gatsby-plugin-cookiehub/dev/gatsby)
[![npm](https://img.shields.io/npm/v/@pittica/gatsby-plugin-cookiehub)](https://www.npmjs.com/package/@pittica/gatsby-plugin-cookiehub)

## Description

[CookieHub](https://www.cookiehub.com/) plugin for [GatsbyJS](https://www.gatsbyjs.org/).

## Install

[![npm](https://img.shields.io/npm/v/@pittica/gatsby-plugin-cookiehub)](https://www.npmjs.com/package/@pittica/gatsby-plugin-cookiehub)

```shell
npm install @pittica/gatsby-plugin-cookiehub
```

## Usage

The plugin provides integration for [CookieHub](https://www.cookiehub.com/) site.

## Configuration

Edit your **gatsby-config.js**.

```javascript
module.exports = {
  plugins: [
    {
      resolve: `@pittica/gatsby-plugin-cookiehub`,
      options: {
        code: CODE,
        debug: false,
        cookie: 'pittica-cookiehub',
      }
    },
  ],
}
```
### Options

* #### key
  Description: CookieHub domain code.

  Required: **YES**.

  Type: **String**.
* #### debug
  Description: A value indicating whether run CookieHub in debug/development mode.

  Required: **NO**.

  Type: **Boolean**.
* #### cookie
  Description: The prefix of the cookie name.

  Required: **NO**.

  Type: **String**.


## Copyright

(c) 2021, Pittaca S.r.l.s.
