import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <meta
        name="description"
        content={`An endless feed application using NASA's API rotues.`}
      />
    </Head>
  )
}