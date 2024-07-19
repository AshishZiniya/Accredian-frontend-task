import './App.css';
import Benefit from './Components/Benefit/Benefit';
import FAQs from './Components/FAQs/FAQs';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/Main page/MainPage';
import Navbar from './Components/Navbar/Navbar';
import ReferPage from './Components/Refer Page/ReferPage';

export default function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <ReferPage />
      <Benefit />
      <FAQs />
      <Footer />
    </div>
  )
}
