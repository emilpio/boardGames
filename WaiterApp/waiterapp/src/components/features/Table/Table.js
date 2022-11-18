import styles from './Table.module.scss';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addColumn } from '../../redux/columnsReducer';
import TableForm from '../TableForm/TableForm';
// import { getAllTables } from '../../../redux/TableRedux';
import { useSelector } from 'react-redux';
// import { getTablesById } from '../../../redux/TableRedux';
import { useParams, Navigate } from 'react-router-dom';
import { getTablesById, getTablesId } from '../../../redux/TableRedux';

// const Table = () => {
// const { tableId } = useParams();

// const tables = useSelector((state) => getTablesById(state, tableId));

// const tableData = useSelector((state) => getTablesById(state, tableId));
// if (!tableData) return <Navigate to='/' />;

// console.log(tableData, 'tabelData');
// console.log(tables, 'tables');
// console.log(tableToID, 'tabletoid');
//   const tables = useSelector(getAllTables);
//   return <div className={styles.list}></div>;
// };

// export default Table;
const Table = ({ id, status, peopleAmount, bill }) => {
  const { tableId } = useParams();

  // console.log(tableId, 'listid');
  const tableData = useSelector((state) => getTablesById(state, tableId));

  // console.log(tableData, 'tabeldata');

  return (
    <div>
      <TableForm {...tableData} />
    </div>
  );
};

export default Table;
