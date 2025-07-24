document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const targets = document.querySelectorAll('.target');
  const feedback = document.getElementById('feedback');
  let draggedItem = null;

  // Eventos para los elementos arrastrables
  items.forEach(item => {
    item.addEventListener('dragstart', () => {
      draggedItem = item;
      draggedItem.classList.remove('correct');
      draggedItem.classList.remove('incorrect');
      setTimeout(() => item.style.opacity = '0.4', 0);
    });

    item.addEventListener('dragend', () => {
      setTimeout(() => item.style.opacity = '1', 0);
    });
  });

  // Eventos para los objetivos
  targets.forEach(target => {
    target.addEventListener('dragover', e => {
      e.preventDefault();
      target.classList.add('highlight');
    });

    target.addEventListener('dragleave', () => {
      target.classList.remove('highlight');
    });

    target.addEventListener('drop', () => {
      target.classList.remove('highlight');
      if (draggedItem.dataset.match === target.dataset.match) {
        draggedItem.classList.add('correct');
        feedback.textContent = '¡Correcto!';
        feedback.style.color = '#2e7d32';
      } else {
        draggedItem.classList.add('incorrect');
        feedback.textContent = 'Incorrecto, intenta de nuevo.';
        feedback.style.color = '#c62828';
      }
    });
  });
});