'use client'
import React, {useState} from "react";
import {Pagination, Stack, useMediaQuery, useTheme} from "@mui/material";
import {useRouter} from 'next/navigation';


interface PaginatorProps {
    totalPages: number;
    //onPageChange: (page: number) => void;
}

export const Paginator: React.FC<PaginatorProps> = ({totalPages}) => {
    const [page, setPage] = useState(1);

    const theme = useTheme();

    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const router = useRouter();

    const handleChange = async (event: React.ChangeEvent<unknown>, newPage: number) => {
        router.push(`?page=${newPage}`);
        setPage(newPage);
        //onPageChange(value);
    };


    return (
        <Stack spacing={2} alignItems="center">
            <Pagination
                count={totalPages}
                page={page}
                onChange={handleChange}
                variant={'outlined'}
                shape={'rounded'}
                color="secondary"
                size="large"
                hidePrevButton={page === 1}
                hideNextButton={page === totalPages}
                siblingCount={isMediumScreen ? (isSmallScreen ? 1 : 2) : 4}
            />
        </Stack>
    );
};