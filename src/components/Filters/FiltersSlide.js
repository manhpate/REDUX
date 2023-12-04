
// /***
//  *  giá trị mặc định của state là initState 
//  * (tất cả cái này liên quan đến dữ liệu)
//  */
// const initState = {
//     goPhimTim: '',
//     mucLuaChon: 'All',
//     kieuGiaTri: []
// }
// /*** {
//      *      type: "themCacMuc/them",
//      *      payload: { id: 5, ten: 'Học ngu si', chuaHoanThanh: false, mucDo: "binh thuong" },
//      *   }
//      */
// const filtersReducer = (state = initState, action) => {
//     console.log({ state, action })
//     switch (action.type) {
//         case 'cacThaoTacTimKiem/thaydoitimkiem':
//             return { ...state, goPhimTim: action.payload, };
//         case 'cacThaoTacTimKiem/searchTheo_mucChon_HoanThanh_Change':
//             return { ...state, mucLuaChon: action.payload };
//         case 'cacThaoTacTimKiem/kieuGiaTri':
//             return { ...state, kieuGiaTri: action.payload };
//         // return {
//         //     ...state,
//         //     cacThaoTacTimKiem: {
//         //         ...state.cacThaoTacTimKiem, goPhimTim: action.payload,
//         //     } 
//         // }
//         default:
//             return state;
//     }
// }

// export default filtersReducer;

import { createSlice } from '@reduxjs/toolkit';
//sửa tên filtersReducer thành 
export const filtersSlide = createSlice({ // nhận object
    name: 'cacThaoTacTimKiem', //nhận 1 cái name
    initialState: { //giá trị mặc định
        goPhimTim: '',
        mucLuaChon: 'All',
        kieuGiaTri: []
    },
    reducers: {
        thaydoitimkiem: (state, action) => { // không cần viết kiểu copy cố định
            state.goPhimTim = action.payload
        },
        searchTheo_mucChon_HoanThanh_Change: (state, action) => {
            state.mucLuaChon = action.payload
        },
        kieuGiaTri: (state, action) => {
            state.kieuGiaTri = action.payload
        }
    }
})