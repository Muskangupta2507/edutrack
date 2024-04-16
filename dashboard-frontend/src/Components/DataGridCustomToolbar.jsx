import React from 'react'
import { Search } from '@mui/icons-material'
import { IconButton, TextField, InputAdornment } from '@mui/material'
import { 
    GridToolbarDensitySelector,
    GridToolbarContainer, 
    GridToolbarColumnsButton } 
    from '@mui/x-data-grid';

import FlexBetween from "./FlexBetween";

const DataGridCustomToolbar = () =>{
    return <GridToolbarContainer>
        <FlexBetween width="100%">
        <FlexBetween>
        <GridToolbarColumnsButton/>
        <GridToolbarDensitySelector/>
        </FlexBetween>
        <TextField 
        label ="Search..."
        sx={{mb: "0.5rem", width: "15rem"}}
        // onChange={(e) => setSearchInput(e.target.value)}
        // value={searchInput}
        InputProps={{
            endAdorment: (
                <InputAdornment position="end">
                    <IconButton
                    onClick={()=>{}}>
                        <Search/>
                    </IconButton>
                </InputAdornment>
            )
        }}
        />
        </FlexBetween>
    </GridToolbarContainer>;
};

export default DataGridCustomToolbar;