function toggleDetails(planId) {
    var details = document.getElementById(planId + '-details');
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
}
