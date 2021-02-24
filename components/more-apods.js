import { Typography, Grid } from '@material-ui/core';
import ApodPreview from './apod-preview';

import { HERO_TEXT } from '../lib/constants';

export default function MoreStories({ apods }) {
    return (
        <section style={{ marginTop: "5.5vmax" }}>
            <Typography variant="h2" style={{ fontWeight: "bold" }}>
                More Pictures
      </Typography>
            <Grid container spacing={10} justify="space-around" alignItems="baseline" style={{ paddingTop: "2.2vmax", paddingBottom: "5.5vmax" }}>
                {apods.map((apod) => (
                    <Grid item xs={12} sm={6}>
                        <ApodPreview
                            key={apod.date}
                            title={apod.title}
                            coverImage={apod.url}
                            date={apod.date}
                            slug={apod.date}
                            excerpt={apod.HERO_TEXT}
                        />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}