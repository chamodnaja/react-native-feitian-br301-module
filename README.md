# react-native-feitian-br301-module
react-native-library react-native-feitian-br301-module
modify from: [repository](https://github.com/realoiji/react-native-ntl-id-card-reader.git)
sdks: [version 3.5.64](https://github.com/FeitianSmartcardReader/FEITIAN_MOBILE_READERS.git)

## Installation

```sh
npm install react-native-feitian-br301-module
```

## Usage

```js
import CardReaderModule from "react-native-feitian-br301-module";
```

## Configuration IOS

```js
[[info.plist]]
<key>NSBluetoothAlwaysUsageDescription</key>
<string>App need your approval to access to the bluetooth</string>
<key>UISupportedExternalAccessoryProtocols</key>
<array>
    <string>com.ftsafe.bR301</string>
    <string>com.ftsafe.iR301</string>
    <string>com.ftsafe.ir301</string>
    <string>com.ftsafe.br301</string>
</array>
<key>NSBluetoothPeripheralUsageDescription</key>
<string>App need your approval to access to the bluetooth</string>
<key>UIBackgroundModes</key>
<array>
    <string>external-accessory</string>
</array>

[[Link Binary With Libraries]]
-libiRockey301_3.5.64_Release
-CoreBluetooth.framework
-ExternalAccessory.framework
```

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
