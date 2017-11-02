# Evernote like apps
Playstore link: [https://play.google.com/store/apps/details?id=com.c2d.ionic_note](https://play.google.com/store/apps/details?id=com.c2d.ionic_note)

## TODO
- Add & setup dotenv library from [motdotla/dotenv](https://github.com/motdotla/dotenv)
- Integrate with firebase API (Either thru express API or direct. Former more secure)
- Re-design front UI
- Support note tagging (for searching)
- Add drag drop support (might be)

## Client side
Use ionic. Plugin added
- cordova-plugin-crosswalk-webview. To support older version android

Deploying in Android
```
ionic cordova run android --prod --release
# OR
ionic cordova build android --prod --release
# Sign the unsigned APK
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks android-armv7-release-unsigned.apk my-alias
# Zip align tool to optimize the APK
zipalign -v 4 android-armv7-release-unsigned.apk NoteApp.apk
```

### Contribution
Fork & submit pull request. I'll review & merge.
