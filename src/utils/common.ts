import { Platform } from "react-native"

export const IS_IOS: boolean = Platform.OS === 'ios'
export const IS_ANDROID: boolean = Platform.OS === 'android'