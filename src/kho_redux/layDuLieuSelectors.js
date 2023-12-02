// //export const layDuLieuListThemThuMuc = (state) => state.themCacMuc;
// export const layDuLieuListThemThuMuc = (state) => { //lấy dữ liệu theo goPhimTim thôi
//     const loc_themCacMuc = state.themCacMuc.filter((item) => {
//         //return true; //hàm filter thì khi các phần tử trả về true thì push hết vào loc_themCacMuc
//         return item.ten.includes(state.cacThaoTacTimKiem.goPhimTim);
//     });
//     if (state.cacThaoTacTimKiem.goPhimTim !== "") {
//         return loc_themCacMuc;
//     } else return []
// }
// export const layInputTimKiemSelector = (state) => state.cacThaoTacTimKiem.goPhimTim;

import { createSelector } from 'reselect';
export const layDuLieuListThemThuMuc = (state) => state.themCacMuc; //addThuMuc
export const layInputTimKiemSelector = (state) => state.cacThaoTacTimKiem.goPhimTim; //searchFilterChange
export const searchTheo_mucLuaChon_Selector = (state) => state.cacThaoTacTimKiem.mucLuaChon; //searchTheo_mucLuaChon_Change

export const layDuLieu_ListThemThuMuc_Tu_TimKiem_selector = createSelector(
    layDuLieuListThemThuMuc, layInputTimKiemSelector, searchTheo_mucLuaChon_Selector,// đối số 1, đối số 2
    (list, search, mucLuaChon) => { //đối số cuối là func - có đối số - đại diện cho dữ liệu trả về của các đối số trên
        return list.filter((item) => {
            //return true; //hàm filter thì khi các phần tử trả về true thì push hết vào loc_themCacMuc
            if (mucLuaChon === "All") {
                return item.ten.includes(search);
            }
            return (item.ten.includes(search) && (mucLuaChon === "Completed" ? item.chuaHoanThanh : !item.chuaHoanThanh));

        });
    }
)
