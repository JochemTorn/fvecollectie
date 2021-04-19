import Artwork from '../components/Artwork'
import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <div>
        <Layout>
          <div className="justify-items-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <Artwork src="1.jpeg"/>
            <Artwork src="2.jpeg"/>
            <Artwork src="3.png"/>
            <Artwork src="4.png"/>
            <Artwork src="4 bijlage.png"/>
            <Artwork src="5.png"/>
            <Artwork src="6.png"/>
            <Artwork src="7.png"/>
            <Artwork src="8.png"/>
            <Artwork src="8 bijlage.png"/>
            <Artwork src="9.png"/>
          </div>
        </Layout>
    </div>
  )
}