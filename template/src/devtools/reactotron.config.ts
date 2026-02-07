import Reactotron, { ReactotronReactNative } from "reactotron-react-native";
import mmkvPlugin from "reactotron-react-native-mmkv";
import {
  QueryClientManager,
  reactotronReactQuery,
} from "reactotron-react-query";
import config from "../../app.json";
import { appStorage } from "@/utils/storage";
import { queryClient } from "@/services/queryClient";

const queryClientManager = new QueryClientManager({
  queryClient,
});

const reactotron = Reactotron.configure({
  name: config.name,
  onDisconnect: () => {
    queryClientManager.unsubscribe();
  },
  // onConnect: () => {
  /** since this file gets hot reloaded, let's clear the past logs every time we connect */
  // Reactotron.clear();
  // },
});

reactotron.use(mmkvPlugin<ReactotronReactNative>({ storage: appStorage }));

reactotron.use(reactotronReactQuery(queryClientManager));

reactotron.useReactNative({
  networking: {
    ignoreUrls: /symbolicate/,
  },
});

reactotron.connect();
