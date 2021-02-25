import Date from '../components/date';
import CoverImage from './cover-image';
import Link from 'next/link';

import { HERO_TEXT } from '../lib/constants';
import { Typography, CardActionArea, Card, CardContent, CardActions, Button } from '@material-ui/core';

export default function PostPreview({
    title,
    coverImage,
    date,
    explanation,
}) {
    let firstTwo = explanation.split('\.')[0] + explanation.split('\.')[1] + "...";

    return (
        <Card style={{ marginTop: "4%", marginBottom: "4%" }}>
            <Link as={`/apods/${date}`} href="/apods/[slug]">
                <CardActionArea>
                    <CoverImage title={title} url={coverImage} slug={date} preview={true} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {firstTwo}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Link as={`/apods/${date}`} href="/apods/[slug]">
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </Link>
            </CardActions>
        </Card>
    )
}