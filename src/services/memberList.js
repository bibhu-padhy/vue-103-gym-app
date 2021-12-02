import {
    db
} from '../firebase'


class MemberListService {
    async getAllMembers() {
        const collectionList = await db.collection('MembersList_Dev').get()
        const list = []
        collectionList.docs.forEach(item => {
            console.log(item.id);
            list.push({
                ...item.data(),
                id: item.id
            })
        })

        return list
    }

    async addMember(member) {
        return await db.collection('MembersList_Dev')
            .add(member)
    }
}


export default new MemberListService();