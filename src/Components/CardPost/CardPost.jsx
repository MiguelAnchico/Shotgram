
export const CardPost = () => {
  return (
   <>
    {/* <div>
      <img src="" alt="" />
      <p>John Doe</p>
      <span>Hace 1 hora</span>
      <img src="" alt="" />
   </div>
   <div>
      <img src="" alt="" />
   </div>
   <div>
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <span>34</span><p>Me gusta</p>
      <span>102</span><p>Comentarios</p>
   </div>
   <div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste voluptates ex quisquam iusto dicta dolor repellendus officia? Veritatis, assumenda odit!</p>
   </div> */}
   <div class="post">
  <div class="post-header">
    <img src="ruta/al/avatar.png" alt="Avatar"/>
    <h2>Usuario de Instagram</h2>
  </div>
  <img src="ruta/al/foto.jpg" alt="Foto"/>
  <div class="post-footer">
    <i class="far fa-heart"></i>
    <i class="far fa-comment"></i>
    <i class="far fa-paper-plane"></i>
    <i class="far fa-bookmark"></i>
    <span>4.999 Me gusta</span>
    <p>Usuario de Instagram Esta es una descripción del post. #etiqueta1 #etiqueta2 #etiqueta3</p>
    <span>Hace 1 hora</span>
  </div>
</div>
   </>
  )
}
