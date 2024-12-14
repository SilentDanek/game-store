import GameCard from "@/app/components/GameCard/GameCard";
import {Box, Grid2, Typography} from "@mui/material";

export default function Home() {
    const cardDescription = 'You are Geralt of Rivia, an assassin of monsters. You are travelling through a world where war rages and monsters lurk at every turn. You have to fulfil an order and find Ciri, the Child of Destiny, a living weapon that can change the face of the world.'
    const cardTitle = 'The Witcher 3: Wild Hunt Game of the Year Edition'
    return (

        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Games Collection
            </Typography>
            <Grid2  container spacing={4}>
                <GameCard cardMedia={'/Witcher_3.jpg'}
                          cardDescription={cardDescription}
                          cardTitle={cardTitle}
                          price={500}
                          rating={5}
                />
                <GameCard cardMedia={'/Witcher_3.jpg'}
                          cardDescription={cardDescription}
                          cardTitle={cardTitle}
                          price={500}
                          rating={5}
                          discount={{discountedPrice:400, percentage:20}}
                />
            </Grid2>
        </Box>
    );
}
