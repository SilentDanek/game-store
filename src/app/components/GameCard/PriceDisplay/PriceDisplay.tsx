import {FC} from "react";
import {Box, Button, Chip, Typography} from "@mui/material";

export const PriceDisplay: FC<PriceDisplayProps> = ({price, discount}) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start'}}>
            {discount && (
                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                    <Typography
                        variant="body2"
                        sx={{
                            textDecoration: 'line-through',
                            color: 'text.secondary',
                            fontSize: '1rem',
                        }}
                    >
                        ${price.toFixed(2)}
                    </Typography>
                    <Chip
                        label={`-${discount.percentage}%`}
                        color="error"
                        size="small"
                        sx={{
                            fontWeight: 'bold',
                        }}
                    />
                </Box>
            )}

            <Button variant="contained" color="primary" size="large" sx={{alignSelf: 'stretch'}}>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: discount ? 'bold' : 'normal',
                    }}
                >
                    ${discount ? discount.discountedPrice.toFixed(2) : price.toFixed(2)}
                </Typography>
            </Button>
        </Box>
    );
};

interface PriceDisplayProps {
    price: number;
    discount?: {
        discountedPrice: number;
        percentage: number;
    } | null;
}