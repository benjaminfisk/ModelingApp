import React from 'react'
import { View, Text, StyleSheet, StyleProp, TouchableOpacity } from 'react-native'
import { colors, global_styles } from '../../assets/styles'
import { students, StudentType } from '../../assets/studentRoster'
import Header from '../../components/Header'

type Props = {
  navigation: any
}

const Past_Attendance: React.FC<Props> = (props) => {
  const { navigation } = props;


  type ItemProps = {
    data: StudentType
    viewStyle?: StyleProp<any>
    textStyle?: StyleProp<any>
  }
  const Item: React.FC<ItemProps> = ({data, viewStyle, textStyle}) => {
    const appliedView = viewStyle || styles.itemRow;
    const appliedText = textStyle || styles.itemText;
    const bigArrow = <Text style={{fontWeight: '900'}}>></Text>;
    return (
      <TouchableOpacity style={appliedView}>
        <Text style={[appliedText, {flex: 2}]}>{data.name}</Text>
        <Text style={[appliedText, {flex: 1}]}>{data.section}</Text>
        {/* <Text>{data.status}</Text> */}
        <Text style={[appliedText, {flex: 1, textAlign: 'center'}]}>{data.status || bigArrow}</Text>
      </TouchableOpacity>
    )
  }

  const data = students.filter((student) => student.status === 'Checked In');
  
  return (
    <View style={global_styles.container}>
      <Header title='VIEW PAST ATTENDANCE' />
      <View style={styles.titleView}>
        <Text style={global_styles.pageTitle}>SELECT STUDENT</Text>
      </View>
      <View style={styles.listView}>
        <Item data={{name: "Name", section: "Section", status: "Stats"}} 
          textStyle={styles.titleText} 
          viewStyle={styles.titleRow} 
        />
        {data.map((item, index) => (
          <Item data={{...item, status: undefined}} key={index} />
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 64
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
  },
  titleRow: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    height: 31
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

export default Past_Attendance