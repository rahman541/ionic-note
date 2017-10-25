# Evernote like apps
Playstore link: [https://play.google.com/store/apps/details?id=com.c2d.ionic_note](https://play.google.com/store/apps/details?id=com.c2d.ionic_note)

## Client side
Use ionic. Plugin added
- cordova-plugin-crosswalk-webview. To support older version android

Deploying in Android
```
# Sign the unsigned APK
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks android-armv7-release-unsigned.apk my-alias
# Zip align tool to optimize the APK
zipalign -v 4 android-armv7-release-unsigned.apk NoteApp.apk
```
