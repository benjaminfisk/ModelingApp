import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { students, StudentType } from '../assets/studentRoster'; 

const initialState = {
    students: students,
}
const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        addStudent: (state, action: PayloadAction<StudentType>) => {
            state.students.push(action.payload);
        },
        removeStudent: (state, action: PayloadAction<StudentType>) => {
            state.students = state.students.filter(student => student.id !== action.payload.id);
        },
        updateStudent: (state, action) => {
            const index = state.students.findIndex(student => student.id === action.payload.id);
            state.students[index] = action.payload;
        }
    }
});

export const { addStudent, removeStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;