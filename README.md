# onfido-sdk-web-sample-react-native
Sample app which uses the Web SDK inside a React Native app

## Usage

Install required packages:

```sh
$ npm install
```

then run for the target device:

```sh
$ npm run ios # for iOS
```

```sh
$ npm run android # for Android
```

For more info, see [Expo.io](https://docs.expo.io/)

## WebSDK URL

By default, this app uses the lastest build: https://latest-onfido-sdk-ui-onfido.surge.sh/.

To change this, go to `App.tsx`.

### Caveats

- Because we don't have the full control of iOS/Android native configuration (e.g. `Info.plist` file for iOS),
it's unable to load a local URL like `https://localhost:8080`.
