import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import Intro from '../components/intro';
import HeroAPOD from '../components/hero-apod';

import { getAllAPODForHome } from '../lib/api';

export default function Index({ allAPODs, preview }) {
  const temp = [
    {
      date: '2014-09-25',
      explanation: "The large stellar association cataloged as NGC 206 is nestled within the dusty arms of the neighboring Andromeda galaxy. Also known as M31, the spiral galaxy is a mere 2.5 million light-years away. NGC 206 is near top center in this gorgeous close-up of the southwestern extent of Andromeda's disk, a remarkable composite of data from space and ground-based observatories. The bright, blue stars of NGC 206 indicate its youth. In fact, its youngest massive stars are less than 10 million years old. Much larger than the open or galactic clusters of young stars in the disk of our Milky Way galaxy, NGC 206 spans about 4,000 light-years. That's comparable in size to the giant stellar nurseries NGC 604 in nearby spiral M33 and the Tarantula Nebula, in the Large Magellanic Cloud. Star forming sites within Andromeda are revealed by the telltale reddish emission from clouds of ionized hydrogen gas.",
      hdurl: 'https://apod.nasa.gov/apod/image/1409/M31-SW-Subaru-HST-LL.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'NGC 206 and the Star Clouds of Andromeda',
      url: 'https://apod.nasa.gov/apod/image/1409/M31-SW-Subaru-HST-S1024.jpg'
    }
  ]

  const heroAPOD = temp[0]
// const moreAPODs = edges.slice(1)

return (
  <>
    <Layout preview={preview}>
      <Head>
        <title>Endless Feed Content Home</title>
      </Head>
      <Container>
        <Intro />
        {temp && (
          <HeroAPOD
            title={heroAPOD.title}
            coverImage={heroAPOD.url}
            date={heroAPOD.date}
            explanation={heroAPOD.explanation}
          />
        )}
      </Container>
    </Layout>
  </>
)
}

// {heroPost && (
//   <HeroPost
//     title={heroPost.title}
//     coverImage={heroPost.featuredImage?.node}
//     date={heroPost.date}
//     author={heroPost.author?.node}
//     slug={heroPost.slug}
//     excerpt={heroPost.excerpt}
//   />
// )}
// {morePosts.length > 0 && <MoreStories posts={morePosts} />}

export async function getStaticProps({ preview = false }) {
  const allAPODs = await getAllAPODForHome(preview)
  return {
    props: { allAPODs, preview },
  }
}
