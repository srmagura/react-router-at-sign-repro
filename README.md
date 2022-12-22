# react-router-at-sign-repro

1. `yarn install`
2. `yarn start`

react-router-dom 6.6.0: `null` is printed.

react-router-dom 6.3.0: a match object is printed:

```js
{
  params: { slug: 'sam' },
  pathname: '/@sam',
  pathnameBase: '/@sam',
  pattern: { path: '/@:slug', caseSensitive: false, end: true }
}
```
