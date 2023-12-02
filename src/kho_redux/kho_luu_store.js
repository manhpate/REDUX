import { createStore } from 'redux'; //import createStore từ redux để tạo kho
import rootReducer from './giam_toc_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
/***
 * 
 * rootReducer là func để cập nhật lại state
 * initValue nhận giá trị mặc định
 * enhancers : dùng để cấu hình middware
 */
const guiDiEnhancers = composeWithDevTools();
const store = createStore(rootReducer, guiDiEnhancers); //nếu có giá trị khởi tạo thì cho giá trị khởi tạo làm tham số thứ 2, guiDiEnhancers thành số 3

export default store;