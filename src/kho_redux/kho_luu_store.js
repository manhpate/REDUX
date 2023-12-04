// import { createStore } from 'redux'; //import createStore từ redux để tạo kho
// import rootReducer from './giam_toc_reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'; //dữ liệu gửi store
// /***
//  * 
//  * rootReducer là func để cập nhật lại state
//  * initValue nhận giá trị mặc định
//  * enhancers : dùng để cấu hình middware
//  */

// const guiDiEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, guiDiEnhancers); //nếu có giá trị khởi tạo thì cho giá trị khởi tạo làm tham số thứ 2, guiDiEnhancers thành số 3

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import linhtinh from '../components/TodoList/TodosSlide'; // export default
import { filtersSlide } from '../components/Filters/FiltersSlide';
//nhận vào obj , không cần dùng combineReducers trong "kho_luu_store" để viết code gọn, cũng không cần composeWithDevTools để gửi đi dispart,action như ở trên
const store = configureStore({
    reducer: {
        cacThaoTacTimKiem: filtersSlide.reducer,
        themCacMuc: linhtinh.reducer,
    }
})

export default store