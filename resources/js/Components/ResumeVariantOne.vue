<template>
    <button @click="download" class="noprint absolute bottom-4 right-4 w-24 bg-rose-600 text-white rounded-sm shadow py-1.5 hover:bg-rose-700 active:bg-rose-500 z-50">
        Print <i class="fa-regular fa-shredder ml-3"></i>
    </button>
    <main id="printer" class="flex flex-wrap items-start printpage h-[296mm] p-8 print:py-12 bg-white">
        <!--  -->
        <div class="w-1/2 pr-4">
            <header class="flex justify-between items-start h-28">
                <main>
                    <h3 class="text-gray-500 leading-none">
                        {{ user?.info.name }}
                    </h3>
                    <p class="text-[10px] text-gray-400">
                        {{ user?.info.major }}
                    </p>
                </main>
                <main class="flex text-xs text-gray-400 mr-16">
                    <div>
                        <h3>Addres</h3>
                    </div>
                    <div class="border-l ml-2 pl-2 ">
                        <p class="tracking-wider">{{ user?.info.country }}</p>
                        <p>{{ user?.info.city }}</p>
                        <p>{{ user?.info.address }}</p>
                    </div>
                </main>
            </header>
            <aside class="mb-5">
                <h3 class="uppercase text-sm text-gray-600 border-b pb-1 mb-3">
                    Personal statement
                </h3>
                <p class="text-xs text-gray-400 mb-1.5 pr-4">
                    {{ user?.info.statement }}
                </p>
            </aside>
            <aside class="min-h-[250px]">
                <h3 class="uppercase text-sm text-gray-600 border-b pb-1 mb-6">
                    My specialities
                </h3>
                <main class="flex flex-wrap">
                    <div v-for="(speciality , index) in user?.specialities"
                        :class="getLeft(index)"
                        class="w-20 h-20 mb-20 border border-gray-400 rounded-full flex justify-center items-center relative">
                        <img :style="'width:' + speciality.width" :src="'/images/'+ speciality.icon" class="grayscale">
                        <main class="absolute left-0 w-full top-14 flex justify-center items-center flex-col">
                            <div class="w-[8px] h-[8px] bg-gray-500 rounded-full border-2 border-white"></div>
                            <aside :class="{'!h-20': (index + 1)%2 == 0}" class="h-14 border-l"></aside>
                            <p class="text-sm text-gray-400">{{speciality.name}}</p>
                        </main>
                    </div>

                </main>
            </aside>
            <aside class="text-gray-500 pb-10">
                <h3 class="uppercase text-sm text-gray-600 border-b pb-1 mb-3">
                    Skills
                </h3>
                <div v-for="skill in  user?.skills" class="flex items-center justify-start  text-xs mb-0.5">
                    <main class="w-2/5">
                        {{skill.name}}
                    </main>
                    <main v-for="n in 8" class="flex items-center relative top-px">
                        <div :class="{'!border-gray-600': n <= skill.level}" class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                    </main>
                </div>
            </aside>

        </div>














        <div class="w-1/2 pl-4 text-xs text-gray-400">
            <header class="flex justify-between items-start h-28">
                <main class="flex -ml-[52px]">
                    <div>
                        <h3>Contacts</h3>
                    </div>
                    <div class="border-l ml-2 pl-2">
                        <p>
                            <i class="fa-solid fa-envelope mr-1 "></i>
                            {{ user?.info.email }}
                        </p>
                        <a target="_blank" href="tel:+998936600960" >
                            <i class="fa-sharp fa-solid fa-phone mr-1"></i>
                            {{ user?.info.phone }}
                        </a>
                        <a target="_blank" href="https://t.me/ruzzifer" class="block">
                            <i class="fa-brands fa-telegram mr-1"></i> 
                            {{ user?.info.telegram }}
                        </a>
                    </div>
                </main>
                <div>
                    <a :href="'https://'+user?.info.sitelink" class="italic">{{ user?.info.sitelink }}</a>
                </div>
            </header>
            <aside class="pb-6">
                <h3 class="uppercase text-sm text-gray-600 border-b pb-1 mb-5">
                    Education & Work experience
                </h3>
                <div class="border-l-2 border-gray-500 py-3 relative">
                    <span class="inline-block border-[3px] border-transparent border-b-[9px] border-b-gray-500 absolute top-[-8px] left-[-4px]"></span>
                    <main v-for="work in user?.works" class="text-xs text-gray-400 mb-4 px-3 relative">
                        <div
                            class="w-[11px] h-[11px] bg-gray-500 rounded-full border-2 border-white absolute top-1/2 -translate-y-1/2 -left-[6px]">
                        </div>
                        <p class="text-gray-600">
                            From
                            {{ moment(work.from).format('MMMM YYYY')}}
                            to
                            <span v-if="work.to">
                                {{moment(work.to).format('MMMM YYYY')}}
                            </span>
                            <span v-else>
                                Today
                            </span>
                        </p>
                        <div>{{work.major}}</div>
                        <p>{{work.company}}</p>
                    </main>

                </div>
            </aside>
            <aside>
                <h3 class="uppercase text-sm text-gray-600 border-b pb-1 mb-3">
                    Recognitions
                </h3>
                <div class="py-3 relative">
                    <main v-for="recognition in user?.recognitions" class="flex items-center mb-5">
                        <aside class="w-1/5">
                            <img src="/images/meda2l.png" class="w-16 opacity-60">
                        </aside>
                        <div class="text-[10px] leading-3">
                            <p class="text-gray-600">{{recognition.competition}}</p>
                            <p class="italic">{{recognition.position}}</p>
                            <p>{{recognition.location}}</p>
                        </div>
                    </main>
                </div>
            </aside>

        </div>




        <footer class="w-full flex">
            <aside class="w-1/2 text-gray-500  pr-4">
                <h3 class="uppercase text-sm text-gray-600 border-b pb-1 mb-10">
                    Language Skills
                </h3>
                <div class="flex items-center justify-between text-xs">
                    <main v-for="langskill in  user?.langskills"
                        :class="{
                            'border-t-gray-600': langskill.level > 0,
                            'border-r-gray-600': langskill.level > 1,
                            'border-b-gray-600': langskill.level > 2,
                            'border-l-gray-600': langskill.level > 3,
                        }"
                        class="w-24 h-24 flex justify-center items-center border-[8px] rounded-full border-gray-300 rotate-45">
                        <div class="-rotate-45 text-center leading-none">
                            {{langskill.name}}
                            <p class="text-[10px] text-gray-400">
                                {{langskill.levels.name}}
                            </p>
                        </div>
                    </main>
                </div>
            </aside>





            
            <aside class="w-1/2  pl-4">
                <h3 class="uppercase text-sm text-gray-600 border-b pb-1 mb-3">
                    Hobbies & Interests
                </h3>

                <div class="py-4 relative text-gray-600 flex justify-between flex-wrap">
                    <main v-for="hobby in  user?.hobbies" class="w-16 h-16 flex justify-center items-center border rounded-full mb-1.5">
                        <div class="text-center leading-3 relative top-px">
                            <p v-html="hobby.icon"></p>
                            <p class="text-gray-400 text-[10px]">{{hobby.name}}</p>
                        </div>
                    </main>
                </div>
            </aside>
        </footer>

        <footer class="w-full flex justify-center items-center text-gray-400 text-xs flex-col">
            <div class="w-10 border-t pb-1.5"></div>
            <span class="inline-block">
                Ruzzifer.site &copy {{new Date().getFullYear()}}
            </span>
        </footer>

    </main>
</template>

<script setup lang="ts">
import axios from '@/modules/axios'
import moment from 'moment'
import { ref } from 'vue'
const user = ref()
function download(){
    print()
}


function getLeft(index){
    if(index == 0) return 
    if(index == 1) return '-left-4'
    if(index == 2) return '-left-8'
    if(index == 3) return '-left-12'
}

axios.get(`user/${1}`).then(({data}) => {
    user.value = data
})
</script>