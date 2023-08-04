import { Box, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../Theme'
import Header from '../../components/Header';

const JobDomain = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box sx={{ background: `${colors.primary[400]} !important`, height: 'calc(100vh - 11.5vh)' }} >

            <Header title="Job Domain" subtitle=" Applicant Job Domain" />

        

        </Box>
    );
};

export default JobDomain;
