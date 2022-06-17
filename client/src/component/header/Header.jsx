import {
    faBed,
    faCalendarAlt,
    faCar,
    faHandsAslInterpreting,
    faPerson,
    faPlane,
    faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const Header = ({ type }) => {
    const [destination, setDestination] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adults: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();

    const handleOpenDate = () => {
        setOpenDate(!openDate);
        setOpenOptions(false);
    };
    const handleOpenOption = () => {
        setOpenDate(false);
        setOpenOptions(!openOptions);
    };

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]:
                    operation === 'in' ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({
            type: 'NEW_SEARCH',
            payload: { destination, dates, options },
        });
        navigate('/hotels', {
            state: {
                destination,
                dates,
                options,
            },
        });
    };

    return (
        <div className='header'>
            <div
                className={
                    type === 'list'
                        ? 'headerContainer listMode'
                        : 'headerContainer'
                }
            >
                <div className='headerList'>
                    <div className='headerListItem active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Filghts</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faHandsAslInterpreting} />
                        <span>Attractions</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type === 'list' ? null : (
                    <>
                        <h1 className='headerTitle'>
                            A lifetime of discounts? It's Genius.
                        </h1>
                        <p className='headerDesc'>
                            Get rewarded for your travels – unlock instant
                            savings of 10% or more with a free Booking.com
                            account
                        </p>
                        <button className='headerBtn'>
                            Sign in / Register
                        </button>

                        <div className='headerSearch'>
                            <div className='headerSearchItem'>
                                <FontAwesomeIcon
                                    className='headerIcon'
                                    icon={faBed}
                                />
                                <input
                                    type='text'
                                    placeholder='Where are you going?'
                                    className='headerSearchInput'
                                    onChange={(e) =>
                                        setDestination(e.target.value)
                                    }
                                />
                            </div>
                            <div className='headerSearchItem'>
                                <FontAwesomeIcon
                                    className='headerIcon'
                                    icon={faCalendarAlt}
                                />
                                <span
                                    onClick={handleOpenDate}
                                    className='headerSearchText'
                                >{`${format(
                                    dates[0].startDate,
                                    'eee, MMM dd'
                                )} —   ${format(
                                    dates[0].endDate,
                                    'eee, MMM dd'
                                )}`}</span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) =>
                                            setDates([item.selection])
                                        }
                                        moveRangeOnFirstSelection={false}
                                        ranges={dates}
                                        className='date'
                                        minDate={new Date()}
                                    />
                                )}
                            </div>

                            <div className='headerSearchItem'>
                                <FontAwesomeIcon
                                    className='headerIcon'
                                    icon={faPerson}
                                />
                                <span
                                    onClick={handleOpenOption}
                                    className='headerSearchText'
                                >
                                    {options.adults} adults &nbsp; • &nbsp;{' '}
                                    {options.children} children &nbsp; • &nbsp;
                                    {options.room} room
                                </span>
                                {openOptions && (
                                    <div className='options'>
                                        <div className='optionItem'>
                                            <span className='optionText'>
                                                Adults
                                            </span>
                                            <div className='optionCouter'>
                                                <button
                                                    disabled={
                                                        options.adults <= 1
                                                    }
                                                    className='optionCouterBtn'
                                                    onClick={() =>
                                                        handleOption(
                                                            'adults',
                                                            'de'
                                                        )
                                                    }
                                                >
                                                    —
                                                </button>
                                                <span className='optionCouterNum'>
                                                    {options.adults}
                                                </span>
                                                <button
                                                    className='optionCouterBtn'
                                                    onClick={() =>
                                                        handleOption(
                                                            'adults',
                                                            'in'
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className='optionItem'>
                                            <span className='optionText'>
                                                Children
                                            </span>
                                            <div className='optionCouter'>
                                                <button
                                                    disabled={
                                                        options.children <= 0
                                                    }
                                                    className='optionCouterBtn'
                                                    onClick={() =>
                                                        handleOption(
                                                            'children',
                                                            'de'
                                                        )
                                                    }
                                                >
                                                    —
                                                </button>
                                                <span className='optionCouterNum'>
                                                    {options.children}
                                                </span>
                                                <button
                                                    className='optionCouterBtn'
                                                    onClick={() =>
                                                        handleOption(
                                                            'children',
                                                            'in'
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className='optionItem'>
                                            <span className='optionText'>
                                                Rooms
                                            </span>
                                            <div className='optionCouter'>
                                                <button
                                                    disabled={options.room <= 1}
                                                    className='optionCouterBtn'
                                                    onClick={() =>
                                                        handleOption(
                                                            'room',
                                                            'de'
                                                        )
                                                    }
                                                >
                                                    —
                                                </button>
                                                <span className='optionCouterNum'>
                                                    {options.room}
                                                </span>
                                                <button
                                                    className='optionCouterBtn'
                                                    onClick={() =>
                                                        handleOption(
                                                            'room',
                                                            'in'
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='headerSearchItem'>
                                <button
                                    className='headerBtn'
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
