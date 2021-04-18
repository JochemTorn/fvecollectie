import Head from 'next/head'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>{Header.Sitetitle}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
        <div className="m-auto px-6 container">
            <Header/>
                {children}
            <Footer/>
        </div>
        
        </div>
    )
}