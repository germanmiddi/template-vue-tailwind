<template>
    <header class="bg-dark-light text-white border-gray-200 flex items-center justify-between px-5 text-base">
        <div class="navbar-brand py-4 leading-4 w-64"><img class="w-20" src="https://onmedia.com.ar/wp-content/uploads/2019/08/logo-principal11111-uai-258x76.png" alt=""></div>
        <div class="navbar flex flex-grow justify-between items-center">
            <ul class="navbar-bar flex text-tiny items-center">
            <li class="navbar-item">
                <a @click.prevent="showSidebar = !showSidebar" href="" class="navbar-link">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </a>
            </li>
            </ul>
            <ul class="navbar-bar flex text-tiny items-center"> 
            <li class="navbar-item">
                <a href="" class="px-4"> Notificaciones</a>
            </li>
            <li class="navbar-item ml-4">
                <a href="" class="navbar-link flex items-center px-4">
                <svg class="w-7 h-7 text-blue-300 bg-white rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor">
                    <path fill-rule="evenodd" 
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" 
                            clip-rule="evenodd" />
                </svg><span>Hola Germán</span>
                </a>  
            
            </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Navheader'
}
</script>