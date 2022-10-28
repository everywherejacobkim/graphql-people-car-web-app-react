const getStyles = () => ({
    title: {
        fontSize: 50,
        padding: '15px',
        marginBottom: '50',
        textAlign: 'center',
    }
})

const Title = () => {
    const styles = getStyles()
    return <h1 style={styles.title}>PEOPLE & CARS</h1>
}

export default Title