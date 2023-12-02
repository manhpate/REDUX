
/***
 *  giá trị mặc định của state là initState 
 * (tất cả cái này liên quan đến dữ liệu)
 */
const initState = {
    goPhimTim: '',
    mucLuaChon: 'All',
    kieuGiaTri: []
}



/*** {
     *      type: "themCacMuc/them",
     *      payload: { id: 5, ten: 'Học ngu si', chuaHoanThanh: false, mucDo: "binh thuong" },
     *   }
     */
const filtersReducer = (state = initState, action) => {
    console.log({ state, action })
    switch (action.type) {
        case 'cacThaoTacTimKiem/thaydoitimkiem':
            return { ...state, goPhimTim: action.payload, };
        case 'cacThaoTacTimKiem/searchTheo_mucLuaChon_Change':
            return { ...state, mucLuaChon: action.payload }
        // return {
        //     ...state,
        //     cacThaoTacTimKiem: {
        //         ...state.cacThaoTacTimKiem,
        //         goPhimTim: action.payload,
        //     } 
        // }
        default:
            return state;
    }
}

export default filtersReducer;