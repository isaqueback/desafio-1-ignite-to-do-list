import styles from './styles.module.scss'

export function Tasks() {
    return (
        <div className={styles.tasks}>
            <header>
                <div>
                    <span>Tarefas criadas</span>
                    <span>0</span>
                </div>

                <div>
                    <span>Concluídas</span>
                    <span>0</span>
                </div>
            </header>

            <div className='tasksList'>
                Tarefas
            </div>
        </div>
    )
}