# Prismagram IOS & Android App

Screens :

- [ ] Home
- [ ] Search
- [ ] Upload
- [ ] Notifications (Challenge)
- [ ] Profile
- [ ] Edit Profile (Challenge)
- [ ] Photo Detail
- [ ] Photo Comments (Challenge)
- [ ] Photo Likes (Challenge)
  <hr/>

# APP setup

clone 후 yarn install시 아래 패키지 자동 설치

- 설치 패키지 목록 -

1. yarn global add expo-cli
2. expo init app name
3. yarn add styled-components react-navigation apollo-boost graphql react-apollo-hooks
4. yarn add @expo/vector-icons
5. expo install expo-font expo-asset (expo 34이상 버전부터)
6. yarn add apollo-cache-persist apollo-cache-inmemory
7. yarn add react-native-gesture-handler
8. yarn add react-navigation-stack
9. yarn add react-navigation-tabs
   10.expo install react-native-reanimated
   <hr/>

# 메모

1. AsyncStorage는 String형태로만 받는다.
2. TouchableOpacity : 터치 이벤트(onPress 등)를 사용할 수 있는 VIew
