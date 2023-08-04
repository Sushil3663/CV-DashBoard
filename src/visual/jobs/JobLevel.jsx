import React from 'react';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../../Theme'
import Header from '../../components/Header';

const JobLevel = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box sx={{ background: `${colors.primary[400]} !important`, height: 'calc(100vh - 11.5vh)' }} >

            <Header title="Job Level" subtitle=" Applicant Job Level" />

        

        </Box>
    );
};


export default JobLevel