import styles from './Column.module.scss';

const Column = prop => {
  return (
  <article className={styles.column}>
    
    <h2 className={styles.title}>
    <span className={styles.icon + ' fa fa-' + prop.icon} />
      {prop.title}
      </h2></article>
  
  )};

export default Column;
