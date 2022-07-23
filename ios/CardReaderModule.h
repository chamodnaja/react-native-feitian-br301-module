#ifndef NtlCardReaderModule_h
#define NtlCardReaderModule_h


#endif /* RCTNtlCardReader_h */

#import <React/RCTLog.h>
#import <React/RCTBridgeModule.h>
#import "ReaderInterface.h"
@interface NtlCardReaderModule : NSObject <RCTBridgeModule,ReaderInterfaceDelegate>

+ (NSString *)moduleName;

- (void)cardInterfaceDidDetach:(BOOL)attached;

- (void)didGetBattery:(NSInteger)battery;

- (void)findPeripheralReader:(NSString *)readerName;

- (void)readerInterfaceDidChange:(BOOL)attached bluetoothID:(NSString *)bluetoothID;

@end
