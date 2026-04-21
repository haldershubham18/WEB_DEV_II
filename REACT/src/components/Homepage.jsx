function Homepage() {
    const loggedin = false;
    return (
        loggedin ? <button>Logout</button> : <button>Login</button>
    );
}

export default Homepage;