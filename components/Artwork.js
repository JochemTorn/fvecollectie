export default function Artwork(props) {
    return (
        <div className="relative w-full">
            <a className="h-full w-full flex justify-center max-h-96" href={`/artwork/${props.src}`} target="blank">
                <img class="border object-contain" src={`/artwork/${props.src}`}/>
                <div className="transition opacity-25 absolute hover:bg-gray-300 w-full h-full"></div>
            </a>
        </div>
    )
}