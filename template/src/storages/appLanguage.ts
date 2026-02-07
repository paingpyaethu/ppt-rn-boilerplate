import { appStorage } from "@/utils/storage";
import { StorageKeys } from "@/constants/common";

export const authToken = {
  get: () => appStorage.getString(StorageKeys.authToken) ?? null,
  set: (token: string) => appStorage.set(StorageKeys.authToken, token),
  clear: () => appStorage.remove(StorageKeys.authToken),
};
