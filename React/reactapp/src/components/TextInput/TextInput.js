import styles from './TextInput.module.scss';

const TextInput = props => {
    return ( //trzeba dodawać nawiasy czy nie?
    <input className={styles.input} type="text" placeholder={props.placeholder} />
    )
    
};

export default TextInput;