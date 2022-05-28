import './homefeatured.css';

const HomeFeatured = () => {
  return (
    <div className='hf'>
      <div className='hfItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/hotel/max500/103951224.jpg?k=03736dd4e1e89c1132e4957149e394d01ac6e8f64f4b09e30ade97a6176f0640&o='
          alt=''
          className='hfImg'
        />
        <span className='hfName'>Aparthotel Stare Miasto</span>
        <span className='hfCity'>Krakow</span>
        <span className='hfPrice'>Starting from VND 1,923,676</span>
        <div className='hfRating'>
          <button>8.8</button>
          <span>Excellent</span>
          <span className='hfReview'>2,243 reviews</span>
        </div>
      </div>

      <div className='hfItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/hotel/max500/16379302.jpg?k=55494e13bb009658f0b7114e816e647c36c26851bf214b6fbc2f05558f9edf86&o='
          alt=''
          className='hfImg'
        />
        <span className='hfName'>Villa Domina</span>
        <span className='hfCity'>Split</span>
        <span className='hfPrice'>Starting from VND 1,672,000</span>
        <div className='hfRating'>
          <button>9.5</button>
          <span>Exceptional</span>
          <span className='hfReview'>1,928 reviews</span>
        </div>
      </div>

      <div className='hfItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o='
          alt=''
          className='hfImg'
        />
        <span className='hfName'>Sugar Loft Apartments</span>
        <span className='hfCity'>Rio de Janeiro</span>
        <span className='hfPrice'>Starting from VND 1,123,874</span>
        <div className='hfRating'>
          <button>9.1</button>
          <span>Wonderful</span>
          <span className='hfReview'>298 reviews</span>
        </div>
      </div>

      <div className='hfItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/hotel/max500/80970678.jpg?k=5522889e6ffe1e96899b9e82cee9a7653af667b6892383a42820c64acdacdae3&o='
          alt=''
          className='hfImg'
        />
        <span className='hfName'>Habitat Apartments Bruc Terrace</span>
        <span className='hfCity'>Barcelona</span>
        <span className='hfPrice'>Starting from VND 37,813,665</span>
        <div className='hfRating'>
          <button>7.3</button>
          <span>Good</span>
          <span className='hfReview'>43 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;
