import { Platform } from "react-native"
import Config from "react-native-config"

export const IS_IOS: boolean = Platform.OS === 'ios'
export const IS_ANDROID: boolean = Platform.OS === 'android'
export const IS_PROD: boolean = Config.APP_ENV === 'production'