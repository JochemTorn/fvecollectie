import Link from 'next/link'

export default function Nav() {
return (
    <div>
        <Link href="/"><a className="mr-4">Home</a></Link>
        <Link href="/fabienne"><a>Liedje</a></Link>
    </div>
        )
}