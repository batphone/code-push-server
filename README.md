# CodePush Server

forked from [source](https://github.com/lisong/code-push-server) 


## Use code-push hot update correctly
- Apple allows the use of hot update [Apple's developer agreement] (https://developer.apple.com/programs/ios/information/iOS_Program_Information_4_3_15.pdf), but the provisions can not be prompted to update the user, affecting the user experience. And Google Play happens to be the opposite, you must inform the user to update. However, China's android market must close the update box, otherwise it will be in the audit application to "please upload the latest version of the binary application package" to reject the application.
- react-native different platform bundles are not the same, in the use of code-push-server must be created when the different applications to distinguish (eg. CodePushDemo-ios and CodePushDemo-android)
- react-native-code-push only update the resource file, will not update java and Objective C, so npm upgrade depends on the package version, if dependent on the use of localized package, this time must change the application version number (ios modify Info . CFBundleShortVersionString in .plist, android modifies versionName in build.gradle) and then recompiles the app to the app store.
- recommend the use of the code-push release-react command to publish the application, which combines the package and release commands (eg. Code-push release-react CodePushDemo-ios ios -d Production)
- Each time you submit a new version to the App Store, you should also publish an initial version to the code-push-server based on the submission. (Since each time a code-push-server is released, the code-puse-server compares with the initial version to generate the patch)

## EXAMPLE 
Api.code-push.com is just a test server, do not put their own production environment on the project, the server broadband only 1M, and the service did not do load balancing and monitoring, stability can not guarantee, please yourself build their own services The

### shell命令行端
```shell
$ code-push login http://api.code-push.com:8080 #log in
```

### Client examples

[ReactNative CodePushDemo](https://github.com/lisong/code-push-demo-app)

[Cordova CodePushDemo](https://github.com/lisong/code-push-cordova-demo-app)


## INSTALL
```shell
$ yarn install
$ ./bin/db init --dbhost localhost --dbuser root --dbpassword PASSWORD
$ ./bin/www
```

## UPGRADE
```shell
yarn install
$ ./bin/db upgrade --dbhost localhost --dbuser root --dbpassword PASSWORD
$ #restart code-push-server
```

## CONFIG
must be set here:
```./core/config.js```


## RUN
```shell
$ node ./bin/www 
```

## [code-push-cli](https://github.com/Microsoft/code-push)
Use code-push-cli manager CodePushServer

```shell
$ npm install code-push-cli@latest -g
$ code-push login http://127.0.0.1:3000 #login in browser account:admin password:123456
```

## [react-native-code-push](https://github.com/Microsoft/react-native-code-push) for react-native

```shell
$ cd /path/to/project
$ npm install react-native-code-push@latest --save
```

## config react-native project
Follow the react-native-code-push docs, addition iOS add a new entry named CodePushServerURL, whose value is the key of ourself CodePushServer URL. Andriod use the new CodePush constructor in MainApplication point CodePushServerUrl

iOS eg. in file Info.plist

```xml
...
<key>CodePushDeploymentKey</key>
<string>YourCodePushKey</string>
<key>CodePushServerURL</key>
<string>YourCodePushServerUrl</string>
...
```

Android eg. in file MainApplication.java

```java
@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new CodePush(
         "YourKey",
         MainApplication.this,
         BuildConfig.DEBUG,
         "YourCodePushServerUrl" 
      )
  );
}
```

## Use [CodePush Web](https://github.com/lisong/code-push-web) manage apps
ex:
```
$ code-push app add studioconnect-ios ios react-native
```

add codePushWebUrl config in ./config/config.js

eg.

```json
...
"common": {
  "codePushWebUrl": "Your CodePush Web address",
}
...
```

## License
MIT License [read](https://github.com/lisong/code-push-server/blob/master/LICENSE)


