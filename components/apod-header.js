import Date from '../components/date';
import CoverImage from '../components/cover-image';
import ApodTitle from '../components/apod-title';

import { Typography } from '@material-ui/core';

export default function ApodHeader({ title, coverImage, date }) {
    return (
        <>
            <ApodTitle>{title}</ApodTitle>
            <Typography variant="h6" style={{ paddingTop: "1.1vmax" }}>
                Published on: <Date dateString={date} />
            </Typography>
            <div style={{ paddingTop: "3.3vmax" }}>
                <CoverImage title={title} url={coverImage} />
            </div>
        </>
    )
}