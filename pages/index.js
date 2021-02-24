import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import Intro from '../components/intro';
import HeroAPOD from '../components/hero-apod';
import MoreAPODs from '../components/more-apods';

import { getAllAPODForHome } from '../lib/api';

export default function Index({ allAPODs }) {

  const heroAPOD = allAPODs[0]
  const moreAPODs = allAPODs.slice(1)

  return (
    <>
      <Layout>
        <Head>
          <title>Endless Feed Content Home</title>
        </Head>
        <Container>
          <Intro />
          {heroAPOD && (
            <HeroAPOD
              title={heroAPOD.title}
              coverImage={heroAPOD.url}
              date={heroAPOD.date}
              explanation={heroAPOD.explanation}
            />
          )}
          {moreAPODs.length > 0 && <MoreAPODs apods={moreAPODs} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allAPODs = await getAllAPODForHome(preview)
  return {
    props: { allAPODs },
  }
}
