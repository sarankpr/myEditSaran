import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, FlatList } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

//import AppStatusBar from '../components/AppStatusBar';
//import ProfileNameView from './components/ProfileNameView';

//import Attendance from './views/attendance/Attendance';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function FrontScreen() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white' }}>
      <View style={{ height: 250 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/HomeScr.png')}
            style={{
              width: 150,
              height: 150,
            }}
          />
        </View>
      </View>
      
      <View style={{}}>
        <TouchableOpacity>
          <View style={styles.listContainer}>
            <Image
              style={styles.stretch}
              source={require('../assets/stud.png')} />
            <Text
              style={styles.listText}>
              Student
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.listContainer}>
            <Image style={styles.stretch} source={require('../assets/parent.png')} />
            <Text
              style={styles.listText}>
              Parent
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.listContainer}>
            <Image style={styles.stretch} source={require('../assets/faculty.png')} />
            <Text
              style={styles.listText}>
              Faculty/Mentor
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.listContainer}>
            <Image style={styles.stretch} source={require('../assets/warden.png')} />
            <Text
              style={styles.listText}>
              Warden
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  navcontainer: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    display: 'flex',
    flexWrap: "wrap",
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    marginLeft: 20,
    marginTop: 20,
  },
  listContainer: {
    padding: 10,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    borderColor: "#B9B9B9",
    borderRadius: 15,
    borderWidth: 1,
  },
  listText: {
    fontSize: 20,
    color: '#294770',
    marginLeft: 20,
    marginTop: 20,

  }
})