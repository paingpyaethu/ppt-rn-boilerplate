# @yomafleet/react-native-boilerplate

A production-ready React Native boilerplate template packed with best practices, multi-environment support, and a solid architecture out of the box.

## Features

- **React Native 0.83** with New Architecture enabled
- **TypeScript** with strict mode
- **React Navigation** (Native Stack + Bottom Tabs)
- **TanStack React Query** for server state management
- **i18next** for internationalization (English & Myanmar)
- **MMKV** for fast key-value storage
- **Reanimated** for performant animations
- **React Hook Form + Zod** for form handling and validation
- **Ky** as HTTP client
- **FreeRASP** for runtime application security
- **Multi-environment support** (Development, Staging, Production) for both Android and iOS
- **Atomic Design** component architecture (Atoms, Molecules, Templates)
- **Deep linking** configuration
- **Theming system** with dark mode support
- **Custom fonts** (Space Grotesk, Pyidaungsu)
- **ESLint** flat config with strict rules
- **Jest** testing setup with Testing Library
- **Reactotron** for development debugging

## Quick Start

### Prerequisites

Make sure you have completed the [React Native - Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide.

### Create a New Project

```bash
npx @react-native-community/cli@latest init MyApp --template https://github.com/yomafleet/react-native-boilerplate
```

### Install Dependencies

```bash
cd MyApp
yarn install
```

### iOS Setup

```bash
bundle install
cd ios && bundle exec pod install && cd ..
```

### Run the App

```bash
# Start Metro
yarn start

# Run on Android (Development)
yarn android:developmentDebug

# Run on iOS (Development)
yarn ios:developmentDebug
```

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI components (Button, Text, TextInput, etc.)
│   ├── molecules/      # Composite components (TabBarIcon, etc.)
│   └── template/       # Layout components (Screen, etc.)
├── constants/          # App-wide constants
├── devtools/           # Development tools (Reactotron)
├── hooks/              # Custom React hooks
├── native/             # Native module bridges
├── navigation/         # React Navigation setup
│   ├── Stacks/         # Stack navigators
│   └── Tabs/           # Tab navigators
├── schemas/            # Zod validation schemas
├── screens/            # Screen components
├── security/           # FreeRASP security config
├── services/           # HTTP client & query client
├── storages/           # MMKV storage utilities
├── tests/              # Test files and mocks
├── theme/              # Theming system & assets
├── translations/       # i18n locales and config
└── utils/              # Utility functions
```

## Multi-Environment Setup

The template comes with three pre-configured environments:

| Environment   | Android App ID Suffix | iOS Scheme                |
| ------------- | --------------------- | ------------------------- |
| Development   | `.development`        | `{ProjectName}Development`|
| Staging       | `.staging`            | `{ProjectName}Staging`    |
| Production    | *(none)*              | `{ProjectName}`           |

Each environment has its own `.env` file (`.env.development`, `.env.staging`, `.env.production`).

## Available Scripts

| Script                    | Description                          |
| ------------------------- | ------------------------------------ |
| `yarn start`              | Start Metro bundler                  |
| `yarn android:developmentDebug` | Run Android (Development)     |
| `yarn android:stagingDebug`     | Run Android (Staging)         |
| `yarn android:productionDebug`  | Run Android (Production)      |
| `yarn ios:developmentDebug`     | Run iOS (Development)         |
| `yarn ios:stagingDebug`         | Run iOS (Staging)             |
| `yarn ios:productionDebug`      | Run iOS (Production)          |
| `yarn lint`               | Run ESLint                           |
| `yarn test`               | Run Jest tests                       |
| `yarn pod:install`        | Install CocoaPods dependencies       |
| `yarn clean:yarn`         | Clean Yarn cache and reinstall       |
| `yarn clean:ios`          | Clean iOS build artifacts            |
| `yarn clean:android`      | Clean Android build artifacts        |

## Customization

After creating your project, you may want to:

1. **Update `.env` files** with your API URLs and configuration
2. **Configure FreeRASP** in `.env` files with your security settings
3. **Replace fonts** in `src/theme/assets/fonts/`
4. **Update app icons** in `android/app/src/*/res/mipmap-*/` and `ios/{ProjectName}/Images.xcassets/`
5. **Customize the theme** in `src/theme/`
6. **Add translations** in `src/translations/locales/`

## License

MIT
