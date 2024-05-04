
    // Sélectionnez l'élément avec l'ID "currentYear"
    const currentYearElement = document.getElementById("currentYear");

    // Récupérez l'année actuelle
    const currentYear = new Date().getFullYear();

    // Insérez l'année actuelle dans l'élément
    currentYearElement.textContent = currentYear;

