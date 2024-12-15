import React, { Fragment, memo, useEffect } from 'react'
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { NavLink } from 'react-router-dom';
import moment from 'moment'

function HomeMenu(props) {


    const { heThongRapChieu } = props

    useEffect(() => {

    }, [])


    const renderHeThongRap = () => {
        return heThongRapChieu?.map((heThongRap, index) => {
            return <TabPane style={{ padding: '0' }} key={index} tab={<img className='rounded-full' width="50" src={heThongRap.logo} alt={heThongRap.logo} />}>
                <Tabs tabPosition='left' >
                    {heThongRap.lstCumRap?.map((cumRap, index) => {
                        return <TabPane key={index} tab={
                            <div style={{ width: '300px', display: 'flex' }}>
                                <img width="50" src='https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg' alt={heThongRap.logo} />
                                <div className='text-left ml-2'>
                                    {cumRap.tenCumRap}
                                    <p className='text-red-400'>Chi tiết</p>
                                </div>
                            </div>
                        }>
                            {cumRap.danhSachPhim.map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className='my-2' style={{ display: 'flex' }}>
                                        <div style={{ display: 'flex' }}>
                                            <img style={{ height: 75, width: 75 }} src={phim.hinhAnh} alt={phim.hinhAnh} />
                                        </div>
                                        <div className="ml-2">
                                            <h1 className="text-2xl text-green-700" >{phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }}</h1>
                                            <p>{cumRap.diaChi}</p>
                                            <div className="grid grid-cols-6 gap-6">
                                                {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                    return <NavLink className="text-2xl text-green-400" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                    </NavLink>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            })}

                        </TabPane>
                    })}
                </Tabs >
            </TabPane>
        })
    }

    return (
        <Tabs style={{ paddingLeft: '18rem' }} tabPosition='left' >
            {renderHeThongRap()}
        </Tabs >
    );
}

export default memo(HomeMenu)



