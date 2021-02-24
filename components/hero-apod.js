import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';
import { Grid } from '@material-ui/core';

export default function HeroAPOD({
    title,
    coverImage,
    date,
    explanation,
    slug,
}) {
    return (
        <section>
            <CoverImage title={title} url={coverImage} slug={slug} />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    {/* <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                        <Link as={`/posts/${slug}`} href="/posts/[slug]">
                            <a className="hover:underline">{title}</a>
                        </Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg">
                        <Date dateString={date} />
                    </div> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1">{explanation}</Typography>
                </Grid>
            </Grid>
        </section >
    )
}