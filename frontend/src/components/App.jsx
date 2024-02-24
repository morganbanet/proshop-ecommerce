import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />

      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
