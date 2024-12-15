import React, { Fragment, useEffect } from 'react'
import { Button, Table, Input } from 'antd';
import { EditOutlined, SearchOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import { history } from '../../../App';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachNguoiDungAction, xoaNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungActions';
const { Search } = Input;
export default function Users(props) {



    const { arrNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction())
    }, [])
    const columns = [
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            sorter: (a, b) => {
                let taiKhoanA = a.taiKhoan.toLowerCase().trim();
                let taiKhoanB = b.taiKhoan.toLowerCase().trim();
                if (taiKhoanA > taiKhoanB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '18%'

        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            sorter: (a, b) => {
                let hoTenA = a.hoTen.toLowerCase().trim();
                let hoTenB = b.hoTen.toLowerCase().trim();
                if (hoTenA > hoTenB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '18%'
        },
        {
            title: 'Loại Người Dùng',
            dataIndex: 'maLoaiNguoiDung',
            sorter: (a, b) => {
                let maLoaiNguoiDungA = a.maLoaiNguoiDung.toLowerCase().trim();
                let maLoaiNguoiDungB = b.maLoaiNguoiDung.toLowerCase().trim();
                if (maLoaiNguoiDungA > maLoaiNguoiDungB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '18%'
        },
        {
            title: 'email',
            dataIndex: 'email',
            sorter: (a, b) => {
                let emailA = a.email.toLowerCase().trim();
                let emailB = b.email.toLowerCase().trim();
                if (emailA > emailB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '18%'
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'soDt',
            sortDirections: ['descend', 'ascend'],
            width: '18%'
        },
        {
            title: 'Hành động',
            dataIndex: 'maPhim',
            render: (text, user) => {
                return <Fragment>
                    <NavLink key={1} className=" mr-2  text-2xl" to={`/admin/users/edit/${user.taiKhoan}`}><EditOutlined style={{ color: 'blue' }} /> </NavLink>
                    <span style={{ cursor: 'pointer' }} key={2} className="text-2xl" onClick={() => {
                        //Gọi action xoá
                        if (window.confirm('Bạn có chắc muốn xoá phim ' + user.taiKhoan)) {
                            dispatch(xoaNguoiDungAction(user.taiKhoan))
                        }
                    }}><DeleteOutlined style={{ color: 'red' }} /> </span>

                </Fragment>
            },
            sortDirections: ['descend', 'ascend'],
            width: '25%'
        },
    ];
    const data = arrNguoiDung;

    const onSearch = value => {
        dispatch(layDanhSachNguoiDungAction(value))
    };

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div>
            <h3 className="text-4xl pb-5">Quản lý người dùng</h3>

            <Search className="mb-5" placeholder="input search text" enterButton={<SearchOutlined />} size="large" onSearch={onSearch} />
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'maPhim'} />
        </div>
    )
}
