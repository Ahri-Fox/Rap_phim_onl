import { quanLyRapService } from "../../services/QuanLyRapService"
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";


export const layDanhSachHeThongRapAction = () => {
    return async dispatch => {
        try {
            const result = await quanLyRapService.layDanhSachHeThongRap();
            // console.log('result', result.data)
            if (result.status === 200) {
                dispatch({ type: SET_HE_THONG_RAP_CHIEU, heThongRapChieu: result.data.content })
            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}

export const LayThongTinLichChieuPhimAction = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyRapService.layThongTinLichChieuPhim(id);
            // console.log('result', result.data)
            if (result.status === 200) {
                dispatch({ type: SET_CHI_TIET_PHIM, filmDetail: result.data.content })
            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}