<template>
    <div class="flex flex-col bg-white py-5 px-10 rounded-md">
        <h1 class="text-md font-semibold">Sub menu</h1>
        <hr class="my-5" />
        <div class="w-full border-2 px-4 py-2 rounded-md border-slate-300">
            <input type="text" name="todo" id="todo" placeholder="Enter student name..." class="w-full placeholder:italic focus:outline-none text-slate-400" @keypress.enter="addData" v-model="todoText1">
        </div>

        <div class="mt-10">
            <h1 class="text-md font-semibold">Sub's data</h1>
            <hr class="my-5" />
            
            <div class="flex justify-between space-x-3 mb-4" v-for="(todo, index) in todos" :key="index">
                <div class="flex border-2 px-4 py-2 rounded-md border-slate-300 w-full">
                    <input type="text" name="todo" id="todo" placeholder="Empty name..." class="placeholder:italic focus:outline-none w-full" v-model="todo.name">
                </div>
                <div class="flex space-x-2">
                    
                    <button type="button" class="px-4 bg-yellow-500 rounded-md text-white font-medium hover:bg-yellow-700" @click="updateData(todo.id, todo.name)">
                        <font-awesome-icon icon="fa-solid fa-pencil" />
                    </button>

                    <button type="button" class="px-4 bg-red-500 rounded-md text-white font-medium hover:bg-red-700" @click="deleteData(todo.id)">
                        <font-awesome-icon icon="fa-solid fa-trash-can" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { collection, addDoc, onSnapshot, query, orderBy, deleteDoc, doc } from "firebase/firestore";
    import { db } from "../firebase";
    
    // let url = window.location.href.split('/').pop();
    // unsubscribe();
    // console.log(route.params.id)
    const todoText1 = ref("");
    const todos = ref([]);
    const route = useRoute();
    
    onMounted(async() => {
        const q = query(collection(db, "menu/"+route.params.id+"/children"), orderBy("created_at", "asc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let getTodo = [];
            querySnapshot.forEach((doc) => {
                const todo = {
                    id: doc.id,
                    name: doc.data().name,
                    created_at: doc.data().created_at
                }
                getTodo.push(todo);
            });
            todos.value = getTodo;
            console.log(route.params.id)
        });
    });

    function addData() {
        if(todoText1.value == "") {
            alert("Sorry your input is empty, please fill in before inputting !")
        } else {
            const docRef = addDoc(collection(db, "menu/"+route.params.id+"/children"), {
                name: todoText1.value,
                created_at: new Date()
            });
            todoText1.value = "";
        }
    }

    function deleteData(id) {
        deleteDoc(doc(db, "menu/"+route.params.id+"/children", id));
    }
        
    function completedData(id, completed) {
        if(completed == true) {
            updateDoc(doc(db, "todos", id), {
                completed: false,
                update_at: new Date()
            });
        } else {
            updateDoc(doc(db, "todos", id), {
                completed: true,
                update_at: new Date()
            });
        }
    }
</script>

<style>

</style>