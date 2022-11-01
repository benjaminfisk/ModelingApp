import React from 'react'
import { View, Text, StyleSheet, StyleProp, TouchableOpacity, Pressable, Image } from 'react-native'
import { colors, global_styles } from '../../assets/styles'
import { students, StudentType } from '../../assets/studentRoster'
import Header from '../../components/Header'
import CometSmallButton from '../../components/CometSmallButton'
import deleteBin from '../../assets/deleteBin.png'
import editPencil from '../../assets/editPencil.png'

type Props = {
  navigation: any
}

const Roster: React.FC<Props> = (props) => {
  type ItemProps = {
    data: StudentType
    viewStyle?: StyleProp<any>
    textStyle?: StyleProp<any>
    showButtons?: boolean
  }
  const Item: React.FC<ItemProps> = ({data, viewStyle, textStyle, showButtons}) => {
    const appliedView = viewStyle || styles.itemRow;
    const appliedText = textStyle || styles.itemText;
  
    
    return (
      <View style={appliedView}>
        {showButtons && 
          <View style={{flex: 0, display: 'flex', flexDirection: 'row', paddingRight: 5}}>
            <TouchableOpacity onPress={() => console.log('Edit')} >
              <Image source={deleteBin} />
              </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Remove')} style={{marginLeft:5}}>
              <Image source={editPencil} />
              </TouchableOpacity>
          </View>
        }
        <Text style={[appliedText, {flex: 3}]}>{data.name}</Text>
        <Text style={[appliedText, {flex: 1, textAlign: 'left'}]}>{data.section}</Text>
      </View>
    )
  }

  const { navigation } = props;
  const [editing, setEditing] = React.useState(false);

  const data = students.filter((student) => student.status === 'Checked In');
  
  return (
    <View style={global_styles.container}>
      <Header title='ROSTER' />
      <View style={styles.editSaveRow}>
        <CometSmallButton variant='dark' onPress={() => setEditing((prev) => !prev)}>{editing ? "SAVE CHANGES" : "EDIT ROSTER"}</CometSmallButton>
        {editing && <CometSmallButton variant='light'>ADD STUDENT</CometSmallButton>}
      </View>
      <View style={styles.titleView}>
        <Text style={global_styles.pageTitle}>ROSTER</Text>
      </View>
      <View style={styles.listView}>
        <Item data={{name: "Name", section: "Section", status: "Status", time: "Time"}} 
          textStyle={styles.titleText} 
          viewStyle={styles.titleRow} 
        />
        {data.map((item, index) => (
          <Item data={item} key={index} showButtons={editing} />
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
    marginTop: 32
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
  },
  editSaveRow: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 16,
  },
  iconImage: {
    height: 16,
    width: 16,
  }
})

export default Roster