const Count = () => {
    const [count, setCount] = React.useState(0)

    function addCount() {
        setCount(props => props + 1)
    }

    return (
        <React.Fragment>
            <p>{ count }</p>
            <button onClick={ addCount }>count</button>
        </React.Fragment>
    )
}
