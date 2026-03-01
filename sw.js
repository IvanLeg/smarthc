self.addEventListener('fetch', (event) => {
  // Estrategia: Ir a la red por defecto
  event.respondWith(fetch(event.request));
});


