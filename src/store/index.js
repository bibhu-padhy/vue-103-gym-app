import {
    createStore
} from 'vuex';
import MemberListService from '../services/memberList';

const store = createStore({
    state: {
        membersList: [],
        memberDetail: null
    },
    getters: {},
    mutations: {
        async getMembersList(state) {
            state.membersList = await MemberListService.getAllMembers()
        },
        getMemberDetail(state, id) {
            state.memberDetail = state.membersList.find(member => member.id === id);
            console.log(state.memberDetail);
        }
    },
    actions: {}
})

export default store;