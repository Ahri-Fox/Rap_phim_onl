import { quanLyPhimService } from "../../services/QuanLyPhimService"
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "../types/QuanLyPhimType"
import { history } from '../../App'

export const layDanhSachPhimAction = (tenPhim = '') => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachPhim(tenPhim)
            //đưa lên reducer
            // console.log('result', result)
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const themPhimUpLoadHinhAction = (formData) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.themPhimUpLoadHinh(formData)
            // console.log('result', result)
            alert('Thêm phim Thành công')

        } catch (error) {
            console.log('error', error)
        }
    }
}


export const layThongTinPhimhAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layThongTinPhim(maPhim)
            // console.log('result', result.data.content)
            dispatch({
                type: SET_THONG_TIN_PHIM,
                thongTinPhim: result.data.content
            })

        } catch (error) {
            console.log('error', error)
        }
    }
}

export const capNhatPhimUploadAction = (formData) => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.capNhatPhimUpload(formData)

            dispatch(layDanhSachPhimAction)
            history.push('/admin/films')
        } catch (error) {
            console.log('error', error)
        }
    }
}
export const xoaPhimAction = (maPhim) => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.xoaPhim(maPhim);
            console.log('result', result.data.content);
            alert('Xoá phim thành công !');
            //Sau khi xoá load lại danh sách phim mới;
            dispatch(layDanhSachPhimAction())



        } catch (errors) {
            console.log('errors')
        }
    }
}