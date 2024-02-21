import { Outlet } from 'react-router-dom';
import FooterSection from './components/footer/footer.section';
import NavbarSection from './components/navbar/navbar.section';


function App() {
  return (
    <>
      <NavbarSection />
      <Outlet/>
      <FooterSection/>
    </>

  );
}

export default App;
