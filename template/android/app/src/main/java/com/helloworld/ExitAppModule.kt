package com.helloworld

import android.app.Activity
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ExitAppModule(
    private val reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "RNExitApp"

    @ReactMethod
    fun exitApp() {
        val activity: Activity? = reactContext.currentActivity
        activity?.finishAffinity()
        Runtime.getRuntime().exit(0)
    }
}