import { FOCUS_SUBJECT, FOCUS_SUBJECT_DETAIL } from '../constants';
import { RESEARCH } from '../data/research';
import { SUBJECT } from '../data/subject';
import useMainStore from '../store/useMainStore';
import styles from './styles/HologramScreen.module.css'

const HologramResearchPage = () => {
    return (
        <>
            <h1 className={styles.title}>Daftar Penelitian</h1>
            <ul className={styles.list}>
                {RESEARCH.map((research, index) => (
                    <li key={index}>{research.year} - {research.title}</li>
                ))}
            </ul>
        </>
    );
}

export default HologramResearchPage;