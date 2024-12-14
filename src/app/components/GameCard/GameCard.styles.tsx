'use client';
import {styled} from "@mui/system";
import {Box, Card, CardActions} from "@mui/material";

export const HoverContainer =  styled(Box)(() => ({
    position: 'relative',
    '&:hover :not(img)': {
        opacity: 1,
    },
    '&:hover img': {
        transition: 'filter 2s',
        filter: 'blur(5px)',
    },
}));

export const DescriptionOverlay = styled(Box)(() => ({
    width:'100%',
    height:'100%',
    color: 'white',
    position: 'absolute',
    alignItems: 'center',
    opacity: 0,
    transition: '1s opacity',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2
}));

export const GameCardStyled = styled(Card)(() => ({
    flex: '1 1 300px',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}));

export const GameCardActions = styled(CardActions)(() => ({
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 16,
    paddingTop: 0
}));