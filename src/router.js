import { createRouter, createWebHistory } from "vue-router";
import AddMenu from './pages/AddMenu.vue'
import SubMenu from './pages/SubMenu.vue'
// import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
// import { db } from "./firebase";
// import { ref } from "vue";

// let url = window.location.href.split('/').pop();
// let getTodo = [];
// const todos = ref([]);
// const q = query(collection(db, "menu"), orderBy('name', 'asc'));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         const todo = {
//             id: doc.id,
//             name: doc.data().name,
//             created_at: doc.data().created_at
//         }
//         getTodo.push(todo);
//     });
//     todos.value.push(getTodo)
// });
// getTodo.map(getData)
// async function getData(item) {
//     console.log(item.name)
// }

const routes = [
    {
        path: '/',
        component: AddMenu
    },
    {
        path: '/:id',
        component: SubMenu
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})
// console.log(this.$route.query.test)


export default router;