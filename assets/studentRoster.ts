
  export type StudentType = {
    id: number;
    name: string,
    status?: string,
    section: string,
    time?: string
  }
  export const students: StudentType[] = [
    
    { id: 0, name: 'John Doe', status: 'Checked In', section: 'Ensemble', time: '3:30 pm' },
    { id: 1, name: 'Jane Doe', status: 'Checked In', section: 'Ensemble', time: '3:23 pm' },
    { id: 2, name: 'John Smith', status: 'Checked In', section: 'Ensemble', time: '3:21 pm' },
    { id: 3, name: 'Jane Smith', status: 'Checked In', section: 'Ensemble', time: '3:11 pm' },
    { id: 4, name: 'John Doe', status: 'Checked In', section: 'Brass', time: '3:22 pm' },
    { id: 5, name: 'Jane Doe', status: 'Checked In', section: 'Brass', time: '3:33 pm' },
    { id: 6, name: 'John Smith', status: 'Checked In', section: 'Brass', time: '3:27 pm' },
    { id: 7, name: 'Jane Smith', status: 'Checked In', section: 'Brass', time: '3:29 pm' },
    { id: 8, name: 'John Doe', status: 'Checked In', section: 'Woodwinds', time: '3:31 pm' },
    { id: 9, name: 'Jane Doe', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },
    { id: 10, name: 'John Smith', status: 'Checked In', section: 'Woodwinds', time: '3:35 pm' },
    { id: 11, name: 'Jane Smith', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },
    { id: 12, name: 'Jane Doe', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },
    { id: 13, name: 'John Smith', status: 'Checked In', section: 'Woodwinds', time: '3:35 pm' },
    { id: 14, name: 'Jane Smith', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },
    { id: 15, name: 'John Doe', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },
  ]
  export type AttendanceType = {
    date: string,
    time: string,
  }
  
  export const sampleAttendance: AttendanceType[] = [
    { date: '10/1/2020', time: '3:30 pm' },
    { date: '10/2/2020', time: '3:30 pm' },
    { date: '10/3/2020', time: '3:30 pm' },
    { date: '10/4/2020', time: '3:30 pm' },
    { date: '10/5/2020', time: '3:30 pm' },
    { date: '10/6/2020', time: '3:30 pm' },
    { date: '10/7/2020', time: '3:30 pm' },
    { date: '10/8/2020', time: '3:30 pm' },
    { date: '10/9/2020', time: '3:30 pm' },
    { date: '10/10/2020', time: '3:30 pm' },
  ]
