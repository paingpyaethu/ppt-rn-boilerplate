@objc(RNExitApp)
class RNExitApp: NSObject {

  @objc
  func exitApp() {
    exit(0)
  }
}