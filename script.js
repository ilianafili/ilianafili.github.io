// Function to update CSS variables for dark mode
function updateDarkModeCSSVariables() {
  // Update CSS variables for dark mode
  document.documentElement.style.setProperty('--footer-color', '#5f5f5f');
  document.documentElement.style.setProperty('--text-color', '#a0a7af');
  document.documentElement.style.setProperty('--body-background', '#1a1a1a');
  document.documentElement.style.setProperty('--header-color', '#333');
  document.documentElement.style.setProperty('--box-color', '#2d2d2d');
  document.documentElement.style.setProperty('--header-text-color', '#d6d6d6');
  document.documentElement.style.setProperty('--header-text-active-color', '#10c7af');
  document.documentElement.style.setProperty('--header-border-color', '#4d4c4c');
  document.documentElement.style.setProperty('--underline-d-color', '#4c4d4f');
  document.documentElement.style.setProperty('--underline-color', '#4d4e4f');
  document.documentElement.style.setProperty('--titles-color', 'white');
  document.documentElement.style.setProperty('--paragraph-color', '#ababab');
  document.documentElement.style.setProperty('--language-color', '#dadada');
  document.documentElement.style.setProperty('--dropdown-text-color', 'white');
  document.documentElement.style.setProperty('--dropdown-color', '#373737');
}

// Function to update CSS variables for light mode
function updateLightModeCSSVariables() {
  // Update CSS variables for light mode
  document.documentElement.style.setProperty('--footer-color', '#9f9f9f');
  document.documentElement.style.setProperty('--text-color', '#8b939b');
  document.documentElement.style.setProperty('--body-background', '#f9f9f9');
  document.documentElement.style.setProperty('--header-color', 'white');
  document.documentElement.style.setProperty('--box-color', 'white');
  document.documentElement.style.setProperty('--header-text-color', '#8b939b');
  document.documentElement.style.setProperty('--header-text-active-color', '#333');
  document.documentElement.style.setProperty('--header-border-color', '#eaeaea');
  document.documentElement.style.setProperty('--underline-d-color', '#ced1d3');
  document.documentElement.style.setProperty('--underline-color', '#ced1d3');
  document.documentElement.style.setProperty('--titles-color', 'black');
  document.documentElement.style.setProperty('--paragraph-color', '#333333');
  document.documentElement.style.setProperty('--language-color', '#595656');
  document.documentElement.style.setProperty('--dropdown-text-color', 'black');
  document.documentElement.style.setProperty('--dropdown-color', '#f1f1f1');
  
}

// Function to check the user's preference from localStorage
function checkUserPreference() {
  // Check if the user preference is stored in localStorage
  const darkModeEnabled = localStorage.getItem('darkModeEnabled');
  if (darkModeEnabled === 'true') {
      // If dark mode is enabled, check the checkbox and update CSS variables
      document.getElementById('darkmode-toggle').checked = true;
      updateDarkModeCSSVariables();
  } else {
      // If dark mode is not enabled, uncheck the checkbox and revert to default CSS variables
      document.getElementById('darkmode-toggle').checked = false;
      updateLightModeCSSVariables();
  }
  document.body.style.display = 'block';
}

// Call the function to check user preference when the page loads
checkUserPreference();

// Add event listener to the checkbox
document.getElementById('darkmode-toggle').addEventListener('change', function() {
  // Check if the checkbox is checked
  if (this.checked) {
      // If checked, enable dark mode, update localStorage, and update CSS variables
      localStorage.setItem('darkModeEnabled', 'true');
      updateDarkModeCSSVariables();
  } else {
      // If unchecked, disable dark mode, update localStorage, and revert to default CSS variables
      localStorage.setItem('darkModeEnabled', 'false');
      updateLightModeCSSVariables();
  }
});
