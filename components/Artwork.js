import Image from 'next/image'

export default function Artwork() {
    return (
    <div className="w-full flex justify-center">
        <Image src="https://via.placeholder.com/150" width={150} height={150}/>
    </div>
    )
}