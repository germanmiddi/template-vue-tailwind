<template>

<div class="min-h-screen flex flex-col justify-between text-gray-600 font-body">
  <header class="bg-dark-light text-white h-14 border-gray-200">Header</header>

  <main class="flex flex-grow items-stretch">
    
    <!-- SIDEBAR     -->
    <div class="sidebar bg-dark-default text-white w-1/5 ">
      <div class="sidebar-content">
        <!-- MAIN NAVIGATION -->
        <div>
          <ul class="nav-sidebar">
            <li class="nav-item-header py-3 px-5"><div class="text-xs text-gray-400">MAIN</div></li>
            <li class="nav-item">
              <a class="nav-link flex py-3 px-5 items-center bg-primary-400 hover:bg-dark-800" href="">
                <i class="nav-icon mr-5 "><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg></i>
                <span class="nav-label font-medium text-sm">Item sidebar #1</span>
              </a>   
            </li>
            <li class="nav-item">
              <a class="nav-link flex py-3 px-5 items-center hover:bg-dark-800" href="">
                <i class="nav-icon mr-5 "><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg></i>
                <span class="nav-label font-medium text-sm">Item sidebar #1</span>
              </a>   
            </li>
            <li class="nav-item ">
              <a class="nav-link flex py-3 px-5 items-center hover:bg-dark-800" href="">
                <i class="nav-icon mr-5 "><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg></i>
                <span class="nav-label font-medium text-sm">Item sidebar #1</span>
              </a>   
            </li>
            <li class="nav-item">
              <a class="nav-link flex py-3 px-5 items-center hover:bg-dark-800" href="">
                <i class="nav-icon mr-5 "><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg></i>
                <span class="nav-label font-medium text-sm">Item sidebar #1</span>
              </a>   
            </li>                                    


          </ul>
        </div>
        <!-- / MAIN NAVIGATION -->        
      </div>
    </div>
    <!-- / SIDEBAR     -->

    <div class="content-wrapper flex flex-col bg-gray-light w-4/5 ">
      <div class="page-title-wrapper bg-white border-b">
        <div class="page-title items-center px-5">
          <div class="flex justify-between">
            <div class="">
                <div class="title flex items-center font-medium text-lg text-gray-900 py-8">                
                  <a href="#">
                    <svg class="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                        <path stroke-linecap="round" 
                              stroke-linejoin="round" 
                              stroke-width="2" 
                              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                  </a>
                  Home<span class="font-normal ml-1"> - Dashboard</span>
                </div>
            </div>
            <div class="header-elements self-center">
              <div class="flex justify-center">
                <a class="text-xs p-3 flex flex-col items-center" href="#">
                  <i><svg class="w-6 h-6 text-primary-400" 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" 
                                clip-rule="evenodd">
                          </path>
                      </svg></i>
                  <span class="pt-2 text-black-333">Acción 1</span></a>
                <a class="text-xs p-3 flex flex-col items-center" href="#">
                  <i><svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></i>
                  <span class="pt-2 text-black-333">Acción 2</span></a>
                <a class="text-xs p-3 flex flex-col items-center" href="#">
                  <i><svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>                    </i>
                  <span class="pt-2 text-black-333">Acción 3</span></a>                                    
              </div>
            </div>
          </div>
        </div>

        <div class="page-title-breadcrum border-t flex justify-between px-5 bg-gray-lightfa text-black-333 text-tiny">
          <div class="flex items-center">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <div class="ml-2">  Home / <span class="text-gray-400 ">Dashboard</span></div>
          </div>

          <div class="breadcrumb-elements">
            <div class="flex">
              <a href="#" class="flex items-center py-3">
                <svg class="w-5 h-5 inline-block mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                Support</a>
              <a href="#" class="flex items-center ml-5 py-3">
                <svg class="w-5 h-5 inline-block mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Contact</a>
            </div>
          </div>
          
        </div>
      </div>

      <div class="content flex-grow flex flex-col justify-between">
      <!-- <div class="content h-5/6 flex flex-col justify-between"> -->
        <div class="card w-auto border rounded bg-white p-2 m-5">
          <div class="card-title text-lg p-3">Soy un Card</div>
          <div class="card-body px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis fugit sequi veritatis alias ipsa voluptatum temporibus eveniet perferendis eligendi soluta.</div>
        </div>
        <footer class="footer bg-white border-t px-5 text-tiny flex justify-between ">
          <div class="copyright py-3 ">&#169; 2021 - Germán Middi</div>
          <div class="breadcrumb-elements">
            <div class="flex">
              <a href="#" class="flex items-center py-3">
                <svg class="w-5 h-5 inline-block mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Docs</a>
              <a href="#" class="flex items-center ml-5 py-3">
                <svg class="w-5 h-5 inline-block mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                Share</a>
            </div>
          </div>
        </footer>
      </div>

      <!-- <div class="footer">footer</div> -->
    </div>    
  </main>
  <!-- <footer class="bg-blue-500 text-white">Footer</footer> -->
</div>

</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    msg: String
  }
}
</script>
