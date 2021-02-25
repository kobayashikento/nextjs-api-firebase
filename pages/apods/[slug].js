import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import ApodHeader from '../../components/apod-header';
import ApodTitle from '../../components/apod-title';
import ApodBody from '../../components/apod-body';
import MoreAPODs from '../../components/more-apods';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { getAllAPODForHome, getAPODAndMoreAPODs } from '../../lib/api';
import Head from 'next/head';
import { Divider } from '@material-ui/core';

export default function Apod({ apod, moreAPODs }) {
console.log(apod)
    const router = useRouter()

    if (!router.isFallback && !apod?.date) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout>
            <Container>
                <Header />
                {router.isFallback ? (
                    <ApodTitle>Loading…</ApodTitle>
                ) : (
                        <>
                            <article>
                                <Head>
                                    <title>
                                        {apod.title}
                                    </title>
                                </Head>
                                <ApodHeader
                                    title={apod.title}
                                    coverImage={apod.url}
                                    date={apod.date}
                                />
                                <ApodBody content={apod.explanation} />
                            </article>
                            <Divider style={{ marginTop: "4.4vmax" }} />
                            {moreAPODs.length > 0 && <MoreAPODs apods={moreAPODs} />}
                        </>
                    )}
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params, preview = null }) {
    const { apod, moreAPODs } = await getAPODAndMoreAPODs(params.slug)

    return {
        props: {
            preview,
            apod,
            moreAPODs,
        },
    }
}

export async function getStaticPaths() {
    const allPosts = await getAllAPODForHome()
    return {
        paths: allPosts?.map((apod) => `/apods/${apod.slug}`) || [],
        fallback: true,
    }
}