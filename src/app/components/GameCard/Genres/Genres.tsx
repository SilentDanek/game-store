import {Chip, Stack} from "@mui/material";

type GenresProps = {
    tags: string[];
}

export function Genres({tags}: GenresProps) {
    return <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" mb={2}>
        {tags.map((tag, index) => (
            <Chip key={index} label={tag} color="default" size="small"/>
        ))}
    </Stack>
}