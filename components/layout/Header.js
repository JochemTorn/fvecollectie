const Sitetitle = "De FVE Collectie 2020/2021"
import Nav from '../layout/Nav'

export default function Header() {
    return (
        <div className="h-28 flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">{Sitetitle}</h1>
            <Nav/>
        </div>
    )
}