
/***
 *  giá trị mặc định của state là initState 
 * (tất cả cái này liên quan đến dữ liệu)
 */
const initState = [
    { id: 1, ten: 'Học Yoga', chuaHoanThanh: false, mucDo: "bình thường" },
    { id: 2, ten: 'Học redux', chuaHoanThanh: true, mucDo: "khó" },
    { id: 3, ten: 'Học java', chuaHoanThanh: false, mucDo: "de" },
];




/*** {
     *      type: "themCacMuc/them",
     *      payload: { id: 5, ten: 'Học ngu si', chuaHoanThanh: false, mucDo: "binh thuong" },
     *   }
     */
const todoListReduser = (state = initState, action) => {
    console.log({ state, action })
    switch (action.type) {
        case 'themCacMuc/them':
            return [...state, action.payload];

        // return {
        //     ...state,
        //     themCacMuc: [
        //         ...state.themCacMuc,
        //         action.payload// { id: 5, ten: 'Học ngu si', chuaHoanThanh: false, mucDo: "binh thuong" },
        //     ]
        // }
        default:
            return state;
    }
}

export default todoListReduser;