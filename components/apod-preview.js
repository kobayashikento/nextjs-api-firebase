import Date from '../components/date';
import CoverImage from './cover-image';
import Link from 'next/link';

import { HERO_TEXT } from '../lib/constants';
import { Typography, Grid } from '@material-ui/core';

export default function PostPreview({
    title,
    coverImage,
    date,
    explanation,
}) {
    let firstFive = explanation.split('\.')[0] + explanation.split('\.')[1] + "...";

    return (
        <Grid container justify="space-between" alignItems="center" style={{ paddingTop: "4%", paddingBottom: "4%" }}>
            <Grid item xs={12} sm={4}>
                <Typography className="underlineHover" variant="h4" style={{ paddingTop: "1.1vmax", paddingBottom: "1rem" }}>
                    <Link as={`/apods/${date}`} href="/apods/[slug]">
                        <a
                            dangerouslySetInnerHTML={{ __html: title }}
                        ></a>
                    </Link>
                </Typography>
                <Typography variant="body1">
                    <Date dateString={date} />
                </Typography>
                <Typography style={{ paddingTop: "1.1vmax" }} dangerouslySetInnerHTML={{ __html: firstFive }} />
            </Grid>
            <Grid item xs={12} sm={7}>
                <CoverImage title={title} url={coverImage} slug={date} preview={true} />
            </Grid>
        </Grid>
    )
}