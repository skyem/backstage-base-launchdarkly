# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

To start the app, run:

```sh
yarn install
yarn dev
```

LaunchDarkly is configured using the React sdk in `packages/app/src/index.tsx`. The `clientSideID` there needs to be set to a valid value to function.

It is set up to disable the settings endpoint, and to hide the Backstage logo at the top left using a `showTechStack` flag.

It is using packages/app/src/components/FlaggedRoute.tsx to wrap the routes that should be hidden behind a feature flag.
It is hiding the logo in packages/app/src/components/Root.tsx using `withLDConsumer` to wrap the icon element to respond to the `showTechStack` flag.
