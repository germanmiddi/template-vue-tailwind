<template>

<div class="min-h-screen flex flex-col justify-between text-gray-600 font-body">
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


  <main class="flex flex-grow items-stretch">
    
    <!-- SIDEBAR     -->
    <div class="sidebar bg-dark-default text-white w-64 " v-if="showSidebar">
      <div class="sidebar-content">
        <!-- MAIN NAVIGATION -->
        <div>
          <ul class="nav-sidebar">
            <li class="nav-item-header py-3 px-5"><div class="text-xs text-gray-400">MAIN</div></li>
            <li class="nav-item">
              <a class="nav-link flex py-3 px-5 items-center bg-primary-400 hover:bg-dark-800" href="">
                <i class="nav-icon mr-5 "><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg></i>
                <span class="nav-label font-medium text-sm">Favoritos</span>
              </a>   
            </li>
            <li class="nav-item">
              <a class="nav-link flex py-3 px-5 items-center hover:bg-dark-800" href="">
                <i class="nav-icon mr-5 ">
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </i> 
                  <span class="nav-label font-medium text-sm">Agenda</span>
              </a>   
            </li>
            <li class="nav-item ">
              <a class="nav-link flex py-3 px-5 items-center hover:bg-dark-800" href="">
                <i class="nav-icon mr-5 ">
                  <!-- <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg> -->
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </i>
                <span class="nav-label font-medium text-sm">Portfolio</span>
              </a>   
            </li>
            <li class="nav-item">
              <a class="nav-link flex py-3 px-5 items-center hover:bg-dark-800" href="">
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
    <!-- / SIDEBAR     -->
    
    <!-- MAIN CONTENT -->
    <div class="content-wrapper flex flex-col bg-gray-light w-full">
      <!-- PAGE HEADER -->
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
      <!-- / PAGE HEADER -->

      <!-- CONTENT -->
      <div class="content flex-grow flex flex-col justify-between">
        <div>
        <!-- CARD -->
        <div class="card w-auto border rounded bg-white m-5 text-black-333">
          <div class="card-header text-lg px-5 py-4">
            <div>Card Title</div> 
          </div>
          <div class="card-body px-5 pb-5 text-tiny">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis fugit sequi veritatis alias ipsa voluptatum temporibus eveniet perferendis eligendi soluta.
          </div>
          <div class="table-responsive w-full border-t border-gray-300">
						<table class="table w-full text-black-333 text-sm">
							<thead>
								<tr class="table-row text-left text-sm">
									<th class="py-3 px-5 border-b border-gray-400">#</th>
									<th class="py-3 px-5 border-b border-gray-400">First Name</th>
									<th class="py-3 px-5 border-b border-gray-400">Last Name</th>
									<th class="py-3 px-5 border-b border-gray-400">Username</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">1</td>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">Eugene</td>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">Kopyov</td>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">@Kopyov</td>
								</tr>
								<tr>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">2</td>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">Victoria</td>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">Baker</td>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">@Vicky</td>
								</tr>
								<tr>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">3</td>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">James</td>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">Alexander</td>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">@Alex</td>
								</tr>
								<tr>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">4</td>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">Franklin</td>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">Morrison</td>
									<td class="py-3 px-5 border-b border-gray-300 text-tiny">@Frank</td>
								</tr>
							</tbody>
						</table>
					</div>



        </div>

        <div class="flex">

          <div class="card w-1/3 border rounded bg-white m-5 text-black-333 text-center" style="border-top:solid 1px #3B82F6; border-top-radius:0.25rem ">
            <div class="card-header text-lg px-5 py-4">
              <div>Buttons</div> 
            </div>
            <div class="card-body px-5 pb-5">
              <button type="button" 
                      class="text-tiny 
                          bg-blue-500 
                            font-regular 
                          text-white 
                            inline-block 
                            px-4 
                            py-2 
                            rounded
                            hover:bg-blue-600
                            focus:outline-none">
                            Default button
                </button>
            </div>
          </div> 

          <div class="card w-1/3 border rounded bg-white m-5 text-black-333 text-center" style="border-top:solid 1px #FF5722; border-top-radius:0.25rem ">
            <div class="card-header text-lg px-5 py-4">
              <div>Buttons with icon</div> 
            </div>
            <div class="card-body px-5 pb-5">
              <button type="button" 
                      class="text-tiny 
                          bg-warning-500 
                            font-regular 
                          text-white 
                            inline-block 
                            px-4 
                            py-2 
                            rounded
                            hover:bg-warning-700
                            focus:outline-none">
                            <i>
                                <svg class="w-5 h-5 inline-block mr-2 feather feather-alert-triangle" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                            </i>
                            Default button
                </button>
            </div>
          </div> 

         <div class="card w-1/3 border rounded bg-white m-5 text-black-333 text-center" style="border-top:solid 1px #DC2626; border-top-radius:0.25rem ">
            <div class="card-header text-lg px-5 py-4">
              <div>Buttons outline</div> 
            </div>
            <div class="card-body px-5 pb-5">
              <button type="button" 
                      class="text-tiny
                            border 
                            border-red-600
                            font-regular 
                          text-red-600 
                            inline-block 
                            px-4 
                            py-2 
                            rounded
                            hover:bg-red-600
                            hover:text-white
                            focus:outline-none">
                            Default button
                </button>
            </div>
          </div> 


        </div>

        <div class="fex">
          <div class="card w-1/3 border rounded bg-white m-5 text-black-333 text-center" style="border-top:solid 1px #3B82F6; border-top-radius:0.25rem ">
            <div class="card-header text-lg px-5 py-4">
              <div>Modals</div> 
            </div>
            <div class="card-body px-5 pb-5">
              <button @click="toggleModal = !toggleModal"
                      type="button" 
                      class="text-tiny 
                          bg-blue-500 
                            font-regular 
                          text-white 
                            inline-block 
                            px-4 
                            py-2 
                            rounded
                            hover:bg-blue-600
                            focus:outline-none">
                            Launch Modal
                </button>
            </div>
          </div> 
        </div>

        <!-- / CARD -->
        </div>
        <!-- MODAL -->
        <transition name="fade">
          <div v-if="toggleModal" class="origin-top ease modal fixed z-50 inset-0 flex justify-center items-center">
            <div class="modal-box bg-white mx-auto w-1/2 ">
              
              <div class="modal-header flex justify-between items-center px-5 pt-5">
              <div class="modal-title text-lg"> Modal Title</div>
              <i class="modal-close-button" @click="toggleModal = !toggleModal">
                <svg class="feather feather-x-circle w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
              </i>
              </div>
              <div class="modal-body p-5">
                  <h6 class="font-semibold mb-2">Text in a modal</h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <hr>
                  <h6 class="font-semibold mb-2">Another paragraph</h6>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              </div>
              <div class="modal-footer flex float-right items-center px-5 pb-5">
                  <a href="" 
                    class="modal-link px-4 py-2 text-sm text-blue-400"
                    @click.prevent="toggleModal = !toggleModal">
                    Close
                  </a>
                  <button @click="toggleModal = !toggleModal"
                    type="button" 
                    class="text-tiny 
                        bg-blue-500 
                          font-regular 
                        text-white 
                          inline-block 
                          px-4 
                          py-2 
                          rounded
                          hover:bg-blue-600
                          focus:outline-none">
                          Save Changes
                  </button>  
                
              </div>  
            </div>
          </div>
        </transition>

        <div v-if="toggleModal" @click="toggleModal = !toggleModal" class="absolute bg-dark-default inset-0 opacity-30"></div>
        <!-- / MODAL -->

        <!-- FOOTER -->
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
        <!-- / FOOTER -->

      </div>

      <!-- / CONTENT -->

    </div>    

    <!-- / MAIN CONTENT -->

  </main>
  <!-- <footer class="bg-blue-500 text-white">Footer</footer> -->
</div>

</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    msg: String
  },
  data: () => ({
    showSidebar: true,
    toggleModal: false,
  })
}
</script>
