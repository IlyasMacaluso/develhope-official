function Welcome({ name }) {
    return (
        <div className="welcome">
            <h2>Welcome</h2>
            {name ? (
                <p>
                    Hello, <strong>{name}</strong>
                </p>
            ) : (
                <p>Hello, user</p>
            )}
        </div>
    )
}

export default Welcome
