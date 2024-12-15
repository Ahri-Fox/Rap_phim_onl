import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { STATUS_SUCCESS } from "../../util/settings/config"
import { DANG_KY_ACTION, DANG_NHAP_ACTION, SET_DANH_SACH_LOAI_NGUOI_DUNG, SET_DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG, THEM_NGUOI_DUNG } from "../types/QuanLyNguoiDungType"
import { history } from '../../App'


export const dangNhapAction = (thongTinDangNhap) => {

    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)

            if (result.data.statusCode === STATUS_SUCCESS) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                })
            }
            history.push('/')

        } catch (error) {
            console.log('error', error)
        }
    }
}

export const dangKypAction = (thongTinDangKy) => {

    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy)

            if (result.data.statusCode === STATUS_SUCCESS) {
                dispatch({
                    type: DANG_KY_ACTION,
                    thongTinkDangKy: result.data.content
                })
                history.push('/login')
            }



        } catch (error) {
            alert(error.response.data.content)
        }
    }
}

export const layThongTinNguoiDungAction = () => {

    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung()
            if (result.data.statusCode === STATUS_SUCCESS) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                })
            }


        } catch (error) {
            console.log('error', error)
        }
    }
}

export const layDanhSachNguoiDungAction = (hoTen = '') => {

    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layDanhSachNguoiDung(hoTen)
            if (result.data.statusCode === STATUS_SUCCESS) {
                dispatch({
                    type: SET_DANH_SACH_NGUOI_DUNG,
                    arrNguoiDung: result.data.content
                })
            }

        } catch (error) {
            console.log('error', error)
        }
    }
}

export const layDanhSachLoaiNguoiDungAction = () => {

    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layDanhSachLoaiNguoiDung()
            if (result.data.statusCode === STATUS_SUCCESS) {
                dispatch({
                    type: SET_DANH_SACH_LOAI_NGUOI_DUNG,
                    arrLoaiNguoiDung: result.data.content
                })
            }

        } catch (error) {
            console.log('error', error)
        }
    }
}

export const themNguoiDungAction = (thongTinNguoiDung) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.themNguoiDung(thongTinNguoiDung)
            alert('Thêm người dùng thành công')
            history.push('/admin/users')
        } catch (error) {
            console.log('error', error)
        }
    }
}
export const xoaNguoiDungAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan)
            console.log('result', result.data.content);
            alert('Xoá người dùng thành công !');
            dispatch(layDanhSachNguoiDungAction())
        } catch (error) {
            alert(error.response.data.content)
        }
    }
}