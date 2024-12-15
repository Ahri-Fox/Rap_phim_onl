import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU, SET_THONG_TIN_PHIM } from "../types/QuanLyPhimType"

const initialState = {
    arrFilm: [
    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: [],
    thongTinPhim: {}
}

export const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm
            state.arrFilmDefault = state.arrFilm;
            return { ...state }
        }
        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu);
            return { ...state }
        }
        case SET_FILM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu);
            return { ...state }
        }
        case SET_THONG_TIN_PHIM: {
            state.thongTinPhim = action.thongTinPhim;
            return { ...state }
        }

        default:
            return { ...state }
    }
}
