import Nav from '../layout/Nav'
import Link from "next/link"

const Sitetitle = "De FVE Collectie 2020/2021"

export default function Header() {
    return (
        <div className="h-24 mb-12 flex items-center justify-between">
            <div className="mt-6">
            <Link href="/"><a className="dark:text-white text-gray-900 tracking-tight text-4xl font-bold title">{Sitetitle}</a></Link>
                <p className="dark:text-gray-500 mt-1 text-gray-600">Door Lucas, Bert en Jochem</p>
            </div>
            {/*<Nav/>*/}
        </div>
    )
}