import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/city/540x270/688892.webp?k=ab98c6d1cae80333bbd3129cfeb692f9fd1b17caa359d2fb4fdf35a4160e5ccf&o='
          alt=''
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Ho Chi Minh City</h1>
          <p>5.605 properties</p>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/city/540x270/688849.webp?k=c1f2770a0c096aeb09a6956a9754abbb61b946a932601a4a02bb6aa42d7fa74a&o='
          alt=''
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Ha Noi</h1>
          <p>3.802 properties</p>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/city/540x270/688885.webp?k=e3bb191d52454bdeb0eb1055c8dbca3b85d467e19ddaaf8519c2c1c676966f89&o='
          alt=''
          className='featuredImg'
        />
        <div className='featuredTitles'>
          <h1>Hue</h1>
          <p>426 properties</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
