import { HeaderPage } from '../components/HeaderPage'
import { Footer } from '../components/Footer'

const Error = () => {
  return (
    <div className="content page">
      <HeaderPage />
      <main className='p-t-40 p-b-104 p-x-40 c-white'>
        <h2>404 - Page Not Found</h2>
        <p className='c-pink p-b-40'>Sorry, the page you're looking for doesn't exist.</p>
        <div className="tc">
          <p className='p-b-40'>It might have been moved, deleted, or the URL might be incorrect.</p>
          <a href="/" style={{textDecoration: 'none', fontWeight: 500}}>Return to Home</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { Error }
