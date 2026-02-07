#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNExitApp, NSObject)

RCT_EXTERN_METHOD(exitApp)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
