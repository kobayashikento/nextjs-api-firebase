import React from 'react';

import { Typography, Grid } from '@material-ui/core';
import ApodPreview from './apod-preview';

import InfiniteScroll from "react-infinite-scroll-component";

import { getAllAPODForFeed } from '../lib/api';

export default function MoreStories({ apods }) {

    const [items, setItems] = React.useState(apods)

    async function fetchMoreData() {
        const newApods = await getAllAPODForFeed(6);
        setItems(items.concat(newApods));
    }

    return (
        <section style={{ marginTop: "5.5vmax" }}>
            <Typography variant="h2" style={{ fontWeight: "bold" }}>
                More Pictures
      </Typography>
            <div style={{ paddingTop: "2.2vmax", paddingBottom: "5.5vmax" }}>
                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<Typography>Loading...</Typography>}
                    style={{ overflow: "none" }}
                >
                    <Grid container spacing={7}>
                        {items.map((apod) => (
                            <Grid item xs={12} sm={4}>
                                <ApodPreview
                                    key={apod.date}
                                    title={apod.title}
                                    coverImage={apod.url}
                                    date={apod.date}
                                    slug={apod.date}
                                    explanation={apod.explanation}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </InfiniteScroll>
            </div>
        </section >
    )
}