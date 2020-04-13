import Constant from '../Constant';

//상태를 변경하는 기능만을 뽑아서...
export default {
    [Constant.FETCH_CONTACTS]: (state, payload) => {
        state.contactlist = payload.contactlist;
    },
    [Constant.FETCH_CONTACT_ONE]: (state, payload) => {
        state.contact = payload.contact;
    },
    [Constant.INITIALIZE_CONTACT_ONE]: (state) => {
        state.contact = { no: null, name: null, tel: null, address: null, photo: null };
    },
    [Constant.CHANGE_ISLOADING]: (state, payload) => {
        state.isloading = payload.isloading;
    }
}