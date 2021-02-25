import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';

import { Grid, Typography } from '@material-ui/core';

import { HERO_TEXT } from '../lib/constants';

export default function HeroAPOD({
    title,
    coverImage,
    date,
    explanation,
}) {
    return (
        <section>
            <div style={{ paddingTop: "3.3vmax" }}>
                <CoverImage title={title} url={coverImage} slug={date} />
            </div>
            <Grid container spacing={3} style={{ paddingTop: "3.3vmax" }}>
                <Grid item xs={12} sm={6} style={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h3" className="underlineHover">
                        <Link as={`/apods/${date}`} href="/apods/[slug]">
                            <a>{title}</a>
                        </Link>
                    </Typography>
                    <Typography variant="body1" style={{ paddingTop: "1.1vmax"}}>
                        Published on: <Date dateString={date} />
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1">{explanation}</Typography>
                </Grid>
            </Grid>
        </section >
    )
}