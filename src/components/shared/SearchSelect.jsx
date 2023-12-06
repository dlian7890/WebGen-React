import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import CheckIcon from '@mui/icons-material/Check';

const SearchSelect = (options, label) => {
    return (
        // <Autocomplete
        //     disablePortal
        //     options={options}
        //     sx={{ width: 300 }}
        //     renderInput={(params) => <TextField {...params} label={label} />}
        // />
        <Autocomplete
            sx={{ m: 1, width: 500 }}
            multiple
            options={options}
            getOptionLabel={(option) => option}
            disableCloseOnSelect
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                />
            )}
            renderOption={(props, option, { selected }) => (
                <MenuItem
                    {...props}
                    key={option}
                    value={option}
                    sx={{ justifyContent: 'space-between' }}
                >
                    {option}
                    {selected ? <CheckIcon color='info' /> : null}
                </MenuItem>
            )}
        />
    );
};

export default SearchSelect;
