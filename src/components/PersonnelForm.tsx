import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPersonnel } from '../redux/personnelSlice';
import api from '../services/api';
import { Button, TextField, Box, Typography } from '@mui/material';

const PersonnelForm: React.FC = () => {
  const [isim, setIsim] = useState('');
  const [soyisim, setSoyisim] = useState('');
  const [yas, setYas] = useState('');
  const [konum, setKonum] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const yeniPersonel = { 
      id: Date.now(), 
      firstName: isim, 
      lastName: soyisim, 
      age: parseInt(yas, 10), 
      position: konum, 
      email 
    };
    await api.post('/personnel', yeniPersonel);
    dispatch(addPersonnel(yeniPersonel));
    setIsim('');
    setSoyisim('');
    setYas('');
    setKonum('');
    setEmail('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6">Personel Ekle</Typography>
      <TextField
        label="İsim"
        value={isim}
        onChange={(e) => setIsim(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Soyisim"
        value={soyisim}
        onChange={(e) => setSoyisim(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Yaş"
        value={yas}
        onChange={(e) => setYas(e.target.value)}
        fullWidth
        required
        type="number"
        margin="normal"
      />
      <TextField
        label="Konum"
        value={konum}
        onChange={(e) => setKonum(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="E-posta"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Ekle
      </Button>
    </Box>
  );
};

export default PersonnelForm;
