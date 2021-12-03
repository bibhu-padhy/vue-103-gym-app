import {
    createStore
} from 'vuex';
import MemberListService from '../services/memberList';

const store = createStore({
    state: {
        membersList: [],
        memberDetail: null
    },
    getters: {
        memberDetail: state => id => state.memberDetail,
    },
    mutations: {
        getMembersList(state, payload) {
            console.log(payload);
            state.membersList = payload
        },
        getMemberDetail(state, id) {
            state.memberDetail = state.membersList.find(member => member.id === id);
        }
    },
    actions: {
        async getMembersList({
            commit
        }) {
            const list = await MemberListService.getAllMembers()
            commit('getMembersList', list)
        }
    }
})

export default store;

