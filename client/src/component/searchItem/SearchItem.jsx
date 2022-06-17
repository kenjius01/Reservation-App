import { Link } from 'react-router-dom';
import './searchItem.css';

const SearchItem = ({ item }) => {
    return (
        <div className='searchItem'>
            <img
                src={
                    item?.photos[0] ??
                    'https://t-cf.bstatic.com/xdata/images/hotel/square200/357192189.webp?k=d572ee031a15b95c2521b09ada5f8409245c945be1819ad1bfbac92885a400d6&o=&s=1'
                }
                alt=''
                className='siImg'
            />
            <div className='siDesc'>
                <h1 className='siTitle'>{item?.name}</h1>
                <span className='siDistance'>
                    {item?.distance}m from center
                </span>
                <span className='siTaxiOp'>Free Airport taxi</span>
                <span className='siSubtitle'>Villa with Garden View</span>
                <span className='siFeature'>{item?.desc}</span>
                <span className='siCancleOp'>Free cancellation</span>
                <span className='siCancelOpSubtitle'>
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className='siDetails'>
                {item.rating && (
                    <div className='siRating'>
                        <span>Exellent</span>
                        <button>{item.rating}</button>
                    </div>
                )}
                <span className='siReview'>Comfort 10</span>
                <div className='siDetailTexts'>
                    <span className='siPrice'>VND {item?.cheapestPrice}</span>
                    <span className='siTaxOp'>Include taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className='siCheckBtn'>See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
