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
import { useContext, useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../component/reserve/Reserve';

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const params = useParams();

    const { data, loading, error } = useFetch(`/hotels/find/${params.id}`);
    const { dates, options } = useContext(SearchContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    const dayDifference = (date1, date2) => {
        const timeDiff = Math.abs(
            new Date(date2).getTime() - new Date(date1).getTime()
        );
        const dayDiff = Math.ceil(timeDiff / MILISECONDS_PER_DAY);

        return dayDiff === 0 ? 1 : dayDiff;
    };
    const days = dayDifference(dates[0].startDate, dates[0].endDate);
    useEffect(() => {
        if (error.length > 0) console.log(error);
    }, [error]);

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
    const handleBook = () => {
        if (user) {
            setOpenModal(true);
        } else {
            navigate('/login');
        }
    };

    return (
        <div>
            <Navbar />
            <Header type='list' />
            {loading ? (
                'Is Loading'
            ) : (
                <>
                    <div
                        className='hotelContainer'
                        tabIndex='-1'
                        onKeyDown={handleKeyDown}
                    >
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
                                    <img
                                        src={data.photos[slideNumber]}
                                        alt=''
                                        className='sliderImg'
                                    />
                                </div>
                                <FontAwesomeIcon
                                    className='arrow'
                                    icon={faArrowCircleRight}
                                    onClick={() => handleMove('right')}
                                />
                            </div>
                        )}
                        <div className='hotelWrapper'>
                            <button onClick={handleBook} className='bookBtn'>
                                Reserve
                            </button>
                            <h1 className='hotelTitle'>{data.title}</h1>
                            <div className='hotelAddress'>
                                <FontAwesomeIcon
                                    className='htIcon'
                                    icon={faLocationDot}
                                />
                                <span>{data.address}</span>
                            </div>
                            <span className='hotelDistance'>
                                Excellent location - {data.distance}m from
                                center
                            </span>
                            <span className='hotelPriceHighlight'>
                                Book a stay over USD {data.cheapestPrice} at
                                this property and get a free airport taxi
                            </span>
                            <div className='hotelImgs'>
                                {data.photos?.map((photo, i) => (
                                    <div key={i} className='hotelImgWrapper'>
                                        <img
                                            onClick={() => handleOpenImg(i)}
                                            src={photo}
                                            alt=''
                                            className='hotelImg'
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='hotelDetails'>
                                <div className='hotelDetailsTexts'>
                                    <h1 className='hotelTitle'>
                                        Large area, beautiful surrounding
                                    </h1>
                                    <p className='hotelDesc'>{data.desc}</p>
                                </div>
                                <div className='hotelDetailsPrice'>
                                    <h1>Perfect for a {days}-night stay!</h1>
                                    <div className='hotelsDetailsLocation'>
                                        <FontAwesomeIcon
                                            className='htIcon'
                                            icon={faLocationDot}
                                        />
                                        <span>
                                            Top Location: Highly rated by recent
                                            guests (
                                            {data.rating ? data.rating : '8.5'})
                                        </span>
                                    </div>
                                    <div className='hdAct'>
                                        <h2>Activities:</h2>
                                        <p>Tennis court</p>
                                        <p>Golf course (within 2 miles)</p>
                                        <p>Game room</p>
                                    </div>
                                    <h2>
                                        <b>
                                            USD{' '}
                                            {data.cheapestPrice *
                                                days *
                                                options.room}
                                        </b>{' '}
                                        ({days} nights)
                                    </h2>
                                    <button onClick={handleBook}>
                                        Reserve or Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {openModal && (
                <Reserve setOpen={setOpenModal} hotelId={params.id} />
            )}
            <MailList />
            <Footer />
        </div>
    );
};

export default Hotel;
