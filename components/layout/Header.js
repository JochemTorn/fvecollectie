import Nav from '../layout/Nav'

const Sitetitle = "De FVE Collectie 2020/2021"

export default function Header() {
    return (
        <div className="h-28 flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium title">{Sitetitle}</h1>
            <Nav/>
        </div>
    )
}