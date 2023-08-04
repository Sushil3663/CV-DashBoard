import React from 'react'
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../Theme';
import { candidateData as initialcandidateData } from '../../data/dummyData';
import Header from '../../components/Header';

import DeleteIcon from '@mui/icons-material/Delete';
import { useReducer } from 'react';
import { reducer } from '../../components/Redux';
// import EditIcon from '@mui/icons-material/Edit';
// import SaveIcon from '@mui/icons-material/Save'; 

import { useNavigate } from 'react-router-dom'; 

const initialState = {
  item: initialcandidateData,
  
}

const Candidate = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();


  const [state, dispatch] = useReducer(reducer, initialState);


  const handleDelete = (id) => {
    return dispatch({
      type: "REMOVE",
      payload: id
    });
  };

  const handleRowClick = (params, event) => {
    const isDeleteButton = event.target.tagName === 'BUTTON' && event.target.getAttribute('data-operation') === 'delete';
    
    // If it's the delete button, prevent navigation
    if (isDeleteButton) {
      return;
    }
  
    // Handle row selection and set the selected applicant
    const applicantId = params.row.id;
    navigate(`/contact/${applicantId}`);
  };


  const columns = [
    // {
    //     field: "id", headerName: "ID"
    // },
    {
      field: "name", headerName: "Name", flex: 1, cellClassName: "name-column-cell",
    },
    {
      field: "email", headerName: "Email", flex: 1,
    },
    {
      field: "technology", headerName: "Technology", flex: 1,
    },
    {
      field: "phone", headerName: "Phone", flex: 1,
    },
    {
      field: "date", headerName: "Date", flex: 1,
    },
    {
      field: "operation",
      headerName: "Operation",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box display="flex" justifyContent="center">
           {/* {editRowId !== params.id ? (
              <button
                onClick={() => handleEdit(params.id)}
                style={{
                  background: 'green',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <EditIcon style={{ marginRight: '8px' }} />
              </button>
            ) : (
              <button
                onClick={() => handleSave(params.row)}
                style={{
                  background: 'blue',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <SaveIcon style={{ marginRight: '8px' }} />
              </button>
            )} */}
          <button
            onClick={() => handleDelete(params.id)}
            style={{
              background: 'red', 
              color: 'white',
              border: 'none',
              borderRadius: '4px', 
              padding: '8px 16px', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center', 
            }}
            data-operation="delete"
          >
            <DeleteIcon />
          </button>
        </Box>
        );
      },
    },
  ];



  return (
    <Box sx={{ background: `${colors.primary[400]} !important`, height: 'calc(100vh - 11.5vh)' }} >
      <Box>
        <Header title='Candidate' subtitle="Selected candidate list in Amnil" />
      </Box>
      <Box
        m="40px 0 0 0"
        height="71vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },

        }}
      >
        <DataGrid
          checkboxSelection
          rows={state.item}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={handleRowClick}
          rowsPerPageOptions={[10, 20, 50]}
          pagination

        />
      </Box>
    </Box>
  )
}

export default Candidate;