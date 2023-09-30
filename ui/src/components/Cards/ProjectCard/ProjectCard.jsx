import {Card, CardContent, CardMedia} from "@mui/material";
import default_project_image from '../../../assets/images/default_project_photo.webp';
import Typography from "@mui/material/Typography";

export function ProjectCard({title, description, image, id, tags}) {
    return <Card sx={{width: '350px'}}>
        <CardMedia
            sx={{ height: 280 }} image={image || default_project_image} />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </CardContent>
    </Card>
}