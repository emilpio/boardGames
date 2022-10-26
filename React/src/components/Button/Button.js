import styles from './Button.module.scss';

const Button = prop => {
  return (
  <button className={styles.button}>{prop.children}</button>
  )
  
};

export default Button;

