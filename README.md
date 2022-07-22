# react-native-feitian-br301-module
react-native-library react-native-feitian-br301-module
## Installation

```sh
npm install react-native-feitian-br301-module
```

## Usage

```js
import NtlCardReaderModule from "react-native-feitian-br301-module";

// ...
configuration ios

info.plist
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

link
-libiRockey301_3.5.64_Release
-CoreBluetooth
-ExternalAccessory
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
