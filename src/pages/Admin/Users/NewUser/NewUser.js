import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { Form, Input, Select } from 'antd';
import { GROUPID } from '../../../../util/settings/config';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachLoaiNguoiDungAction, themNguoiDungAction } from '../../../../redux/actions/QuanLyNguoiDungActions';

export default function NewUser(props) {
    const { arrLoaiNguoiDung, thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
    const dispatch = useDispatch()
    console.log('thongTinNguoiDung', thongTinNguoiDung)




    useEffect(() => {
        dispatch(layDanhSachLoaiNguoiDungAction())
    }, [])

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: GROUPID,
            maLoaiNguoiDung: "",
            hoTen: ""

        },
        onSubmit: (values) => {
            values.maNhom = GROUPID;
            console.log('values', values);
            dispatch(themNguoiDungAction(values))
        }
    })

    const handleChangeLoainguoiDung = (value) => {
        formik.setFieldValue('maLoaiNguoiDung', value)
    }

    return (
        <div className='container'>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
            >
                <h3 className="text-2xl p-2">Thêm mới người dùng </h3>
                <Form.Item label="Họ tên">
                    <Input name="hoTen" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="tài khoản">
                    <Input name="taiKhoan" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="email">
                    <Input type='email' name="email" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Số điện thoại">
                    <Input name="soDt" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Mật Khẩu">
                    <Input type='password' name="matKhau" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Loại Người dùng">
                    <Select options={arrLoaiNguoiDung?.map((loaiNguoiDung, index) => ({ label: loaiNguoiDung.tenLoai, value: loaiNguoiDung.maLoaiNguoiDung }))} onChange={handleChangeLoainguoiDung} placeholder='Chọn loại người dùng' />
                </Form.Item>

                <Form.Item label="Tác vụ">
                    <button type="submit" className="bg-blue-300 text-white p-2">Thêm người dùng</button>
                </Form.Item>
            </Form>
        </div>
    )
}
