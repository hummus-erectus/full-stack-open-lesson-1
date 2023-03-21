const Statistics =({good, neutral, bad}) => {

    const all = good + neutral + bad

    return (
        <>
            <h2>Statistics</h2>
            {all ? (
                <>
                    <p>Good {good}</p>
                    <p>Neutral {neutral}</p>
                    <p>Bad {bad}</p>
                    <p>All {all}</p>
                    <p>Average {(good-bad)/all}</p>
                    <p>Positive {(good/all)*100}%</p>
                </>
            )
            :
            <p>No feedback given</p>
        }
        </>
    )
}

export default Statistics