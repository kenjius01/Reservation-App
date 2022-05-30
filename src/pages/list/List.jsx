import './list.css';
import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import MailList from '../../component/mailList/MailList';


import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../component/searchItem/SearchItem';

const List = () => {
  const [openDate, setOpenDate] = useState(false);
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  // eslint-disable-next-line no-unused-vars
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label htmlFor=''>Destination</label>
              <input placeholder={destination??destination} type='text' />
            </div>
            <div className='lsItem'>
              <label htmlFor=''>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                ' MMM dd, yyyy'
              )} —   ${format(date[0].endDate, 'MMM dd, yyyy')}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>

            <div className='lsItem'>
              <label>Options</label>
              <div className='lsItemOptions'>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Min price <small>(per night)</small>
                  </span>
                  <input min={1}  type='number' name='' id='' />
                </div>

                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Max price <small>(per night)</small>
                  </span>
                  <input min={1}  type='number' name='' id='' />
                </div>

                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Adults</span>
                  <input type='number' min={1} placeholder={options.adults} />
                </div>

                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Children</span>
                  <input type='number' min={0} placeholder={options.children} />
                </div>

                <div className='lsOptionItem'>
                  <span className='lsOptionText'> Room</span>
                  <input type='number' min={1} placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className='listResult'>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>

          </div>
        </div>
        
      </div>
      <MailList/>
      <Footer/>
    </div>
  );
};

export default List;
