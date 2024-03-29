export const colorTokens = {

    grey: {
        0: "#FFFFFF", 
        10: "#F6F6F6", 
        50: "#F0F0F0", 
        100: "#E0E0E0", 
        200: "#C2C2C2", 
        300: "#A3A3A3", 
        400: "#858585", 
        500: "#666666", 
        600: "#4D4D4D", 
        700: "#333333", 
        800: "#1A1A1A", 
        900: "#0A0A0A", 
        1000: "#000000", 
    }, 
  

}; 


// MUI THEME SETTINGS 

export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode, 
            ...(mode === "dark" ? {
                // dark mode pallete values
            primary: {
                dark: "#D44BGC", 
                main: "#C60F7B", 
                light: "#D44B9C"
            }, 
            primary2: {
                dark: "#FFDD6F", 
                main: "#FFD23F", 
                light: "#FFDD6F"
            }, 
            secondary: {
                dark: "#F57F61", 
                main: "#F2542D", 
                light: "#F2542D"
            }, 
            secondary2: {
                dark: "#58CF80", 
                main: "#20BF55", 
                light: "#20BF55"
            }, 
            neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[700],
            }, 
            background: {
                default: colorTokens.grey[900],
                alt: colorTokens.grey[800],
            }
            } : {
                // light mode pallete values
                primary: {
                    dark: "#32041F", 
                    main: "#C60F7B", 
                    light: "#D44B9C"
                }, 
                primary2: {
                    dark: "#403510", 
                    main: "#FFD23F", 
                    light: "#FFDD6F"
                }, 
                secondary: {
                    dark: "#3D150B", 
                    main: "#F2542D", 
                    light: "#F2542D"
                }, 
                secondary2: {
                    dark: "#083015", 
                    main: "#20BF55", 
                    light: "#20BF55"
                }, 
            neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[50],
            }, 
            background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
            },
        }),
    }, 
    typography: {
        fontFamily: ["Raleway", "sans-serif"].join(","), 
        fontSize: 12, 
        h1: {
            fontFamily: ["Raleway", "sans-serif"].join(","), 
            fontSize: 40, 
        },
        h2: {
            fontFamily: ["Raleway", "sans-serif"].join(","), 
            fontSize: 32, 
        },
        h3: {
            fontFamily: ["Raleway", "sans-serif"].join(","), 
            fontSize: 24, 
        },
        h4: {
            fontFamily: ["Raleway", "sans-serif"].join(","), 
            fontSize: 20, 
        },
        h5: {
            fontFamily: ["Raleway", "sans-serif"].join(","), 
            fontSize: 16, 
        },
        h6: {
            fontFamily: ["Raleway", "sans-serif"].join(","), 
            fontSize: 14, 
        },
    }
}; 
}; 