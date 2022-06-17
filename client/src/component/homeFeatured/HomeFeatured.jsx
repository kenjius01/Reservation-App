import './homefeatured.css';
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';

const HomeFeatured = () => {
    const { data, loading, error } = useFetch('/hotels?featured=true&limit=4');
    useEffect(() => {
        if (error.length > 0) console.log(error);
    }, [error]);

    return (
        <div className='hf'>
            {loading ? (
                'Loading...'
            ) : (
                <>
                    {data.map((item) => (
                        <div key={item._id} className='hfItem'>
                            <img
                                src={
                                    item.photos[0] ??
                                    'https://t-cf.bstatic.com/xdata/images/hotel/max500/103951224.jpg?k=03736dd4e1e89c1132e4957149e394d01ac6e8f64f4b09e30ade97a6176f0640&o='
                                }
                                alt=''
                                className='hfImg'
                            />
                            <span className='hfName'>{item.name}</span>
                            <span className='hfCity'>{item.city}</span>
                            <span className='hfPrice'>
                                Starting from VND {item.cheapestPrice}
                            </span>
                            {item.rating && (
                                <div className='hfRating'>
                                    <button>{item.rating}</button>
                                    <span>Excellent</span>
                                    <span className='hfReview'>
                                        2,243 reviews
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default HomeFeatured;
