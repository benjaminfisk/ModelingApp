import React from 'react'
import { View, Text, StyleSheet, StyleProp, TouchableOpacity } from 'react-native'
import { colors, global_styles } from '../../assets/styles'
import { sampleAttendance, AttendanceType } from '../../assets/studentRoster'
import Header from '../../components/Header'

type Props = {
  navigation: any,
  route: any
}

const Attendance_Stats: React.FC<Props> = (props) => {
  const { navigation, route } = props;
  console.log(navigation.params)


  type ItemProps = {
    data: AttendanceType
    viewStyle?: StyleProp<any>
    textStyle?: StyleProp<any>
  }
  const Item: React.FC<ItemProps> = ({data, viewStyle, textStyle}) => {
    const appliedView = viewStyle || styles.itemRow;
    const appliedText = textStyle || styles.itemText;
    return (
      <View style={appliedView}>
        <Text style={[appliedText, {flex: 1}]}>{data.date}</Text>
        <Text style={[appliedText, {flex: 1}]}>{data.time}</Text>
      </View>
    )
  }

  const data = sampleAttendance
  
  return (
    <View style={global_styles.container}>
      <Header title="VIEW PAST ATTENDANCE"/>
      <View style={styles.titleView}>
        <Text style={global_styles.pageTitle}>ATTENDANCE STATS</Text>
        <Text style={styles.nameText}>{route.params.name}</Text>
      </View>
      <View style={styles.listView}>
        <View style={styles.titleRow}>
            <Text style={styles.titleText}>Present</Text>
            <Text style={styles.titleText}>Tardy</Text>
            <Text style={styles.titleText}>Absent</Text>
        </View>
        <View style={styles.itemRow}>
            <Text style={styles.itemText}>100</Text>
            <Text style={styles.itemText}>0</Text>
            <Text style={styles.itemText}>0</Text>
        </View>
      </View>
      <View style={styles.listView}>
        <Item data={{date: "Date", time: "Time"}} 
          textStyle={styles.titleText} 
          viewStyle={styles.titleRow} 
        />
        {data.map((item, index) => (
          <Item data={{...item}} key={index} />
        ))}
      </View>
      <TouchableOpacity style={styles.loadMoreButton}>
        <Text>Load More</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  titleView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 64,
  },
  listView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 32,
    paddingLeft: 32,
    paddingRight: 32,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 23,
    textAlign: 'center',
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
    paddingTop: 32
  },
  titleRow: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    height: 31,
  },
  itemRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemText: {
    fontWeight: '400',
    color: colors.primary,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    flex: 1,
  },
  loadMoreButton: {
    marginTop: 32,
    width: 137,
    height: 36,
    color: colors.primary,
    fontSize: 14,
    fontWeight: '400',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.forms
  }
})

export default Attendance_Stats