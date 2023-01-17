import React, {FC} from 'react';
import {InputAdornment, TextField} from "@mui/material";
import search from '../img/vector.svg';

interface FilterItemProps {
    filter: string,
    setFilter: (text: string) => void;
}

const ArticleFilter: FC<FilterItemProps> = ({filter, setFilter}) => {

    return (
        <div>
            <p className='filterTitle'>Filter by keywords</p>
            <TextField
                variant="outlined"
                className='filterField'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder='Search..'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <img src={search} alt='' style={{marginRight: '10px'}}/>
                        </InputAdornment>
                    ),
                }}
            >
            </TextField>
        </div>
    );
};

export default ArticleFilter;