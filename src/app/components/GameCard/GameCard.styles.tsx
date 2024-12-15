'use client';
import {styled} from "@mui/system";
import {
    Box,
    Card,
    CardActions, CardActionsProps,
    CardContent,
    CardContentProps,
    CardMedia,
    CardMediaProps,
    CardProps
} from "@mui/material";

export const HoverContainer =  styled(CardMedia)<CardMediaProps>(() => ({
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
    boxSizing: 'border-box',
    color: 'white',
    position: 'absolute',
    alignItems: 'center',
    padding: 12,
    opacity: 0,
    transition: '1s opacity',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2
}));

export const GameCardStyled = styled(Card)<CardProps>(() => ({
    flex: '1 1 300px',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}));

export const GameCardActions = styled(CardActions)<CardActionsProps>(() => ({
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 16,
    paddingTop: 0
}));

export const GameCardContent = styled(CardContent)<CardContentProps>(() => ({
    '& :last-child': {
        margin: 0
    }
}));