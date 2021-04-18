import Nav from '../layout/Nav'
import Link from "next/link"

const Sitetitle = "De FVE Collectie 2020/2021"

export default function Header() {
    return (
        <div className="h-24 my-6 mb-12 flex items-center justify-between">
            <div>
            <Link href="/"><a className="text-gray-900 tracking-tight text-4xl font-bold title">{Sitetitle}</a></Link>
                <p className="mt-1 text-gray-600">Door Lucas, Bert en Jochem</p>
            </div>
            {/*<Nav/>*/}
        </div>
    )
}