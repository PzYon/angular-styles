## Relevant Steps
1. Library
    - `lib/projects/styles-lib/src/lib/styles/global-styles.scss` contains global styles. 
    - In`package.json` as part of the library build process we also compile this `scss`file to a `css` file (see `build-and-pack`-script). 
    - In `ng-package.json` we ensure that the `styles`-folder is exported/bundled (containing `scss` file as well as generated `css`-file).
    - StylesLibService is a service that provides a method to ensure that the global styles are loaded.
2. App 
    - In `angular.json` of the `app` we import the `styles`-folder from the `node_modules` as assets (not as styles!). This is important, as we want to have control over when and how the styles are loaded. This is done "manually" via the service (see next step).
    - In `APP_INITIALIZER` in `app.config.ts` (for every component) we use the library service's `ensureStyles` method to register/lad the CSS.
    - Variables from `scss`-file can als be used app (see `app.component.css`).
