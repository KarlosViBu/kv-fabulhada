import { createTheme, responsiveFontSizes  } from '@mui/material/styles';
import { red,  } from '@mui/material/colors';

let kTheme = createTheme(
  {
    typography: {
      // Tell Material UI what the font-size on the html element is.
      htmlFontSize: 15,
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#1E1E1E'
      },
      secondary: {
        main: '#3A64D8'
      },
      warning: {
        main: 'rgba(255,255,255,.40)'
      },
      info: {
        main: '#fff'
      },
    },
  }
);
kTheme = responsiveFontSizes(kTheme);


export const lightTheme = createTheme({

  typography: {
    htmlFontSize: 11,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#1E1E1E'
    },
    secondary: {
      main: '#3A64D8'
    },
    warning: {
      main: 'rgba(255,255,255,.40)'
    },
    info: {
      main: '#fff'
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    },
    
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
        color: 'info'
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 20,
          ":hover": {
            backgroundColor: 'rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease-in-out'
          }
        }
      }
    },


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.15), 0px 6px 6px rgba(0,0,0,0.19) ',
          borderRadius: '10px',
        }
      }
    }
    
  }
});