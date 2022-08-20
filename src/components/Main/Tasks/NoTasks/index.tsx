import styles from './styles.module.scss'
import notePad from '../../../../assets/notepad.png'

export function NoTasks() {
    return (
        <div className={styles.noTasks}>
            <img src={notePad} alt="Imagem de um bloco de notas" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}