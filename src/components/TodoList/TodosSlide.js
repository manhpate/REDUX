
// /***
//  *  giá trị mặc định của state là initState 
//  * (tất cả cái này liên quan đến dữ liệu)
//  */
// const initState = [
//     { id: 1, ten: 'Học Yoga', chuaHoanThanh: false, mucDo: "bình thường" },
//     { id: 2, ten: 'Học redux', chuaHoanThanh: true, mucDo: "khó" },
//     { id: 3, ten: 'Học java', chuaHoanThanh: false, mucDo: "de" },
// ];
// /*** {
//      *      type: "themCacMuc/them",
//      *      payload: { id: 5, ten: 'Học ngu si', chuaHoanThanh: false, mucDo: "binh thuong" },
//      *   }
//      */
// const todoListReduser = (state = initState, action) => {
//     console.log({ state, action })
//     switch (action.type) {
//         case 'themCacMuc/them':
//             return [...state, action.payload];
//         case 'themCacMuc/selectCheckBox':
//             return state.map(item => item.id === action.payload ? { ...item, chuaHoanThanh: !item.chuaHoanThanh } : item)
//         // return {
//         //     ...state,
//         //     themCacMuc: [
//         //         ...state.themCacMuc, action.payload //{ id: 5, ten: 'Học ngu si', chuaHoanThanh: false, mucDo: "binh thuong" },
//         //     ]
//         // }
//         default:
//             return state;
//     }
// }

// export default todoListReduser;

import { createSlice } from '@reduxjs/toolkit';
export default createSlice({
    name: "themCacMuc", //tên tính năng
    initialState: [
        { id: 1, ten: 'Học Yoga', chuaHoanThanh: false, mucDo: "bình thường" },
        { id: 2, ten: 'Học redux', chuaHoanThanh: true, mucDo: "khó" },
        { id: 3, ten: 'Học java', chuaHoanThanh: false, mucDo: "de" },
    ],
    reducers: {//Các action của reducers
        them: (state, action) => {
            state.push(action.payload)
        },
        selectCheckBox: (state, action) => {
            //case 'themCacMuc/selectCheckBox':
            //   return state.map(item => item.id === action.payload ? { ...item, chuaHoanThanh: !item.chuaHoanThanh } : item)
            const mangTimDuoc_TheoID = state.find(item => item.id === action.payload); // filter(): trả về 1 mảng [] //find(): mới trả về object, tương ứng với state
            alert(JSON.stringify(mangTimDuoc_TheoID))
            mangTimDuoc_TheoID.chuaHoanThanh = !mangTimDuoc_TheoID.chuaHoanThanh;
        }
    }
})