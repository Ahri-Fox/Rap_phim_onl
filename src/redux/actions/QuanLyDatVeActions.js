import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe"
import { quanLyDatVeService } from "../../services/QuanLyDatVeService"
import { STATUS_SUCCESS } from "../../util/settings/config"
import { CHUYEN_TAB, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeType"
import { DISPLAY_LOADING_ACTION, HIDE_LOADING_ACTION } from "./LoadingActions"



export const layChiTietPhongVeAction = (maLichChieu) => {
    return async dispatch => {
        try {
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu)
            // console.log('result', result)
            if (result.status === STATUS_SUCCESS) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }

        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async dispatch => {
        try {

            dispatch(DISPLAY_LOADING_ACTION)

            const result = await quanLyDatVeService.datVe(thongTinDatVe)
            // console.log('result', result)

            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))

            await dispatch({ type: DAT_VE_HOAN_TAT })

            await dispatch(HIDE_LOADING_ACTION)
            dispatch({ type: CHUYEN_TAB })


        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}


