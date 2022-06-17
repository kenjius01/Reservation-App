import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
    const { data, loading, error } = useFetch(
        '/hotels/countByCity?cities=Ha Nam,Hà Nội,Hue'
    );
    useEffect(() => {
        if (error.length > 0) console.log(error);
    }, [error]);

    return (
        <div className='featured'>
            {loading ? (
                'loading... Please wating'
            ) : (
                <>
                    <div className='featuredItem'>
                        <img
                            src='https://t-cf.bstatic.com/xdata/images/city/540x270/688892.webp?k=ab98c6d1cae80333bbd3129cfeb692f9fd1b17caa359d2fb4fdf35a4160e5ccf&o='
                            alt=''
                            className='featuredImg'
                        />
                        <div className='featuredTitles'>
                            <h1>Hà Nam</h1>
                            <p>{data[0]} properties</p>
                        </div>
                    </div>
                    <div className='featuredItem'>
                        <img
                            src='https://t-cf.bstatic.com/xdata/images/city/540x270/688849.webp?k=c1f2770a0c096aeb09a6956a9754abbb61b946a932601a4a02bb6aa42d7fa74a&o='
                            alt=''
                            className='featuredImg'
                        />
                        <div className='featuredTitles'>
                            <h1>Hà Nội</h1>
                            <p>{data[1]} properties</p>
                        </div>
                    </div>
                    <div className='featuredItem'>
                        <img
                            src='https://t-cf.bstatic.com/xdata/images/city/540x270/688885.webp?k=e3bb191d52454bdeb0eb1055c8dbca3b85d467e19ddaaf8519c2c1c676966f89&o='
                            alt=''
                            className='featuredImg'
                        />
                        <div className='featuredTitles'>
                            <h1>Huế</h1>
                            <p>{data[2]} properties</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Featured;
