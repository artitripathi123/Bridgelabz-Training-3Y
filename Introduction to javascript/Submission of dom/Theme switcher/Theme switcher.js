
function changeTheme(theme) {

    // Apply theme class using setAttribute
    document.body.setAttribute("class", theme);

    // Save selected theme
    document.body.setAttribute("data-theme", theme);

    console.log("Current Theme:", theme);
}
