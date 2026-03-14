document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach(function (popoverTriggerEl) {
    new bootstrap.Popover(popoverTriggerEl);
  });

  console.log('Bootstrap 5 Mini Drills loaded successfully!');
});
