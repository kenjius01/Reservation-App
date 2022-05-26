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

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
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
        [name]: operation === 'in' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className='header'>
      <div className={type === 'list' ? 'headerContainer listMode': 'headerContainer'}>
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
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Booking.com account
            </p>
            <button className='headerBtn'>Sign in / Register</button>

            <div className='headerSearch'>
              <div className='headerSearchItem'>
                <FontAwesomeIcon className='headerIcon' icon={faBed} />
                <input
                  type='text'
                  placeholder='Where are you going?'
                  className='headerSearchInput'
                />
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon className='headerIcon' icon={faCalendarAlt} />
                <span
                  onClick={handleOpenDate}
                  className='headerSearchText'
                >{`${format(date[0].startDate, 'eee, MMM dd')} —   ${format(
                  date[0].endDate,
                  'eee, MMM dd'
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                  />
                )}
              </div>

              <div className='headerSearchItem'>
                <FontAwesomeIcon className='headerIcon' icon={faPerson} />
                <span onClick={handleOpenOption} className='headerSearchText'>
                  {options.adults} adults &nbsp; • &nbsp; {options.children}{' '}
                  children &nbsp; • &nbsp;
                  {options.room} room
                </span>
                {openOptions && (
                  <div className='options'>
                    <div className='optionItem'>
                      <span className='optionText'>Adults</span>
                      <div className='optionCouter'>
                        <button
                          disabled={options.adults <= 1}
                          className='optionCouterBtn'
                          onClick={() => handleOption('adults', 'de')}
                        >
                          —
                        </button>
                        <span className='optionCouterNum'>
                          {options.adults}
                        </span>
                        <button
                          className='optionCouterBtn'
                          onClick={() => handleOption('adults', 'in')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Children</span>
                      <div className='optionCouter'>
                        <button
                          disabled={options.children <= 0}
                          className='optionCouterBtn'
                          onClick={() => handleOption('children', 'de')}
                        >
                          —
                        </button>
                        <span className='optionCouterNum'>
                          {options.children}
                        </span>
                        <button
                          className='optionCouterBtn'
                          onClick={() => handleOption('children', 'in')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Rooms</span>
                      <div className='optionCouter'>
                        <button
                          disabled={options.room <= 1}
                          className='optionCouterBtn'
                          onClick={() => handleOption('room', 'de')}
                        >
                          —
                        </button>
                        <span className='optionCouterNum'>{options.room}</span>
                        <button
                          className='optionCouterBtn'
                          onClick={() => handleOption('room', 'in')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='headerSearchItem'>
                <button className='headerBtn'>Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
