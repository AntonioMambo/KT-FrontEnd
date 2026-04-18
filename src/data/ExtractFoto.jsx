
  
export const ConhecerFotos = Object.values(
    import.meta.glob(
      '../assets/Conhecer e poder/*.{png,jpg,jpeg,svg,gif}',   { eager: true, as: 'url' }
    )
  );

  export const HandsoffFotos = Object.values(
    import.meta.glob("../assets/Handsoff/*.{png,jpg,jpeg,svg,gif}", {
      eager: true,
      as: "url",
    })
  );