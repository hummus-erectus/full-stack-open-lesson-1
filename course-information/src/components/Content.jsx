import Part from "./Part"

function Content({parts}) {
    return (
        <>
            <Part part={parts[0]} />
            <Part part={parts[1]} />
            <Part part={parts[2]} />
        </>
    )
}

export default Content