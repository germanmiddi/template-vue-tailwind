<template>
    <div class="content-wrapper flex flex-col bg-gray-light w-full">
      <!-- PAGE HEADER -->
      <Pageheader/>
      <!-- / PAGE HEADER -->

      <!-- CONTENT -->
      <div class="content flex-grow flex flex-col justify-between">
        <div>
        <!-- CARD -->
        <div class="card w-auto ">
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
									<td class="py-3 px-5 text-tiny">4</td>
									<td class="py-3 px-5 text-tiny">Franklin</td>
									<td class="py-3 px-5 text-tiny">Morrison</td>
									<td class="py-3 px-5 text-tiny">@Frank</td>
								</tr>
							</tbody>
						</table>
					</div>



        </div>

        <div class="flex">

          <div class="card w-1/3 text-center" style="border-top:solid 1px #3B82F6; border-top-radius:0.25rem ">
            <div class="card-header text-lg px-5 py-4">
              <div>Buttons</div> 
            </div>
            <div class="card-body px-5 pb-5">
              <button type="button" class=" btn btn-primary">Default button</button>
            </div>
          </div> 

          <div class="card w-1/3 text-center" style="border-top:solid 1px #FF5722; border-top-radius:0.25rem ">
            <div class="card-header text-lg px-5 py-4">
              <div>Buttons with icon</div> 
            </div>
            <div class="card-body px-5 pb-5">
              <button type="button" class="btn btn-warning">
                    <i><svg class="w-5 h-5 inline-block mr-2 feather feather-alert-triangle" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                    </i>Default button
                </button>
            </div>
          </div> 

         <div class="card w-1/3 text-center" style="border-top:solid 1px #DC2626; border-top-radius:0.25rem ">
            <div class="card-header text-lg px-5 py-4">
              <div>Buttons outline</div> 
            </div>
            <div class="card-body px-5 pb-5">
              <button type="button" class="btn btn-outline-danger">Default button</button>
            </div>
          </div> 


        </div>

        <div class="flex">
          <div class="card w-1/3 text-center" style="border-top:solid 1px #3B82F6; border-top-radius:0.25rem ">
            <div class="card-header text-lg px-5 py-4">
              <div>Modals</div> 
            </div>
            <div class="card-body px-5 pb-5">
              <button @click="toggleModal = !toggleModal"
                      type="button" 
                      class="btn btn-primary">Launch Modal</button>
            </div>
          </div> 

          <div class="card w-1/3 text-center" style="border-top:solid 1px #3B82F6; border-top-radius:0.25rem ">
            <div class="card-header text-lg px-5 py-4">
              <div>Toast</div> 
            </div>
            <div class="card-body px-5 pb-5">
                <button @click="onClickTop"
                      type="button" 
                      class="btn btn-success">Success
                </button>

                <button @click="onClickBot"
                        type="button" 
                        class="btn btn-outline-danger">
                            <svg class="h-5 w-6 fill-current mr-2 inline-block" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path>
                            </svg>Error
                </button>             
            </div>
          </div> 

          <div class="card w-1/3 text-center" style="border-top:solid 1px #3B82F6; border-top-radius:0.25rem ">
            <div class="card-header text-lg px-5 py-4">
              <div>Modals</div> 
            </div>
            <div class="card-body px-5 pb-5">
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
        <Pagefooter/> 
        <!-- / FOOTER -->

      </div>

      <!-- / CONTENT -->

    </div>  
    

</template>

<script>
import Pageheader from './Pageheader.vue'
import Pagefooter from './Pagefooter.vue'


export default {
    name: 'Main',
    components: {
        Pageheader,
        Pagefooter
    }
}
</script>