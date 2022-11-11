import React from 'react'
import { View, Text, StyleSheet, StyleProp, TouchableOpacity, Modal, Image, SafeAreaView, Pressable, TouchableWithoutFeedback } from 'react-native'
import { colors, global_styles } from '../../assets/styles'
import { StudentType } from '../../assets/studentRoster'
import Header from '../../components/Header'
import CometSmallButton from '../../components/CometSmallButton'
import FormModal, {FormData} from '../../components/FormModal'
import ChoiceModal from '../../components/ChoiceModal'
import deleteBin from '../../assets/deleteBin.png'
import editPencil from '../../assets/editPencil.png'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { removeStudent, addStudent, updateStudent } from '../../redux/studentSlice'

type ItemProps = {
  data: StudentType
  viewStyle?: StyleProp<any>
  textStyle?: StyleProp<any>
  showButtons?: boolean
  editClick?: (data: StudentType) => void
  deleteClick?: (data: StudentType)  => void
}
const Item: React.FC<ItemProps> = ({data, viewStyle, textStyle, showButtons, deleteClick, editClick}) => {
  const appliedView = viewStyle || styles.itemRow;
  const appliedText = textStyle || styles.itemText;

  
  return (
    <View style={appliedView}>
      <View style={{flex: 0, display: showButtons ? 'flex': 'none', flexDirection: 'row', paddingRight: 5}}>
        <TouchableOpacity onPress={deleteClick ? () => deleteClick(data): undefined}>
          <Image source={deleteBin} />
          </TouchableOpacity>
        <TouchableOpacity onPress={editClick ? () => editClick(data): undefined} style={{marginLeft:5}}>
          <Image source={editPencil} />
          </TouchableOpacity>
      </View>
      <Text style={[appliedText, {flex: 3}]}>{data.name}</Text>
      <Text style={[appliedText, {flex: 1, textAlign: 'left'}]}>{data.section}</Text>
    </View>
  )
}

type Props = {
  navigation: any
}

const Roster: React.FC<Props> = ({navigation}) => {
  const [addButtonVisible, setAddButtonVisible] = React.useState(false);
  const [adding, setAdding] = React.useState(false);
  const [editing, setEditing] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);
  const [selectedStudent, setSelectedStudent] = React.useState<StudentType | undefined>(undefined);

  const data = useAppSelector(state => state.students.students);
  const dispatch = useAppDispatch();

  const FormToStudent = (data: FormData) => {
    const student: StudentType = {
      id: data.studentID,
      name: data.name,
      section: data.section
    }
    return student;
  }

  return (
    <View>
      {/* Adding Student Modal */}
      <Modal 
        visible={adding} 
        animationType='fade'
        onRequestClose={() => setAdding(false)}
        transparent={true}
        >
          <FormModal title='ADD STUDENT'
            onSubmit={(data) => {
              setAdding(false)
              const student = FormToStudent(data)
              dispatch(addStudent(student))
              console.log("Added Student: ", student)
            }}
            onCancel={() => setAdding(false)}
            />
      </Modal>
      {/* Editing Student Modal */}
      <Modal
        visible={editing}
        animationType='fade'
        onRequestClose={() => setEditing(false)}
        transparent={true}
      >
        <FormModal title='EDIT STUDENT'
          initialName={selectedStudent?.name}
          initialSection={selectedStudent?.section}
          initialStudentID={selectedStudent?.id}
          onSubmit={(data) => {
            setEditing(false)
            const student = FormToStudent(data)
            dispatch(updateStudent(student))
            console.log("Edited Student: ", student)
          }}
          onCancel={() => setEditing(false)}
        />
      </Modal>
      {/* Deleting Student Modal */}
      <Modal
        visible={deleting}
        animationType='fade'
        onRequestClose={() => setDeleting(false)}
        transparent={true}
      >
        <ChoiceModal title='REMOVE STUDENT' 
          content={'Are you sure you want to delete ' + selectedStudent?.name + ' (' + selectedStudent?.id + ')?'}
          onYes={() => { 
            setDeleting(false)
            console.log('Delete student ', selectedStudent)
            if (selectedStudent) {
              dispatch(removeStudent(selectedStudent.id))
            }
          }}
          onNo={() => { setDeleting(false); console.log('Cancel delete on ', selectedStudent?.name)}}
        />
      </Modal>
      

      <Header title='ROSTER' />
      <View style={global_styles.container}>
        <View style={styles.editSaveRow}>
          <CometSmallButton variant='dark' onPress={() => setAddButtonVisible((prev) => !prev)}>
            {addButtonVisible ? "SAVE CHANGES" : "EDIT ROSTER"}
          </CometSmallButton>
          {addButtonVisible && <CometSmallButton variant='light' onPress={() => setAdding(true)}>ADD STUDENT</CometSmallButton>}
        </View>
        <View style={styles.titleView}>
          <Text style={global_styles.pageTitle}>ROSTER</Text>
        </View>
        <View style={styles.listView}>
          <Item data={{id: '0', name: "Name", section: "Section", status: "Status", time: "Time"}} 
            textStyle={styles.titleText} 
            viewStyle={styles.titleRow} 
          />
          {data.map((item) => (
            <Item data={item} key={item.id} 
            showButtons={addButtonVisible} 
            editClick={
              () => {
                setEditing(true)
                setSelectedStudent(item)
              }
            } 
            deleteClick={
              () => {
                setDeleting(true)
                setSelectedStudent(item)
              }
            }/>
          ))}
        </View>
        <TouchableOpacity style={styles.loadMoreButton}>
          <Text>Load More</Text>
        </TouchableOpacity>
      </View>
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
  },
})

export default Roster