const theme = {
  // Color palette
  colors: {
    primary: "#eb6e2b",       // Primary color
    secondary: "#110c1b",     // Secondary color
    background: "#0f0a19",    // Background color
    text: "#fff",             // Text color
    error: "red",             // Error color
    success: "green",         // Success color
  },

  // Typography
  fonts: {
    body: "'Roboto', sans-serif",     // Body font
    heading: "'Arial', sans-serif",   // Heading font
  },

  // Font sizes
  fontSizes: {
    sm: "12px",   // Small font size
    md: "16px",   // Medium font size
    lg: "20px",   // Large font size
    xl: "24px",   // Extra large font size
  },

  // Spacing scale
  space: {
    small: "8px",    // Small space
    medium: "16px",  // Medium space
    large: "32px",   // Large space
  },

  // Breakpoints for responsive design
  breakpoints: {
    mobile: "576px",    // Mobile devices
    tablet: "768px",    // Tablets
    desktop: "1024px",  // Desktops
  },

  // Shadows for elements
  shadows: {
    sm: "0 2px 4px rgba(0, 0, 0, 0.1)",    // Small shadow
    md: "0 4px 8px rgba(0, 0, 0, 0.2)",    // Medium shadow
    lg: "0 6px 12px rgba(0, 0, 0, 0.3)",   // Large shadow
  },

  // Transition for smooth effects
  transitions: {
    ease: "all 0.3s ease-in-out",   // Transition timing for all properties
  },

  // Additional properties can go here (e.g., border radius, opacity, etc.)
  borderRadius: "8px",               // Border radius for rounded corners
  zIndex: {
    modal: 1000,                      // Modal z-index
    dropdown: 999,                    // Dropdown z-index
  },
};

export default theme;
