import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyPhimService extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    laydanhSachBanner = () => {
        return this.get(`QuanLyPhim/LayDanhSachBanner`)
    }

    layDanhSachPhim = (tenPhim = '') => {
        if (tenPhim !== '') {
            return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP00&tenPhim=${tenPhim}`)
        }
        return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
    themPhimUpLoadHinh = (formData) => {
        return this.post(`QuanLyPhim/ThemPhimUploadHinh`, formData)
    }
    layThongTinPhim = (maPhim) => {
        return this.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }
    capNhatPhimUpload = (formData) => {
        return this.post(`QuanLyPhim/CapNhatPhimUpload`, formData)
    }
    xoaPhim = (maPhim) => {
        return this.delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
    }


}

export const quanLyPhimService = new QuanLyPhimService()