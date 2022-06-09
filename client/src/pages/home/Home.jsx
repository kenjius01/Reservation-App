import Featured from '../../component/featured/Featured';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import HomeFeatured from '../../component/homeFeatured/HomeFeatured';
import MailList from '../../component/mailList/MailList';
import Navbar from '../../component/navbar/Navbar';
import PropertyList from '../../component/propertyList/PropertyList';
import './home.css';

const Home = () => {
  return (
    <div  className='home'>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <HomeFeatured/>
        <MailList/>
        <Footer/>
      </div>
      
    </div>
  );
};

export default Home;
