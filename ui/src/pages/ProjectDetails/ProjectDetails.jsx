import {ProjectsService} from "../../services/projects.js";
import {useLoaderData} from "react-router-dom";
import {Card, CardContent, Divider, List, ListItem, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function ProjectDetails() {
    const details = useLoaderData();
    return <Stack direction="column" gap="20px" padding="20px">
        <Card style={{width: '100%'}}>
            <CardContent>
                <Stack direction="row" gap="20px">
                    <Box width={300} height={300}
                            style={{backgroundImage: `url(${details.photo})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>

                </Box>
                    <Stack>
                        <Typography
                            variant="h1"
                            noWrap
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {details.title}
                        </Typography>
                        <Typography
                            variant="h5"
                            noWrap
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {details.description}
                        </Typography></Stack>
                    </Stack>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Opis:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {details.long_description}
                </Typography>
            </CardContent>
        </Card>
        <Stack direction="row" gap="20px">
            <Card style={{width: '40%'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Tego się nauczysz:
                    </Typography>
                    <List>
                        {details.what_to_learn.map(point => <><ListItem>{point}</ListItem><Divider /></>)}
                    </List>
                </CardContent>
            </Card>
            <Card style={{width: '60%'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Spis treści:
                    </Typography>
                    <List>
                        {details.contents.map(point => <><ListItem>{point}</ListItem><Divider /></>)}
                    </List>
                </CardContent>
            </Card>
        </Stack>
    </Stack>;
}

export async function projectDetailsLoader({params}) {
    return await ProjectsService.getProject(params.id)
}