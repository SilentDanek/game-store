'use server'
import Image from 'next/image'
import Link from 'next/link'
import {Box, Card, CardActions, CardContent, CardMedia, Rating, Typography,} from "@mui/material";
import {DescriptionOverlay, HoverContainer} from "@/app/components/GameCard/GameCard.styles";
import {PriceDisplay} from "@/app/components/GameCard/PriceDisplay/PriceDisplay";

function GameCard({cardMedia, cardTitle, cardDescription, price, rating, discount}: GameCardProps) {
    const segment = cardTitle.toLowerCase().replace(/ /g, '-');

    return <Card sx={{ flex: '1 1 300px', maxWidth: '100%'}}>
        <Link href={`/game/${segment}`}>
            <HoverContainer>
                <DescriptionOverlay>
                    <Box m={5}>{cardDescription}</Box>
                </DescriptionOverlay>
                <CardMedia>
                    <Image src={cardMedia} alt={cardTitle} width={400} height={200} layout={"responsive"}/>
                </CardMedia>
            </HoverContainer>
            <CardContent sx={{
                '&:last-child': {
                    paddingBottom: 0
                }
            }}>
                <Typography variant="h6">
                    {cardTitle}
                </Typography>
            </CardContent>
        </Link>
        <CardActions sx={{justifyContent: 'space-between', alignItems: 'flex-start', padding: 2, paddingTop: 0}}>
            <Rating value={rating} precision={0.1} readOnly/>
            <PriceDisplay price={price} discount={discount}/>
        </CardActions>
    </Card>
}

type GameCardProps = {
    cardMedia: string;
    cardTitle: string;
    cardDescription: string;
    price: number;
    rating: number;
    discount?: {
        "discountedPrice": number;
        "percentage": number;
    } | null;
}

export default GameCard;