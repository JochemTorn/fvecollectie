import Head from 'next/head'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Artwork from '../components/Artwork'
import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{Header.Sitetitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
        <Layout>
          <Header/>
          <div className="justify-items-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <Artwork src="1.jpeg"></Artwork>
            <Artwork src="2.jpeg"></Artwork>
            <Artwork src="3.png"></Artwork>
            <Artwork src="4.png"></Artwork>
            <Artwork src="5.png"></Artwork>
            <Artwork src="6.png"></Artwork>
            <Artwork src="7.png"></Artwork>
          </div>
          <Footer/>
        </Layout>
    </div>
  )
}