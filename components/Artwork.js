

export default function Artwork(props) {
    return (
        <div className="relative w-full">
            <a className="h-full w-full flex justify-center max-h-96" href={`/artwork/${props.src}`} target="blank">
                <img class="dark:border-gray-700 border object-contain" src={`/artwork/${props.src}`}/>
                <div className="absolute w-full h-full flex items-start ">
                    <p className="px-2 py-1 border rounded-br-md bg-white dark:border-gray-700 dark:bg-gray-800">{`Week ${props.src.replace(".png", "").replace(".jpeg", "").replace(".jpg", "")}`}</p>
                </div>
            </a>
        </div>
    )
}