"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import MuiDemoRows from '@/app/organisms/rows/mui-demo-rows';
import MuiDemoColumns from '@/app/organisms/columns/mui-demo-columns';

// const columns: 

// const rows = ts로 data 이동

export default function DataGridDemo() {
  return ( // 리액트의 객체
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={MuiDemoRows()}
        columns={MuiDemoColumns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export function Test(){}