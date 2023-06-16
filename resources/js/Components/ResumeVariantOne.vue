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
                        Aziz Mardonovich
                    </h3>
                    <p class="text-[10px] text-gray-400">
                        Laravel & Vue - Developer
                    </p>
                </main>
                <main class="flex text-xs text-gray-400 mr-16">
                    <div>
                        <h3>Addres</h3>
                    </div>
                    <div class="border-l ml-2 pl-2 ">
                        <p class="tracking-wider">Uzbekistan</p>
                        <p>Uchquduq</p>
                        <p>13-19-34</p>
                    </div>
                </main>
            </header>
            <aside class="mb-5">
                <h3 class="uppercase text-sm text-gray-600 border-b pb-1 mb-3">
                    Personal statement
                </h3>
                <p class="text-xs text-gray-400 mb-1.5 pr-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    In voluptatum sint exercitationem officiis eveniet vitae
                    at beatae aliquam amet quis similique placeat,
                </p>
                <p class="text-xs text-gray-400  pr-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    In voluptatum sint exercitationem officiis eveniet
                    at beatae aliquam amet quis similique placeat
                </p>
            </aside>
            <aside class="h-64">
                <h3 class="uppercase text-sm text-gray-600 border-b pb-1 mb-6">
                    My specialities
                </h3>
                <main class="flex flex-wrap">
                    <div class="w-20 h-20 border border-gray-400 rounded-full flex justify-center items-center relative">
                        <img src="/images/laravel.png" class="w-8 grayscale">
                        <main class="absolute left-0 w-full top-14 flex justify-center items-center flex-col">
                            <div class="w-[8px] h-[8px] bg-gray-500 rounded-full border-2 border-white"></div>
                            <aside class="h-14 border-l"></aside>
                            <p class="text-sm text-gray-400">Laravel</p>
                        </main>
                    </div>
                    <div
                        class="w-20 h-20 border border-gray-400 rounded-full flex justify-center items-center relative -left-4">
                        <img src="/images/vue.png" class="w-8 grayscale">
                        <main class="absolute left-0 w-full top-14 flex justify-center items-center flex-col">
                            <div class="w-[8px] h-[8px] bg-gray-500 rounded-full border-2 border-white"></div>
                            <aside class="h-20 border-l"></aside>
                            <p class="text-sm text-gray-400">Vue</p>
                        </main>
                    </div>
                    <div
                        class="w-20 h-20 border border-gray-400 rounded-full flex justify-center items-center relative -left-8">
                        <img src="/images/babylon.svg" class="w-14 grayscale">
                        <main class="absolute left-0 w-full top-14 flex justify-center items-center flex-col">
                            <div class="w-[8px] h-[8px] bg-gray-500 rounded-full border-2 border-white"></div>
                            <aside class="h-14 border-l"></aside>
                            <p class="text-sm text-gray-400">Babylon.js</p>
                        </main>
                    </div>
                    <div
                        class="w-20 h-20 border border-gray-400 rounded-full flex justify-center items-center relative -left-12">
                        <img src="/images/blender.png" class="w-8 grayscale">
                        <main class="absolute left-0 w-full top-14 flex justify-center items-center flex-col">
                            <div class="w-[8px] h-[8px] bg-gray-500 rounded-full border-2 border-white"></div>
                            <aside class="h-20 border-l"></aside>
                            <p class="text-sm text-gray-400">Blender</p>
                        </main>
                    </div>
                </main>
            </aside>
            <aside class="text-gray-500 pb-10">
                <h3 class="uppercase text-sm text-gray-600 border-b pb-1 mb-3">
                    Skills
                </h3>
                <div class="flex items-center justify-start  text-xs">
                    <main class="w-2/5">
                        HTML
                    </main>
                    <main class="flex items-center relative top-px">
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                    </main>
                </div>
                <div class="flex items-center  text-xs">
                    <main class="w-2/5">
                        CSS & Frameworks
                    </main>
                    <main class="flex items-center relative top-px">
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                    </main>
                </div>
                <div class="flex items-center  text-xs">
                    <main class="w-2/5">
                        CSS & Frameworks
                    </main>
                    <main class="flex items-center relative top-px">
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                    </main>
                </div>
                <div class="flex items-center  text-xs">
                    <main class="w-2/5">
                        CSS & Frameworks
                    </main>
                    <main class="flex items-center relative top-px">
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                    </main>
                </div>
                <div class="flex items-center  text-xs">
                    <main class="w-2/5">
                        CSS & Frameworks
                    </main>
                    <main class="flex items-center relative top-px">
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                    </main>
                </div>
                <div class="flex items-center  text-xs">
                    <main class="w-2/5">
                        CSS & Frameworks
                    </main>
                    <main class="flex items-center relative top-px">
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                    </main>
                </div>
                <div class="flex items-center  text-xs">
                    <main class="w-2/5">
                        CSS & Frameworks
                    </main>
                    <main class="flex items-center relative top-px">
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                    </main>
                </div>
                <div class="flex items-center  text-xs">
                    <main class="w-2/5">
                        CSS & Frameworks
                    </main>
                    <main class="flex items-center relative top-px">
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-600 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
                        <div class="rounded-full border-4 border-gray-300 shadow-xl mr-1.5"></div>
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
                            <i class="fa-solid fa-envelope mr-1"></i>
                            Strelok0493@gmail.com
                        </p>
                        <a target="_blank" href="tel:+998936600960" >
                            <i class="fa-sharp fa-solid fa-phone mr-1"></i>
                            +99893 660 09 60
                        </a>
                        <a target="_blank" href="https://t.me/ruzzifer" class="block">
                            <i class="fa-brands fa-telegram mr-1"></i> 
                            @ruzzifer
                        </a>
                    </div>
                </main>
                <div>
                    <a href="https://ruzzifer.site" class="italic">ruzzifer.site</a>
                </div>
            </header>
            <aside class="pb-6">
                <h3 class="uppercase text-sm text-gray-600 border-b pb-1 mb-5">
                    Education & Work experience
                </h3>
                <div class="border-l-2 border-gray-500 py-3 relative">
                    <span class="inline-block border-[3px] border-transparent border-b-[9px] border-b-gray-500 absolute top-[-8px] left-[-4px]"></span>
                    <main class="text-xs text-gray-400 mb-4 px-3 relative">
                        <div
                            class="w-[11px] h-[11px] bg-gray-500 rounded-full border-2 border-white absolute top-1/2 -translate-y-1/2 -left-[6px]">
                        </div>
                        <p class="text-gray-600">From september 2019 to september 2024</p>
                        <p>Business explorer</p>
                        <div>Frontend developer</div>
                    </main>
                    <main class="text-xs text-gray-400 mb-4 px-3 relative">
                        <div
                            class="w-[11px] h-[11px] bg-gray-500 rounded-full border-2 border-white absolute top-1/2 -translate-y-1/2 -left-[6px]">
                        </div>
                        <p class="text-gray-600">From september 2019 to september 2020</p>
                        <p>Business explorer</p>
                        <div>Frontend developer</div>
                    </main>
                    <main class="text-xs text-gray-400 mb-4 px-3 relative">
                        <div
                            class="w-[11px] h-[11px] bg-gray-500 rounded-full border-2 border-white absolute top-1/2 -translate-y-1/2 -left-[6px]">
                        </div>
                        <p class="text-gray-600">From september 2019 to september 2020</p>
                        <p>Business explorer</p>
                        <div>Frontend developer</div>
                    </main>
                    <main class="text-xs text-gray-400 mb-4 px-3 relative">
                        <div
                            class="w-[11px] h-[11px] bg-gray-500 rounded-full border-2 border-white absolute top-1/2 -translate-y-1/2 -left-[6px]">
                        </div>
                        <p class="text-gray-600">From september 2019 to september 2020</p>
                        <p>Business explorer</p>
                        <div>Frontend developer</div>
                    </main>
                    <main class="text-xs text-gray-400 px-3 relative">
                        <div
                            class="w-[11px] h-[11px] bg-gray-500 rounded-full border-2 border-white absolute top-1/2 -translate-y-1/2 -left-[6px]">
                        </div>
                        <p class="text-gray-600">From september 2015 to september 2019</p>
                        <div>Backend developer</div>
                        at beatae aliquam amet quis similique placeat,
                    </main>
                </div>
            </aside>
            <aside>
                <h3 class="uppercase text-sm text-gray-600 border-b pb-1 mb-3">
                    Recognitions
                </h3>
                <div class="py-3 relative">
                    <main class="flex items-center mb-5">
                        <aside class="w-1/5">
                            <img src="/images/meda2l.png" class="w-16 opacity-60">
                        </aside>
                        <div class="text-[10px] leading-3">
                            <p>The best developer in the world</p>
                            <p>The best developer in the world</p>
                            <p>The best developer in the world</p>
                        </div>
                    </main>
                    <main class="flex items-center mb-5">
                        <aside class="w-1/5">
                            <img src="/images/meda2l.png" class="w-16 opacity-60">
                        </aside>
                        <div class="text-[10px] leading-3">
                            <p>The best developer in the world</p>
                            <p>The best developer in the world</p>
                            <p>The best developer in the world</p>
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
                    <main class="w-24 h-24 flex justify-center items-center border-[8px] rounded-full border-gray-600 rotate-45">
                        <div class="-rotate-45 text-center leading-none">
                            Uzbek
                            <p class="text-[10px] text-gray-400">
                                Native
                            </p>
                        </div>

                    </main>
                    <main class="w-24 h-24 flex justify-center items-center border-[8px] rounded-full border-t-gray-600 border-r-gray-600 border-b-gray-600 rotate-45">
                        <div class="-rotate-45 text-center leading-none">
                            Russian
                            <p class="text-[10px] text-gray-400">
                                Advanced level
                            </p>
                        </div>
                    </main>
                    <main class="w-24 h-24 flex justify-center items-center border-[8px] rounded-full border-t-gray-600 rotate-45">
                        <div class="-rotate-45 text-center leading-none">
                            English
                            <p class="text-[10px] text-gray-400">
                                Basic level
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
                    <main class="w-16 h-16 flex justify-center items-center border rounded-full mb-1.5">
                        <div class="text-center leading-3 relative top-px">
                            <p><i class="fa-solid fa-message-code"></i></p>
                            <p class="text-gray-400 text-[10px]">Coding</p>
                        </div>
                    </main>
                    <main class="w-16 h-16 flex justify-center items-center border rounded-full mb-1.5">
                        <div class="text-center leading-3 relative top-px">
                            <p><i class="fa-solid fa-cube"></i></p>
                            <p class="text-gray-400 text-[10px]">3D</p>
                        </div>
                    </main>
                    <main class="w-16 h-16 flex justify-center items-center border rounded-full mb-1.5">
                        <div class="text-center leading-3 relative top-px">
                            <p><i class="fa-solid fa-gamepad-modern"></i></p>
                            <p class="text-gray-400 text-[9px]">Videogames</p>
                        </div>
                    </main>
                    <main class="w-16 h-16 flex justify-center items-center border rounded-full mb-1.5">
                        <div class="text-center leading-3 relative top-px">
                            <p> <i class="fa-duotone fa-solar-system"></i></p>
                            <p class="text-gray-400 text-[9px]">Astronomy</p>
                        </div>
                    </main>
                    <main class="w-16 h-16 flex justify-center items-center border rounded-full mb-1.5">
                        <div class="text-center leading-3 relative top-px">
                            <p><i class="fa-duotone fa-scroll"></i></p>
                            <p class="text-gray-400 text-[9px]">History</p>
                        </div>
                    </main>
                    <main class="w-16 h-16 flex justify-center items-center border rounded-full mb-1.5">
                        <div class="text-center leading-3 relative top-px">
                            <p><i class="fa-solid fa-kaaba"></i></p>
                            <p class="text-gray-400 text-[9px]">Religions</p>
                        </div>
                    </main>
                   

                </div>
            </aside>
        </footer>

        <footer class="w-full flex justify-center items-center text-gray-400 text-xs flex-col">
            <div class="w-10 border-t pb-1.5"></div>
            <span class="inline-block">
                Aziz Soliyev &copy {{new Date().getFullYear()}}
            </span>
        </footer>

    </main>
</template>

<script setup lang="ts">
function download(){
    print()
}
</script>