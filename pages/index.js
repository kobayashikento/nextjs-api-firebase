import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import Intro from '../components/intro';
import HeroAPOD from '../components/hero-apod';
import MoreAPODs from '../components/more-apods';

import { getAllAPODForHome } from '../lib/api';

export default function Index({ allAPODs, preview }) {

  const temp = [
    {
      date: '1999-09-22',
      explanation: "What's happened to the Ring Nebula?  The familiar Ring that can be seen with a small back-yard telescope takes on a new look when viewed in dim light.  The above recently-released, false-color image taken by the giant Subaru Telescope shows details of  giant halos of diffuse gas that are seen to envelop the entire structure.  The Ring Nebula, also known as M57, is an elongated planetary nebula, a type of nebula that is created when a Sun-like star evolves to throw off its outer atmosphere and becomes a white dwarf.  The Ring Nebula is about 2000 light-years away, and the main ring spans about one light-year.  The origin and future evolution of the Ring Nebula's outer halos is still being investigated.",
      hdurl: 'https://apod.nasa.gov/apod/image/9909/ringhalo_subaru_big.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Halos Around the Ring Nebula',
      url: 'https://apod.nasa.gov/apod/image/9909/ringhalo_subaru.jpg'
    },
    {
      date: '2004-12-12',
      explanation: "Birds don't fly this high.  Airplanes don't go this fast.  The Statue of Liberty weighs less.  No species other than human can even comprehend what is going on, nor could any human just a millennium ago.  The launch of a rocket bound for space is an event that inspires awe and challenges description.  Pictured above, the Space Shuttle Atlantis lifted off to visit the International Space Station  during the early morning hours of 2001 July 12.  From a standing start, the two million kilogram rocket ship left to circle the Earth where the outside air is too thin to breathe and where there is little noticeable onboard gravity.  Rockets bound for space are now launched from somewhere on Earth about once a week.",
      hdurl: 'https://apod.nasa.gov/apod/image/0301/nightlaunch_sts104_big.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Atlantis to Orbit',
      url: 'https://apod.nasa.gov/apod/image/0301/nightlaunch_sts104.jpg'
    },
    {
      date: '2001-06-04',
      explanation: 'What did the Sun look like before there were planets?  A prototype laboratory for the formation of low mass stars like our Sun is the T Tauri system, one of the brighter star systems toward the constellation of Taurus.  In young systems, gravity causes a gas cloud to condense.  The situation then usually becomes quite complex, as some of the infalling gas is heated so much by collisions that it is immediately expelled as an outgoing wind.  Complex geometries including jets and disks form as the infalling and outflowing gas collide and interact with a changing magnetic field. Pictured above is a false-color image of the T Tauri system itself, which turns out to be a binary.  In a few million years, the central condensate will likely become hot enough to ignite nuclear fusion, by which time much of the surrounding circumstellar material will either have fallen in or have been driven off by the stellar wind.  At that time, a new star will shine.',
      hdurl: 'https://apod.nasa.gov/apod/image/0106/ttauri_cfht.gif',
      media_type: 'image',
      service_version: 'v1',
      title: 'The T Tauri Star Forming System',
      url: 'https://apod.nasa.gov/apod/image/0106/ttauri_cfht.jpg'
    },
    {
      date: '1998-03-10',
      explanation: "Which way to the interstate?  What appears to be a caricature of a complex highway system on Earth is actually a system of ridges and cracks on the icy surface of Jupiter's moon Europa. The distance between parallel ridges in the above photograph is typically about 1 kilometer.  The complexity of the cracks and ridges tell a story of Europa's past that is mostly undecipherable -- planetary geologists try to understand just the general origin of the overall features.  One noteworthy feature is the overall white sheen, possibly indicating the presence of frost.  Another is the dark centers between parallel ridges, which might indicate that dirty water from an underground ocean recently welled up in the cracks and froze.",
      hdurl: 'https://apod.nasa.gov/apod/image/9803/europafrost_gal_big.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Cracks and Ridges on Europa',
      url: 'https://apod.nasa.gov/apod/image/9803/europafrost_gal.jpg'
    },
    {
      date: '2001-11-09',
      explanation: "The most prolific comet discovering instrument in history rides aboard the sun-staring SOHO spacecraft, 1.5 million kilometers sunward of planet Earth. Of course, most of these SOHO comets have been sungrazers - like the one illustrated in the dramatic montage above. Three frames taken hours apart on October 23rd, show bright SOHO comet number 367 plunging toward the fiery solar surface, its tail streaming away from the Sun located just beyond the left hand border. Each panel spans about one million kilometers at the distance of the Sun. From bottom to top, the comet's tail grows as the intensifying solar radiation heats the frozen comet material and increases the outflow of gas and dust. Because of their orbits, sungrazers are believed to belong to a family of comets produced by the breakup of a single much larger comet. Coincidentally, this sungrazer was discovered shortly after solar active regions blasted out clouds of energetic particles, like those that triggered the recent spectacular auroral storms. And like all SOHO sungrazers so far, comet number 367 was not seen to survive its close solar encounter.",
      hdurl: 'https://apod.nasa.gov/apod/image/0111/sungrazer_vanmontage.jpg ',
      media_type: 'image',
      service_version: 'v1',
      title: 'SOHO Comet 367: Sungrazer',
      url: 'https://apod.nasa.gov/apod/image/0111/sungrazer_vanmontage.jpg'
    }
  ]

  const heroAPOD = temp[0]
  const moreAPODs = temp.slice(1)

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
          {moreAPODs.length > 0 && <MoreAPODs apods={moreAPODs} />}
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
