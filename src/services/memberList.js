import {
    db
} from '../firebase'


class MemberListService {
    async getAllMembers() {
        const collectionList = await db.collection('MembersList_Dev').get()
        const list = []
        collectionList.docs.forEach(item => {
            list.push(item.data())
        })

        return list
    }
}


export default new MemberListService();