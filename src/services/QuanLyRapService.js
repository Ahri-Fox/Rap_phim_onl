import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyRapService extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }
    layDanhSachHeThongRap = () => {
        return this.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
    layThongTinHeThongRap = () => {
        return this.get(`QuanLyRap/LayThongTinHeThongRap`)
    }
    layThongTinCumRap = (maHeThongRap) => {
        return this.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    }


}

export const quanLyRapService = new QuanLyRapService()