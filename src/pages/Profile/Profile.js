import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import { HomeOutlined, } from '@ant-design/icons'
import { TOKEN, USER_LOGIN } from '../../util/settings/config';
import { history } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungActions';

export default function Profile(props) {
    const dispatch = useDispatch()
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
    console.log('thongTinNguoiDung', thongTinNguoiDung)
    useEffect(() => {
        dispatch(layThongTinNguoiDungAction())
    }, [])
    return (
        <div className="bg-white max-w-full shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <div className="text-right" ><NavLink to="/"><HomeOutlined style={{ marginLeft: 10, fontSize: 25 }} /></NavLink></div>
                <h3 className="text-center text-4xl text-gray-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">
                    Thông tin cá nhân
                </h3>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className='grid md:grid-cols-2 md:gap-6'>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500 ">
                                Họ tên:
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {thongTinNguoiDung.hoTen}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500 ">
                                Số điện thoại:
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {thongTinNguoiDung.soDT}
                            </dd>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 md:gap-6'>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500 ">
                                Địa chỉ email:
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {thongTinNguoiDung.email}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500 ">
                                Mật khẩu :
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {thongTinNguoiDung.matKhau}
                            </dd>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 md:gap-6'>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500 ">
                                Mã nhóm:
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {thongTinNguoiDung.maNhom}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500 ">
                                Loại người dùng :
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {thongTinNguoiDung.loaiNguoiDung}
                            </dd>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Chỉnh sửa</button>
                        <button onClick={() => {
                            localStorage.removeItem(USER_LOGIN);
                            localStorage.removeItem(TOKEN);
                            history.push('/home');
                            window.location.reload();
                        }} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Đăng xuất</button>
                    </div>

                </dl>
            </div>
        </div>


    )
}

