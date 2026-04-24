function Navbar() {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
            <h1>My App</h1>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
                <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
                <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
                <li><Link to ='/sample'>Sample</Link></li>
            
            </ul>
        </nav>
    )
}

export default Navbar