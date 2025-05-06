// src/assets/gallery.js
export const handsoffFotos = Object.values(
    import.meta.glob(
      '../assets/images/projetos/Handsoff/*.{png,jpg,jpeg,svg,gif}',
      { eager: true, as: 'url' }
    )
  );

  
export const empreenderFotos = Object.values(
    import.meta.glob(
      '../assets/images/projetos/Empreender/*.{png,jpg,jpeg,svg,gif}',
      { eager: true, as: 'url' }
    )
  );

  