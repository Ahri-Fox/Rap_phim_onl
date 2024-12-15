import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }
    dangNhap = (thongTinDangNhap) => {
        return this.post('QuanLyNguoiDung/DangNhap', thongTinDangNhap)
    }
    layThongTinNguoiDung = () => {
        return this.post('QuanLyNguoiDung/ThongTinTaiKhoan')
    }
    dangKy = (thongTinDangky) => {
        return this.post('QuanLyNguoiDung/DangKy', thongTinDangky)
    }
    layDanhSachNguoiDung = (hoTen = '') => {
        if (hoTen !== '') {
            return this.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${hoTen}`)
        }
        return this.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }
    layDanhSachLoaiNguoiDung = () => {
        return this.get('QuanLyNguoiDung/LayDanhSachLoaiNguoiDung')
    }
    themNguoiDung = (thongTinNguoiDung) => {
        return this.post(`QuanLyNguoiDung/ThemNguoiDung`, thongTinNguoiDung)
    }
    xoaNguoiDung = (taiKhoan) => {
        return this.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }

}

export const quanLyNguoiDungService = new QuanLyNguoiDungService()