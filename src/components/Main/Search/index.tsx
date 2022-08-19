import styles from './styles.module.scss'
import { PlusCircle } from 'phosphor-react'

export function Search() {
    return (
        <form className={styles.search}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type='submit'>
                Criar <PlusCircle size={20}/>
            </button>
        </form>
    )
}