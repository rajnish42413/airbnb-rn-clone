import React from "react";
import { View, FlatList, Text, SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";
import Post from '../../components/Post';
import places from '../../../assets/data/feed';
import LottieView from 'lottie-react-native';
import { SearchBar } from "react-native-elements";
import { Icon, TabBar, Tabs } from '@ant-design/react-native';


const SearchResultsScreen = () => {
  const posts = places;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchBar
          platform="default"
          containerStyle={{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0 }}
          inputContainerStyle={{ backgroundColor: '#1E767F' }}
          inputStyle={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}
          rightIconContainerStyle={{}}
          loadingProps={{}}
          lightTheme
          onChangeText={newVal => console.log(newVal)}
          onClearText={() => console.log(onClearText())}
          placeholder="New Delhi- 9 Sep – 10 Sep"
          placeholderTextColor="#99D4CF"
          showCancel
          searchIcon={{ color: '#99D4CF', size: 28 }}
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          onCancel={() => console.log(onCancel())}
          value={""}
        />
      </View>
      <Tabs tabs={tabs}
        tabBarBackgroundColor={'#006A7A'}
        style={{ borderBottomWidth: 0 }}
        tabBarInactiveTextColor={'#99D4CF'}
        tabBarActiveTextColor={'#fff'}
        tabBarTextStyle={{ fontSize: 15, fontWeight: 'bold' }}
        tabBarUnderlineStyle={{ backgroundColor: '#fff' }}
      >
        <View >
          <View style={{ marginHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', paddingVertical: 15 }}>
            <Text style={{ width: '80%' }}>
              All After Effects features are supported by Lottie. If you notice there are some layers or animations missing check this list to ensure they are supported.
            </Text>
            <LottieView
              autoPlay loop
              style={{
                width: 60,
                height: 60,
              }}
              source={require('../../../assets/lottie/alarm.json')}
            />
          </View>

        </View>
        <ScrollView
          style={{ flex: 1 }}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginHorizontal: 20, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', paddingVertical: 15 }}>
            <Text style={{ width: '80%' }}>
              <Text style={styles.strong}>All After Effects features are supported by Lottie.</Text>
              <Text style={styles.text}>If you notice there are some layers or animations missing check this list to ensure they are supported.</Text>
            </Text>
            <LottieView
              autoPlay loop
              style={{
                width: 60,
                height: 60,
              }}
              source={require('../../../assets/lottie/alarm.json')}
            />
          </View>
          <FlatList
            data={posts}
            renderItem={({ item }) => <Post post={item} />}
          />
        </ScrollView>
        <View >
          <ScrollView
            style={{ flex: 1 }}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >

            <FlatList
              data={posts}
              renderItem={({ item }) => <Post post={item} />}
            />
          </ScrollView>
        </View>
      </Tabs>
    </SafeAreaView>
  );
};

export default SearchResultsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#006A7A',
  },
  strong: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5B5B5B'
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5B5B5B',
  }
});

const tabs = [
  { title: 'For you' },
  { title: 'Homes' },
  { title: 'Experience' },
  { title: 'Places' },
];