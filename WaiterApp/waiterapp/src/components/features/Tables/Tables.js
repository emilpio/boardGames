import styles from './Tables.module.scss';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/TableRedux';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

const Tables = (props) => {
  const tables = useSelector(getAllTables);
  return (
    <section className={styles.tables}>
      <h2 className={styles.heading}>Tables</h2>
      {tables.map((table) => (
        <Link
          key={table.id}
          to={'table/' + table.id}
          className={styles.tableLink}>
          <h3>TABLE {table.id}</h3>
          <p>
            Status:<b> {table.status}</b>
          </p>

          <p>
            People:<b> {table.peopleAmount}</b>
          </p>
          <p>
            MaxPeople:<b> {table.maxPeopleAmount}</b>
          </p>
          <p>
            Bill:<b> {table.bill}</b>
          </p>
          <Button>Show more </Button>
        </Link>
      ))}
    </section>
  );
};

export default Tables;
