import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "task 2",
        description: "Task 2 description",
        completed: false
    }
]

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: { // main functions
        addTask: (state, action) => {
            /* action.payload => contenido
            action.type => nombre de la accion */
            return [...state,action.payload]
            // state.push(action.payload)
        },
        updateTask: (state,action) => {
            const {id,title, description} = action.payload
            const foundTask = state.find(task => task.id === id)
            if (foundTask) {
                foundTask.title = title
                foundTask.description = description
            }
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound) {
                state.splice(state.indexOf(taskFound),1)
            }
        }
    }
})

export const {addTask, deleteTask, updateTask} = taskSlice.actions
export default taskSlice.reducer