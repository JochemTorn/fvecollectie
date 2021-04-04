import Head from 'next/head'
import Artwork from '../components/Artwork'
import Layout from '../components/Layout'
const Sitetitle = "De FVE Collectie 2020/2021"

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>{Sitetitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
        <Layout>
          <div className="h-28 flex items-center justify-center">
            <h1 className="text-4xl font-medium">{Sitetitle}</h1>
          </div>
          <div className="justify-items-center grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Artwork></Artwork>
            <Artwork></Artwork>
            <Artwork></Artwork>
            <Artwork></Artwork>
          </div>
        </Layout>
    </div>
  )
}