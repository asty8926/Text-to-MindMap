<script>
    import "../app.css";
</script>

<div class="grid grid-rows-[auto,1fr,auto] min-h-screen">
    <header class="bg-black text-white py-4">
      <nav class="mx-auto px-9 flex justify-between items-center">
        Nav bar
      </nav>
    </header>
    <main class="flex-grow mx-auto flex gap-4 justify-between min-w-full items-center">
      <slot class="flex-grow p-0" />
      <aside class="bg-slate-700 text-white p-8 flex flex-col w-[20rem] h-full">
        <h2>Sidebar</h2>
        <p>Test</p>
      </aside>
    </main>
    <footer class="bg-black text-white py-4">
      <div class="mx-auto text-center">
        Footer
      </div>
    </footer>
  </div>
  

  
  
  

