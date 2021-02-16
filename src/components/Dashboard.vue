<template>

<div class="min-h-screen flex flex-col justify-between text-gray-600 font-body">
  <header class="bg-dark-light text-white h-14 border-gray-200">Header</header>
  <!-- <main   class="bg-blue-600 text-white flex-grow">
    <div class="grid grid-cols-5">
      <div class="sidebar bg-red-600 grid-cols-1">
        <div class="flex align-stretch min-h-full">
          sidebar
        </div>
      </div>
      <div class="sidebar bg-red-800 col-span-4">content</div>
    </div>

  </main> -->
  <main class="flex flex-grow items-stretch">
    <div class="bg-dark-default text-white w-1/5 ">
      sidebar
    </div>
    <div class="content-wrapper bg-gray-light w-4/5 ">
      <div class="page-title-wrapper bg-white border-b">
        <div class="page-title pt-8 pb-8 px-5 font-medium text-lg text-gray-900  items-center">
          <div class="inline-flex justify-center">
            <div>Titulo de Página</div>
            <div class="header-elements">
              <div class="flex justify-center">
                <a href=""> Acción 1</a>
                <a href=""> Acción 2</a>
                <a href=""> Acción 3</a>
              </div>
            </div>
          </div>
        </div>
        <div class="page-title-breadcrum border-b border-t">Home / Pagina / Básica</div>
      </div>
      <div class="content  h-5/6">
        <div class="card w-auto border rounded bg-white p-2 m-5">
          <div class="card-title text-lg p-3">Soy un Card</div>
          <div class="card-body px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis fugit sequi veritatis alias ipsa voluptatum temporibus eveniet perferendis eligendi soluta.</div>
        </div>
      </div>
    </div>    
  </main>
  <footer class="bg-blue-500 text-white">Footer</footer>
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
