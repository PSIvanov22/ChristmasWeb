document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
  
    calendar.addEventListener('click', function (event) {
      const clickedCell = event.target;
      if (clickedCell.classList.contains('day')) {
        const dayNumber = clickedCell.dataset.day;
        const notes = prompt(`Enter notes for Day ${dayNumber}:`, '');
        if (notes !== null) {
          clickedCell.textContent = notes;
        }
      }
    });
  });