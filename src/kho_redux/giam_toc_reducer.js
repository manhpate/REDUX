
// // /***
// //  *  giá trị mặc định của state là initState
// //  * (tất cả cái này liên quan đến dữ liệu)
// //  */
// // const initState = {
// //     cacThaoTacTimKiem: {
// //         goPhimTim: '',
// //         mucLuaChon: '',
// //         kieuGiaTri: []
// //     },
// //     themCacMuc: [
// //         { id: 1, ten: 'Học Yoga', chuaHoanThanh: false, mucDo: "bình thường" },
// //         { id: 2, ten: 'Học redux', chuaHoanThanh: false, mucDo: "khó" },
// //         { id: 3, ten: 'Học java', chuaHoanThanh: false, mucDo: "de" },
// //     ]
// // }





// // /*** {
// //      *      type: "themCacMuc/them",
// //      *      payload: { id: 5, ten: 'Học ngu si', chuaHoanThanh: false, mucDo: "binh thuong" },
// //      *   }
// //      */
// // const rootReducer = (state = initState, action) => {
// //     console.log({ state, action })
// //     switch (action.type) {
// //         case 'themCacMuc/them':
// //             return {
// //                 ...state,
// //                 themCacMuc: [
// //                     ...state.themCacMuc,
// //                     action.payload// { id: 5, ten: 'Học ngu si', chuaHoanThanh: false, mucDo: "binh thuong" },
// //                 ]
// //             }
// //         case 'cacThaoTacTimKiem/thaydoitimkiem':
// //             return {
// //                 ...state,
// //                 cacThaoTacTimKiem: {
// //                     ...state.cacThaoTacTimKiem,
// //                     goPhimTim: action.payload,
// //                 }
// //             }
// //         default:
// //             return state;
// //     }
// // }

// import { combineReducers } from "redux";
// import filtersReducer from "../components/Filters/FiltersSlide";
// import todoListReduser from "../components/TodoList/TodosSlide";

// // const rootReducer = (state = {}, action) => {
// //     return {
// //         cacThaoTacTimKiem: filtersReducer(state.goPhimTim, action),
// //         themCacMuc: todoListReduser(state.themCacMuc, action),
// //     }
// // }

// //Sử dụng combineReducers để viết code gọn hơn :
// const rootReducer = combineReducers({
//     cacThaoTacTimKiem: filtersReducer,
//     themCacMuc: todoListReduser,
// })
// export default rootReducer;