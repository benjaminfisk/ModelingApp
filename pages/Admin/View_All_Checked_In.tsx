import React from 'react'
import { View, Text, StyleSheet, StyleProp, TouchableOpacity } from 'react-native'
import { colors, global_styles } from '../../assets/styles'
import Header from '../../components/Header'

type Props = {
  navigation: any
}

const View_All_Checked_In: React.FC<Props> = (props) => {
  const { navigation } = props;

  type ItemProps = {
    data: StudentStatus
    viewStyle?: StyleProp<any>
    textStyle?: StyleProp<any>
  }
  const Item: React.FC<ItemProps> = ({data, viewStyle, textStyle}) => {
    const appliedView = viewStyle || styles.itemRow;
    const appliedText = textStyle || styles.itemText;
    return (
      <View style={appliedView}>
        <Text style={[appliedText, {flex: 2}]}>{data.name}</Text>
        <Text style={[appliedText, {flex: 1}]}>{data.section}</Text>
        {/* <Text>{data.status}</Text> */}
        <Text style={[appliedText, {flex: 1, textAlign: 'right'}]}>{data.time}</Text>
      </View>
    )
  }
  
  type StudentStatus = {
    name: string,
    status: string,
    section: string,
    time: string
  }
  const data: StudentStatus[] = [
    { name: 'John Doe', status: 'Checked In', section: 'Ensemble', time: '3:30 pm' },
    { name: 'Jane Doe', status: 'Checked In', section: 'Ensemble', time: '3:23 pm' },
    { name: 'John Smith', status: 'Checked In', section: 'Ensemble', time: '3:21 pm' },
    { name: 'Jane Smith', status: 'Checked In', section: 'Ensemble', time: '3:11 pm' },
    { name: 'John Doe', status: 'Checked In', section: 'Brass', time: '3:22 pm' },
    { name: 'Jane Doe', status: 'Checked In', section: 'Brass', time: '3:33 pm' },
    { name: 'John Smith', status: 'Checked In', section: 'Brass', time: '3:27 pm' },
    { name: 'Jane Smith', status: 'Checked In', section: 'Brass', time: '3:29 pm' },
    { name: 'John Doe', status: 'Checked In', section: 'Woodwinds', time: '3:31 pm' },
    { name: 'Jane Doe', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },
    { name: 'John Smith', status: 'Checked In', section: 'Woodwinds', time: '3:35 pm' },
    { name: 'Jane Smith', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },
    { name: 'John Doe', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },

  ]
  return (
    <View style={global_styles.container}>
      <Header title='VIEW ALL CHECKED-IN' />
      <View style={styles.titleView}>
        <Text style={global_styles.pageTitle}>CHECKED-IN STUDENTS</Text>
      </View>
      <View style={styles.listView}>
        <Item data={{name: "Name", section: "Section", status: "Status", time: "Time"}} 
          textStyle={styles.titleText} 
          viewStyle={styles.titleRow} 
        />
        {data.map((item, index) => (
          <Item data={item} key={index} />
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

export default View_All_Checked_In