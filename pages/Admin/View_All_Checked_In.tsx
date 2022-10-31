import React from 'react'
import { View, Text, StyleSheet, FlatList, StyleProp, ViewProps, TextProps } from 'react-native'
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
        <Text style={[appliedText, {flex: 1}]}>{data.time}</Text>
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
    { name: 'Jane Doe', status: 'Checked In', section: 'Ensemble', time: '3:30 pm' },
    { name: 'John Smith', status: 'Checked In', section: 'Ensemble', time: '3:30 pm' },
    { name: 'Jane Smith', status: 'Checked In', section: 'Ensemble', time: '3:30 pm' },
    { name: 'John Doe', status: 'Checked In', section: 'Brass', time: '3:30 pm' },
    { name: 'Jane Doe', status: 'Checked In', section: 'Brass', time: '3:30 pm' },
    { name: 'John Smith', status: 'Checked In', section: 'Brass', time: '3:30 pm' },
    { name: 'Jane Smith', status: 'Checked In', section: 'Brass', time: '3:30 pm' },
    { name: 'John Doe', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },
    { name: 'Jane Doe', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },
    { name: 'John Smith', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },
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
    </View>
  )
}

const styles = StyleSheet.create({
  titleView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 86
  },
  listView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 86,
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
  }
})

export default View_All_Checked_In