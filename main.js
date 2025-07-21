document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const email = document.querySelector('#email').value.trim();

    if (!nombre || !email) {
      alert('Por favor completa todos los campos.');
      return;
    }

    try {
      await simularEnvio({ nombre, email });
      alert('Formulario enviado correctamente ✅');
      form.reset();
    } catch (err) {
      alert('Error al enviar el formulario ❌');
    }
  });
});
function simularEnvio(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos éxito 80% de las veces
      if (Math.random() > 0.2) {
        console.log('Datos enviados:', data);
        resolve();
      } else {
        reject();
      }
    }, 1500);
  });
}
