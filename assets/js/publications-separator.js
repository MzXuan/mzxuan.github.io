// Add separator before publications without preview
document.addEventListener('DOMContentLoaded', function() {
  const bibList = document.querySelector('.publications ol.bibliography');
  if (!bibList) return;

  const items = bibList.querySelectorAll('li');
  let firstNoPreview = null;

  items.forEach(function(li) {
    // Check if the publication entry has the no-preview-compact class
    const rowDiv = li.querySelector('.row.no-preview-compact');
    if (rowDiv) {
      li.classList.add('no-preview-item');
      if (!firstNoPreview) {
        firstNoPreview = li;
      }
    }
  });

  // Add a visual marker for the first no-preview item
  if (firstNoPreview) {
    firstNoPreview.classList.add('first-no-preview');
  }
});
