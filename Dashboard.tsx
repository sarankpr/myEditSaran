import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions,Image, FlatList } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppStatusBar from './components/AppStatusBar';
import ProfileNameView from './components/ProfileNameView';

import Attendance from './views/attendance/Attendance';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface Mylist {
  id: string;
  content: string;
  icon : any;
  link : any;
}

const DATA = [
  {
    id: '1',
    icon: require('../src/assets/icons/attendance.png'),
    content: 'Attendance',
    link: 'Attendance',
  },
  {
    id: '2',
    icon: require('../src/assets/icons/academicCalendar.png'),
    content: 'Academic Calender',
    link: 'Calenders',
  },
  {
    id: '3',
    icon: require('../src/assets/icons/fee.png'),
    content: 'Fee Details',
    link: 'Fees',
  },
  {
    id: '4',
    icon: require('../src/assets/icons/enotice.png'),
    content: 'E NoticeBoard',
    link: 'Noticeboard',
    
  },
  {
    id: '5',
    icon: require('../src/assets/icons/marks.png'),
    content: 'Marks/Result ',
    link: 'Result',
  },
]

export default function Dashboard({navigation}: any) {      
    const Item = ({data}: {data: Mylist})=> (
      <View >
        <TouchableOpacity onPress={() => navigation.navigate(data.link)}>
          <View style={styles.listContainer}>
          <Image style={styles.stretch} source={data.icon} />
            <Text
              style={{
                fontSize: 20,
                color: '#294770',
                marginLeft: 20,
                marginTop: 20, 
              }}>
              {data.content}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );  
   
    return (
        <View>
            <View style={{ backgroundColor: '#C0E1F3' }}>
                <AppStatusBar backgroundColor={'#C0E1F3'} barStyle="dark-content" />
                <View style={styles.navcontainer}>
                    <TouchableOpacity >
                        <Icon
                            name="bell"
                            size={20}
                            color="#1C5092"
                            style={{marginTop: 15}}
                            />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, color: '#1C5092', paddingTop: 7 }}>Home</Text>
                    <TouchableOpacity>
                        <Icon
                            name="bars"
                            size={20}
                            color="#1C5092"
                            style={{marginTop: 15}}
                            />
                    </TouchableOpacity>
                </View>            
        <ProfileNameView />
        </View>
        <View style={{}}>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item data={item} />}
            keyExtractor={(item: Mylist) => item.id}
            scrollEnabled={true}
            contentContainerStyle={{
              flexGrow: 1,
              }}
          />  
          </View>    
      </View>
    )
}

const styles = StyleSheet.create({
    navcontainer: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        display: 'flex',
        flexWrap:"wrap",
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
      listContainer:{
        padding: 10,
        marginTop: 15,
        marginLeft: 20,
        marginRight:20,
        flexDirection: 'row',
        borderColor:"#B9B9B9",
        borderRadius: 15,
        borderWidth:1,
      }
})