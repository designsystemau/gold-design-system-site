GOLD Design System, previously known as the Australian Government Design System - Website
====

[https://gold.designsystemau.org](https://gold.designsystemau.org)

## Prerequisites

- [`Node.js`](https://nodejs.org) **12** Optionally, use [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating) to install this: 

```
nvm use
```

> **NOTE:** If you're developing on Windows, please ensure that [your local `npm` configuration is using a shell that supports UNIX like folder pathing](https://stackoverflow.com/questions/23243353/how-to-set-shell-for-npm-run-scripts-in-windows) ( i.e `a/unix/path`  rather than `a\\windows\\path` ).


## Install

Once cloned or downloaded, install the dependencies:

```
npm install
```

For the first time, run prebuild to install AuDS: 

```
npm run prebuild
```

Then run the build:

```
npm run build
```

To run the watch while developing and spin up a local server run:

```
npm run watch
```
