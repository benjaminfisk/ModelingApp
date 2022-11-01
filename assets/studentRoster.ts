
  export type StudentType = {
    name: string,
    status?: string,
    section: string,
    time?: string
  }
  export const students: StudentType[] = [
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
    { name: 'Jane Doe', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },
    { name: 'John Smith', status: 'Checked In', section: 'Woodwinds', time: '3:35 pm' },
    { name: 'Jane Smith', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },
    { name: 'John Doe', status: 'Checked In', section: 'Woodwinds', time: '3:30 pm' },
  ]