import Image from 'next/image'
import Link from 'next/link'
import { Rating, Typography } from "@mui/material";
import {
    DescriptionOverlay,
    GameCardActions, GameCardContent,
    GameCardStyled,
    HoverContainer
} from "@/app/components/GameCard/GameCard.styles";
import {PriceDisplay} from "@/app/components/GameCard/PriceDisplay/PriceDisplay";
import {Genres} from "@/app/components/GameCard/Genres/Genres";

export function GameCard({cardMedia, cardTitle, cardDescription, price, rating, tags, discount}: GameCardProps) {
    const segment = cardTitle.toLowerCase().replace(/ /g, '-');

    return <GameCardStyled component="article">
        <HoverContainer component="header">
            <Link href={`/game/${segment}`} data-testid="game-link">
                <DescriptionOverlay>
                    <Typography
                        sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                        }}
                    >
                        {cardDescription}
                    </Typography>
                </DescriptionOverlay>
                <Image src={cardMedia} alt={cardTitle} width={400} height={200} layout={"responsive"}/>
            </Link>
        </HoverContainer>

        <GameCardContent component={'main'}>
            <Link href={`/game/${segment}`}>
                <Typography variant="h6">
                    {cardTitle}
                </Typography>
            </Link>

            <Rating value={rating} precision={0.1} readOnly/>
            <Genres tags={tags}/>
        </GameCardContent>

        <GameCardActions>
            <PriceDisplay price={price} discount={discount}/>
        </GameCardActions>
    </GameCardStyled>
}

type GameCardProps = {
    cardMedia: string;
    cardTitle: string;
    cardDescription: string;
    price: number;
    rating: number;
    tags: string[];
    discount?: {
        "discountedPrice": number;
        "percentage": number;
    } | null;
}