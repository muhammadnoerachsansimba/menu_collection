<template>
    <div class="flex flex-col bg-pink-400 pt-10">
        <div class="flex flex-col mb-8 px-10">
            <h1 class="font-dancing font-bold text-5xl text-white"><router-link to="/">Sidebar</router-link></h1>
        </div>
        <div class="flex flex-col w-full text-white text-poppins text-md font-semibold" v-for="(todo, index) in todos" :key="index">
            <!-- <router-link to="/" class="py-2 px-10 hover:bg-white hover:text-pink-400" :class="active == '' ? 'bg-white text-pink-400' : ''" @click="active = ''">Todo Students</router-link>
            <router-link to="/lecturers" class="py-2 px-10 hover:bg-white hover:text-pink-400" :class="active == 'lecturers' ? 'bg-white text-pink-400' : ''" @click="active = 'lecturers'">Todo Lecturers</router-link>
            <router-link to="/subjects" class="py-2 px-10 hover:bg-white hover:text-pink-400" :class="active == 'subjects' ? 'bg-white text-pink-400' : ''" @click="active = 'subjects'">Todo Subjects</router-link> -->
            <router-link :to="'/'+todo.id" class="py-2 px-10 hover:bg-white hover:text-pink-400" :class="active == todo.id ? 'bg-white text-pink-400' : ''" @click="active = todo.id">{{ todo.name }}</router-link>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { collection, onSnapshot, orderBy, query  } from '@firebase/firestore';
    import { db } from '../firebase';

    let url = window.location.href.split('/').pop();
    const active = ref(url);
    const todos = ref([]);
    
    // console.log(url);
    
    onMounted(async() => {
        const q = query(collection(db, "menu"), orderBy("name", "asc"));
        const unsubscribe = onSnapshot(q, (results) => {
            let getTodo = [];
            results.forEach((doc) => {
                const result = {
                    id: doc.id,
                    name: doc.data().name,
                    created_at: doc.data().created_at
                }
                getTodo.push(result)
            });
            todos.value = getTodo;
        });
    });

</script>

<style>

</style>