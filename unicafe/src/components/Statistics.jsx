import StatisticLine from "./StatisticLine"

const Statistics =({good, neutral, bad}) => {

    const all = good + neutral + bad

    return (
        <>
            <h2>Statistics</h2>
            {all ? (
                <table>
                    <tbody>
                        <StatisticLine text="Good" value={good} />
                        <StatisticLine text="Neutral" value={neutral} />
                        <StatisticLine text="Bad" value={bad} />
                        <StatisticLine text="All" value={all} />
                        <StatisticLine text="Average" value={(good-bad)/all} />
                        <StatisticLine text="Positive" value={`${(good/all)*100}%`} />
                    </tbody>
                </table>
            )
            :
            <p>No feedback given</p>
        }
        </>
    )
}

export default Statistics