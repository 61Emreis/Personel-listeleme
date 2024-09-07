import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import PersonnelList from './components/PersonnelList';
import PersonnelForm from './components/PersonnelForm';
import { Container, Box, Typography } from '@mui/material';
import { PersonnelProvider } from './context/PersonnelContext';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersonnelProvider>
        <Container>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" align="center">Personel Listesi</Typography>
            <PersonnelForm />
            <PersonnelList />
          </Box>
        </Container>
      </PersonnelProvider>
    </Provider>
  );
};

export default App;
	