import styles from './styles.module.scss'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface SearchProps {
    onAddTask: (content: string) => void
}

export function Search({ onAddTask }: SearchProps) {
    const [newTask, setNewTask] = useState('')

    const isNewTaskEmpty = newTask.length === 0 ? true : false
    const isNewTaskLong = newTask.length > 151 ? true : false

    function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
        setNewTask(e.target.value)
    }

    function handleSubmitForm(e: FormEvent) {
        e.preventDefault()

        if (!isNewTaskEmpty && !isNewTaskLong) {
            onAddTask(newTask)

            setNewTask('')
        }
    }

    return (
        <form className={styles.search} onSubmit={handleSubmitForm}>
            <input type="text" placeholder='Adicione uma nova tarefa' required value={newTask} onChange={handleNewTaskChange} />
            <button className={isNewTaskEmpty ? `${styles.submitButton} ${styles.empty}` : styles.submitButton} type='submit'>
                Criar <PlusCircle size={20} />
            </button>
        </form>
    )
}