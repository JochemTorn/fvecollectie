export default function Artwork(props) {
    return (
        <a className="h-full w-full flex justify-center max-h-96" href={`/artwork/${props.src}`} target="blank">
            <img class="border object-contain" src={`/artwork/${props.src}`}/>
        </a>
    )
}