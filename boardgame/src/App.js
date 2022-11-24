import { useState } from 'react';
import GameForm from './components/features/GameForm/GameForm';
import GamesList from './components/features/GamesList/GamesList';
import shortid from 'shortid';
import Hero from './components/pages/Hero/Hero';
import styles from './components/views/Container/Container.module.scss';
import Container from './components/views/Container/Container';
// import Tables from './components/features/Tables/Tables';
// import Table from './components/features/Table/Table';
// import Footer from './components/views/Footer/Footer';
// import { Routes, Route } from 'react-router-dom';
import Header from './components/pages/Header/Header';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchTables } from './redux/TableRedux';

const App = () => {
  return (
    <Container className={styles.Container}>
      <Header />
      <Hero />
      <GameForm />
      <GamesList />
    </Container>
  );
};

export default App;
