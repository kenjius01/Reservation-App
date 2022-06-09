import './hotel.css';
import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
  faCircleArrowLeft,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import MailList from '../../component/mailList/MailList';
import Footer from '../../component/footer/Footer';
import { useState } from 'react';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
    },
  ];

  const handleOpenImg = (i) => {
    setSlideNumber(i);
    setIsOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === 'left') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const handleKeyDown = (e) => {
    // console.log(e.keyCode);
    if (e.keyCode === 37) {
      handleMove('left');
    } else if (e.keyCode === 39) {
      handleMove('right');
    }
  };

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='hotelContainer' tabIndex='-1' onKeyDown={handleKeyDown}>
        {isOpen && (
          <div className='slider'>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className='close'
              onClick={() => setIsOpen(false)}
            />
            <FontAwesomeIcon
              className='arrow'
              icon={faCircleArrowLeft}
              onClick={() => handleMove('left')}
            />
            <div className='sliderWrapper'>
              <img src={photos[slideNumber].src} alt='' className='sliderImg' />
            </div>
            <FontAwesomeIcon
              className='arrow'
              icon={faArrowCircleRight}
              onClick={() => handleMove('right')}
            />
          </div>
        )}
        <div className='hotelWrapper'>
          <button className='bookBtn'>Reserve</button>
          <h1 className='hotelTitle'>Terracotta Hotel & Resort Dalat</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon className='htIcon' icon={faLocationDot} />
            <span>
              Zone 7.9, Tuyen Lam Lake Tourist Area, Ward 3, Tuyen Lam Lake, Da
              Lat, Vietnam{' '}
            </span>
          </div>
          <span className='hotelDistance'>Great location - show map</span>
          <span className='hotelPriceHighlight'>
            Book a stay over VND 116,999,970 at this property and get a free
            airport taxi
          </span>
          <div className='hotelImgs'>
            {photos.map((photo, i) => (
              <div key={i} className='hotelImgWrapper'>
                <img
                  onClick={() => handleOpenImg(i)}
                  src={photo.src}
                  alt=''
                  className='hotelImg'
                />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Large area, beautiful surrounding</h1>
              <p className='hotelDesc'>
                Terracotta Hotel & Resort Dalat offers rooms and villas with
                free WiFi. Featuring an indoor pool, spa and fitness center, the
                resort is located next to Tuyen Lam Lake. Terracotta Hotel &
                Resort Dalat is 901 m from Truc Lam Temple. Lien Khuong Airport
                is 11 mi away. Every room and villa features a flat-screen cable
                TV, safe, mini-bar and an electric kettle. A seating area and
                private bathroom with shower, bathtub and hairdryer are
                included. Other recreation facilities include a tennis court,
                pool table and Karaoke. A shared lounge, ticket service and tour
                desk are available. The property offers a currency exchange,
                24-hour front desk and free private parking.
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for a 30-night stay!</h1>
              <div className='hotelsDetailsLocation'>
                <FontAwesomeIcon className='htIcon' icon={faLocationDot} />
                <span>Top Location: Highly rated by recent guests (8.5)</span>
              </div>
              <div className='hdAct'>
                <h2>Activities:</h2>
                <p>Tennis court</p>
                <p>Golf course (within 2 miles)</p>
                <p>Game room</p>
              </div>
              <h2>
                <b>VND 116,999,970</b> (30 nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
