import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { getCarouselAction } from '../../../../redux/actions/CarouselActions';

export default function HomeCarousel() {

    const { arrImg } = useSelector(state => state.CarouselReducer);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCarouselAction())
    }, [])

    const contentStyle = {
        height: '700px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    };


    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})`, }}>
                    <img className='w-full opacity-0' sty src={item.hinhAnh} alt={item.hinhAnh} />
                </div>
            </div>
        })
    }

    return (
        <Carousel effect="fade">
            {renderImg()}

        </Carousel>
    )
}
