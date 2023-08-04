// import React,{useState} from 'react'
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../Theme';
import { applicantsData as initialApplicantsData  } from '../../data/dummyData';
import Header from '../../components/Header';

import DeleteIcon from '@mui/icons-material/Delete';
import { useReducer } from 'react';
import { reducer } from '../../components/Redux';
// import EditIcon from '@mui/icons-material/Edit';
// import SaveIcon from '@mui/icons-material/Save'; 

import { useNavigate } from 'react-router-dom'; 

const initialState = {
  item: initialApplicantsData,
  
}

const Applicants = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

    const theme = useTheme()
    const colors = tokens(theme.palette.mode);

    const navigate = useNavigate();


    // const [applicantData, setApplicantData] = useState(applicantsData);
    // const [editRowId, setEditRowId] = useState(null);

    // const handleEdit = (id) => {
    //   setEditRowId(id);
    // };

    // const handleSave = (updatedRowData) => {
    //   // Find the index of the row to update
    //   const rowIndex = applicantsData.findIndex((applicant) => applicant.id === updatedRowData.id);
    //   // Create a copy of the applicantsData array to modify
    //   const updatedApplicantsData = [...applicantsData];
    //   // Update the row with the new data
    //   updatedApplicantsData[rowIndex] = updatedRowData;
    //   // Update the applicantsData with the modified array
    //   setApplicantData(updatedApplicantsData);
    //   // Reset the editRowId to exit the edit mode
    //   setEditRowId(null);
    // };
  

    // const handleDelete = (id) => {
    //   const updatedApplicantsData = applicantData.filter((applicant) => applicant.id !== id);
    //   setApplicantData(updatedApplicantsData);
    // };
    const handleDelete = (id) => {
      return dispatch({
        type: "REMOVE",
        payload: id
      });
    };

const columns = [
   
    {
        field: "name", headerName: "Name",flex:1,cellClassName: "name-column-cell",
    },
    {
        field: "email", headerName: "Email",flex:1,
    },
    {
        field: "phone", headerName: "Phone",flex:1,
    },
    {
        field: "reference", headerName: "Reference",flex:1,
    },
    // {
    //     field: "technology", headerName: "Technology",flex:1, renderCell: ({technology})=>{
    //         return(
    //             <Box
    //             width="40%" m={"0 auto"} p="5px" display={"flex"} justifyContent={"center"} backgroundColor={
    //                 technology === "react" ? colors.blueAccent[400] : colors.blueAccent[500]} borderRadius={"4px"} >
    //                     { technology === "Dot Net" && <FiberManualRecordIcon />}
    //                     { technology === "React" && <AcUnitOutlinedIcon />}
    //                     { technology === "QA" && <BugReportOutlinedIcon />}
                        
    //                 </Box>
    //         )
    //     },
    // },
    {
        field: "technology", headerName: "Technology",flex:1,
    },
    {
        field: "level", headerName: "Level",flex:1,
    },
    {
        field: "salary", headerName: "Salary",flex:1,
    },
    {
        field: "experience", headerName: "Experience",flex:1,
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
            data-operation="delete" // Add the data-operation attribute
          >
            <DeleteIcon />
          </button>
        </Box>
        );
      },
    },
  ];

  const handleRowClick = (params, event) => {
    // Check if the click target is the delete button
    const isDeleteButton = event.target.tagName === 'BUTTON' && event.target.getAttribute('data-operation') === 'delete';
    
    // If it's the delete button, prevent navigation
    if (isDeleteButton) {
      return;
    }
  
    // Handle row selection and set the selected applicant
    const applicantId = params.row.id;
    navigate(`/applicants/${applicantId}`);
  };
  

  return (
    <Box sx={{background: `${colors.primary[400]} !important`}}>
        <Header title='Applicants' subtitle="Applied applicants list in Amnil" />

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
        }}
      >
           <DataGrid
          rows={state.item}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          onRowClick={handleRowClick}
          rowsPerPageOptions={[10, 20, 50]}
          pagination 
        />
      </Box>
    </Box>
  )
}

export default Applicants