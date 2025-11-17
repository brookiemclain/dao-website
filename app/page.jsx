export default function HomePage() {
  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f4f4f9',
      color: '#333',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      {/* Header */}
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#1e40af' }}>DAO Secretorium</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Decentralized Autonomous Organization | Community Projects & Governance
        </p>
      </header>

      {/* Body */}
      <section style={{ maxWidth: '600px', padding: '1rem' }}>
        <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
          Welcome to the official site of DAO Secretorium. Our mission is to empower community-led projects 
          through decentralized governance and blockchain technology.
        </p>
        <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
          Join our community and stay updated on our initiatives, voting events, and project launches.
        </p>
        <a href="https://t.me/DAOSecretorium" style={{
          display: 'inline-block',
          backgroundColor: '#1e40af',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>Join Our Community</a>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#888' }}>
        © {new Date().getFullYear()} DAO Secretorium. All rights reserved.
      </footer>
    </main>
  );
}
