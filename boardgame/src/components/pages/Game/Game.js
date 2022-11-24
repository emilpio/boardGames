import styles from './Table.module.scss';
import TableForm from '../TableForm/TableForm';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getTablesById, getTablesId } from '../../../redux/TableRedux';

const Game = () => {
  const { id } = useParams();

  // console.log(tableId, 'listid');
  const gameData = useSelector((state) => getTablesById(state, id));

  // console.log(tableData, 'tabeldata');

  return (
    <div>
      <TableForm {...gameData} />
    </div>
  );
};

export default Game;
