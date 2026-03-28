// pages/Home.jsx
function Home() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to the Home Page!</h1>
            <p>You have successfully logged in.</p>
            <button onClick={() => window.location.href = '/'}>Logout</button>
        </div>
    );
}

export default Home;