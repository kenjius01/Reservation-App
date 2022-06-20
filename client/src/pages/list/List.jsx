import './list.css';
import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import MailList from '../../component/mailList/MailList';

import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../component/searchItem/SearchItem';
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';

const List = () => {
    const [openDate, setOpenDate] = useState(false);
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [dates, setDates] = useState(location.state.dates);
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(99999999999);

    const { data, loading, error, reFetch } = useFetch(
        `/hotels?city=${destination}&min=${min}&max=${max}`
    );
    const { dispatch } = useContext(SearchContext);

    useEffect(() => {
        if (error.length > 0) console.log(error);
    }, [error]);

    const handleClick = () => {
        dispatch({
            type: 'NEW_SEARCH',
            payload: { destination, dates, options },
        });
        console.log(typeof(options.room));
        reFetch();
        
    };
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
                            <input
                                value={destination ?? destination}
                                type='text'
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                        <div className='lsItem'>
                            <label htmlFor=''>Check-in date</label>
                            <span
                                onClick={() => setOpenDate(!openDate)}
                            >{`${format(
                                dates[0].startDate,
                                ' MMM dd, yyyy'
                            )} —   ${format(
                                dates[0].endDate,
                                'MMM dd, yyyy'
                            )}`}</span>
                            {openDate && (
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) =>
                                        setDates([item.selection])
                                    }
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
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
                                    <input
                                        min={1}
                                        type='number'
                                        name=''
                                        id=''
                                        onChange={(e) => setMin(e.target.value)}
                                    />
                                </div>

                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>
                                        Max price <small>(per night)</small>
                                    </span>
                                    <input
                                        min={1}
                                        type='number'
                                        name=''
                                        id=''
                                        onChange={(e) => setMax(e.target.value)}
                                    />
                                </div>

                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>Adults</span>
                                    <input
                                        type='number'
                                        min={1}
                                        placeholder={options.adults}
                                        onChange={(e) =>
                                            setOptions({
                                                ...options,
                                                adults: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>
                                        Children
                                    </span>
                                    <input
                                        type='number'
                                        min={0}
                                        placeholder={options.children}
                                        onChange={(e) =>
                                            setOptions({
                                                ...options,
                                                children: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'> Room</span>
                                    <input
                                        type='number'
                                        min={1}
                                        placeholder={options.room}
                                        onChange={(e) =>
                                            setOptions({
                                                ...options,
                                                room: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick}>Search</button>
                    </div>
                    <div className='listResult'>
                        {loading ? (
                            'loading'
                        ) : (
                            <>
                                {data.length > 0 &&
                                    data.map((item) => (
                                        <SearchItem
                                            key={item._id}
                                            item={item}
                                        />
                                    ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <MailList />
            <Footer />
        </div>
    );
};

export default List;
