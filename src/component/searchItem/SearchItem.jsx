import './searchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        src='https://t-cf.bstatic.com/xdata/images/hotel/square200/357192189.webp?k=d572ee031a15b95c2521b09ada5f8409245c945be1819ad1bfbac92885a400d6&o=&s=1'
        alt=''
        className='siImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>Delen Houses</h1>
        <span className='siDistance'>1.3 km from center</span>
        <span className='siTaxiOp'>Free Airport taxi</span>
        <span className="siSubtitle">Villa with Garden View</span>
        <span className='siFeature'>
        Entire villa • 3 bedrooms • 3 bathrooms • 300m²
        </span>
        <span className='siFeature'>4 beds (2 fulls, 2 queens)</span>
        <span className='siCancleOp'>Free cancellation</span>
        <span className='siCancelOpSubtitle'>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='siDetails'>
        <div className="siRating">
          <span>Exellent</span>
          <button>9.0</button>
        </div>
        <span className="siReview">Comfort 10</span>
        <div className="siDetailTexts">
          <span className="siPrice">VND 116,999,970</span>
          <span className="siTaxOp">Include taxes and fees</span>
          <button className="siCheckBtn">See availability</button>

        </div>
      </div>
    </div>
  );
};

export default SearchItem;
