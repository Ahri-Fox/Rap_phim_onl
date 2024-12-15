import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { GROUPID } from '../../../../util/settings/config';
import { capNhatPhimUploadAction, layThongTinPhimhAction } from '../../../../redux/actions/QuanLyPhimActions';
const EditFilm = (props) => {
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState('');
    const dispatch = useDispatch();
    const { thongTinPhim } = useSelector(state => state.QuanLyPhimReducer)
    useEffect(() => {
        let { id } = props.match.params
        dispatch(layThongTinPhimhAction(id))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: thongTinPhim.maPhim,
            tenPhim: thongTinPhim.tenPhim,
            trailer: thongTinPhim.trailer,
            moTa: thongTinPhim.moTa,
            ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
            dangChieu: thongTinPhim.dangChieu,
            sapChieu: thongTinPhim.sapChieu,
            hot: thongTinPhim.hot,
            danhGia: thongTinPhim.danhGia,
            hinhAnh: null,

        },
        onSubmit: (values) => {
            console.log('values', values);
            values.maNhom = GROUPID;
            //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null)
                        formData.append('File', values.hinhAnh, values.hinhAnh.name);
                }
                // console.log('formData', formData.get(key))
            }
            dispatch(capNhatPhimUploadAction(formData))


        }
    })

    // const handleChangeDatePicker = (value) => {
    //     // console.log('datepickerchange',);
    //     let ngayKhoiChieu = moment(value);
    //     formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);

    // }

    const handleChangeDatePicker = (value) => {
        // console.log('datepickerchange',);
        if (value && value.isValid()) {
            let ngayKhoiChieu = value.format('DD/MM/YYYY');
            formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
        } else {
            console.error('Invalid date value:', value);
        }

    }

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    const handleChangeFile = async (e) => {
        //Lấy file từ e
        let file = e.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
            await formik.setFieldValue('hinhAnh', file)
            // Tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                // console.log(e.target.result)
                setImgSrc(e.target.result)
            }
        }

    }

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };


    return (
        <>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <h3>Chỉnh sửa phim </h3>

                <Form.Item label="Tên phim">
                    <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} defaultValue={moment(formik.values.ngayKhoiChieu)} />
                </Form.Item>
                <Form.Item label="Đang chiếu" >
                    <Switch onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
                </Form.Item>
                <Form.Item label="Sắp chiếu">
                    <Switch onChange={handleChangeSwitch('sapChieu')} checked={formik.values.sapChieu} />
                </Form.Item>
                <Form.Item label="Hot">
                    <Switch onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
                </Form.Item>

                <Form.Item label="Số sao">
                    <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} value={formik.values.danhGia} />
                </Form.Item>

                <Form.Item label="Hình ảnh">
                    <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg,image/gif,image/png" />
                    <br />
                    <img style={{ width: 150, height: 150 }} src={imgSrc === '' ? thongTinPhim.hinhAnh : imgSrc} alt={imgSrc} />


                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button type="submit" className="bg-blue-300 text-white p-2">Thêm phim</button>
                </Form.Item>
            </Form>
        </>
    )
}

export default EditFilm
