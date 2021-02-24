import Date from '../components/date';
import CoverImage from './cover-image';
import Link from 'next/link';

import { HERO_TEXT } from '../lib/constants';
import { Typography } from '@material-ui/core';

export default function PostPreview({
    title,
    coverImage,
    date,
    explanation,
}) {
    return (
        <div>
            <CoverImage title={title} url={coverImage} slug={date} preview={true} />
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
            <Typography style={{ paddingTop: "1.1vmax" }} dangerouslySetInnerHTML={{ __html: HERO_TEXT }} />
        </div>
    )
}