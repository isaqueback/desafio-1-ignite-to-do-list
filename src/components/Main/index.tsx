import { Search } from './Search'
import { Tasks } from './Tasks'
import { useState } from 'react'

import styles from './styles.module.scss'

interface Task {
    id: number;
    content: string;
    isChecked: boolean;
}

export function Main() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [countId, setCountId] = useState(0)

    function deleteTask(taskId: number) {
        setTasks((tasks) => {
            return tasks.filter((task) => {
                return task.id !== taskId
            })
        })
    }

    function addTask(content: string) {
        setTasks((tasks) => {
            setCountId((countId) => countId + 1)

            const newTask = {
                id: countId,
                content,
                isChecked: false
            }

            return [newTask, ...tasks]
        })
    }

    function toggleChecking(id: number) {
        setTasks(tasks => {
            let changedTasks: Task[] = []

            tasks.forEach(task => {
                task.id === id ? changedTasks.push({...task, isChecked: !task.isChecked}) : changedTasks.push(task)
            })

            return changedTasks
        })

    }

    return (
        <main className={styles.principal}>
            <Search onAddTask={addTask} />
            <Tasks tasks={tasks} deleteTask={deleteTask} toggleChecking={toggleChecking} />
        </main>
    )
}