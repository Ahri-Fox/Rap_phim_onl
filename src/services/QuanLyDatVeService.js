import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseService } from "./baseService";

export class QuanLyDatVeService extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }
    layChiTietPhongVe = (maLichChieu) => {
        return this.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    datVe = (thongTinDatVe = new ThongTinDatVe()) => {
        return this.post(`QuanLyDatVe/DatVe`, thongTinDatVe)
    }
    taoLichChieu = (thongTinLichChieu) => {
        return this.post(`QuanLyDatVe/TaoLichChieu`, thongTinLichChieu)
    }


}

export const quanLyDatVeService = new QuanLyDatVeService()