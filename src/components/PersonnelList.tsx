import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setPersonnel } from '../redux/personnelSlice';
import api from '../services/api';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const PersonnelList: React.FC = () => {
  const dispatch = useDispatch();
  const personelListesi = useSelector((state: RootState) => state.personnel.list);

  useEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const response = await api.get('/personnel');
        dispatch(setPersonnel(response.data));
      } catch (error) {
        console.error('Personel verileri alınırken hata oluştu:', error);
      }
    };

    fetchPersonnel();
  }, [dispatch]);

  return (
    <div>
      <Typography variant="h6" component="h2">
        Personel Listesi
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>İsim</TableCell>
              <TableCell>Soyisim</TableCell>
              <TableCell>Yaş</TableCell>
              <TableCell>Konum</TableCell>
              <TableCell>E-posta</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {personelListesi.map(person => (
              <TableRow key={person.id}>
                <TableCell>{person.firstName}</TableCell>
                <TableCell>{person.lastName}</TableCell>
                <TableCell>{person.age}</TableCell>
                <TableCell>{person.position}</TableCell>
                <TableCell>{person.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PersonnelList;
