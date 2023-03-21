const Statistics =({good, neutral, bad}) => {

    const all = good + neutral + bad

    return (
        <>
            <h2>Statistics</h2>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
            <p>All {all}</p>
            <p>Average {!all ? 0 : (good-bad)/all}</p>
            <p>Positive {!all ? 0 : (good/all)*100}%</p>
        </>
    )
}

export default Statistics