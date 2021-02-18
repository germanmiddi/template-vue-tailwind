<template>
        <transition name="fade">
      <div class="sidebar origin-top ease bg-dark-default text-white w-64 " v-if="showSidebar">
        <div class="sidebar-content">
          <!-- MAIN NAVIGATION -->
          <div>
            <ul class="nav-sidebar">
              <li class="nav-item-header py-3 px-5"><div class="text-xs text-gray-400">MAIN</div></li>
              <li class="nav-item">
                <a class="nav-link flex py-3 px-5 items-center bg-primary-400 hover:bg-dark-light m-1 mt-1 transition duration-500 ease-out " href="">
                  <i class="nav-icon mr-5 "><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg></i>
                  <span class="nav-label font-medium text-sm">Favoritos</span>
                </a>   
              </li>
              <li class="nav-item">
                <a class="nav-link flex py-3 px-5 items-center hover:bg-dark-light  m-1 mt-1 transition duration-500 ease-out" href="">
                  <i class="nav-icon mr-5 ">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </i> 
                    <span class="nav-label font-medium text-sm">Agenda</span>
                </a>   
              </li>
              <li class="nav-item ">
                <a class="nav-link flex py-3 px-5 items-center hover:bg-dark-light  m-1 mt-1 transition duration-500 ease-out" href="">
                  <i class="nav-icon mr-5 ">
                    <!-- <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg> -->
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </i>
                  <span class="nav-label font-medium text-sm">Portfolio</span>
                </a>   
              </li>
              <li class="nav-item">
                <a class="nav-link flex py-3 px-5 items-center hover:bg-dark-light  m-1 mt-1 transition duration-500 ease-out" href="">
                  <i class="nav-icon mr-5 ">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </i>
                  <span class="nav-label font-medium text-sm">Galería</span>
                </a>   
              </li>                                    


            </ul>
          </div>
          <!-- / MAIN NAVIGATION -->        
        </div>
      </div>
    </transition>
</template>

<script>
export default {
    name: 'Sidebar',
    data: () => ({
        showSidebar: true,
    })
}
</script>