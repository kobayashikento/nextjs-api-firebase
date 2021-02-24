import { Container, Typography } from '@material-ui/core';

export default function ApodBody({ content }) {
    return (
        <Container maxWidth="md" style={{ paddingTop: "4.4vmax", display: "flex", flexDirection: "column" }}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
                Astronomy Picture of the Day:
             </Typography>
            <Typography align="justify" variant="body1" style={{ paddingTop: "1.1vmax", textIndent: "1rem" }}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </Container>
    )
}