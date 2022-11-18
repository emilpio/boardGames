const initialState = {
  tables: [
    {
      id: '1',
      tableId: '1',
      status: 'Busy',
      peopleAmount: '2',
      maxPeopleAmount: '4',
      bill: '20',
    },
    {
      id: '2',
      tableId: '2',
      status: 'Free',
      peopleAmount: '0',
      maxPeopleAmount: '3',
      bill: '0',
    },
    {
      id: '3',
      tableId: '3',
      status: 'Busy',
      peopleAmount: '2',
      maxPeopleAmount: '3',
      bill: '45',
    },
    {
      id: '4',
      tableId: '4',
      status: 'Cleaning',
      peopleAmount: '0',
      maxPeopleAmount: '3',
      bill: '0',
    },
    {
      id: '5',
      tableId: '5',
      status: 'Cleaning',
      peopleAmount: '0',
      maxPeopleAmount: '3',
      bill: '0',
    },
  ],
};

export default initialState;
