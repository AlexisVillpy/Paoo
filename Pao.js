// Pao.js
function respuesta(mensaje) {
    const emojis = {
      'Aniversario = 25/10/2024 ❤️': '🎉🎊', // Mapea el mensaje a un emoji
      'Tenes que poner que SI 🤭': ''
    };
    alert(`${mensaje} ${emojis[mensaje] || ''}`); // Agrega un fallback si el mensaje no está en el objeto
}
