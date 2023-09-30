import {Card, CardContent, CardMedia, Chip, Stack} from "@mui/material";
import default_project_image from '../../../assets/images/default_project_photo.webp';
import Typography from "@mui/material/Typography";
import {tagsColorsMap} from "../../../utils/tagsColorsMap.js";

export function ProjectCard({title, description, photo, id, tags}) {
    return <Card sx={{width: '350px'}}>
        <CardMedia
            sx={{ height: 280 }} image={photo || default_project_image} />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
            <Stack direction="row" gap="5px">
                {(tags || []).map((tag) => <Chip style={{backgroundColor: tagsColorsMap.get(tag) || 'blue'}} size="small" key={tag} label={`#${tag}`} />)}
            </Stack>
        </CardContent>
    </Card>
}