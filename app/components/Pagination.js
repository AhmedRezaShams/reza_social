'use client';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({ totalPages, page, onChange }) {
    return (
        <Stack spacing={2}>
            <Pagination count={totalPages} page={page} onChange={onChange} shape="rounded" sx={{
                '& .MuiPaginationItem-root': {
                    color: 'white',
                    borderColor: 'white',
                },
                '& .MuiPaginationItem-root:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                '& .Mui-selected': {
                    backgroundColor: 'white',
                    color: 'black',
                    borderColor: 'black',
                },
                '& .Mui-selected:hover': {
                    backgroundColor: '#f0f0f0',
                },
            }} />
        </Stack>
    );
}