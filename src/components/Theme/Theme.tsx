// //import { useAuthDetails } from '@context/AuthContext';
// import { createTheme } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// //import { supabase } from '@utils/supabaseClient';
// import React, { useEffect, useState } from 'react';
// import ThemeContext from './context';

// function Theme({ children }) {
//     const [color, setColor] = useState('#1976d2');


//     const theme = createTheme({
//         breakpoints: {
//             values: {
//                 xs: 0,
//                 sm: 600,
//                 mm: 750,
//                 md: 960,
//                 lg: 1280,
//                 xl: 1536,
//                 xxl: 1920,
//             },
//         },
//         palette: {
//             ...palette,
//             primary: {
//                 main: palette.black[700], // Zendesk Garden black 600
//                 light: palette.grey[200], // Zendesk Garden grey 200
//                 dark: palette.grey[800], // Zendesk Garden grey 800
//                 contrastText: palette.white[700], // white
//             },
//             secondary: {
//                 main: palette.green[600], // Zendesk Garden green 600
//                 light: palette.green[200], // Zendesk Garden green 200
//                 dark: palette.green[800], // Zendesk Garden green 800
//                 contrastText: palette.white[700], // white
//             },
//             error: {
//                 main: palette.red[400],
//                 contrastText: palette.white[700], // white
//             },
//             warning: {
//                 main: palette.yellow[400],
//                 contrastText: palette.white[700], // white
//             },
//             info: {
//                 main: palette.blue[400],
//                 contrastText: palette.white[700], // white
//             },
//             success: {
//                 main: palette.green[400],
//                 contrastText: palette.white[700], // white
//             },
//             background: {
//                 primary: palette.white[700],
//                 secondary: palette.grey[100],
//                 default: palette.grey[100], // Zendesk Garden grey 100
//                 paper: palette.white[700], // white
//                 kale: palette.main[200],
//             },
//             text: {
//                 primary: palette.grey[800], // Zendesk Garden grey 800
//                 secondary: palette.grey[600], // Zendesk Garden grey 600
//                 disabled: palette.grey[400], // Zendesk Garden grey 400
//                 hint: palette.grey[400], // Zendesk Garden grey 400
//             },
//             border: {
//                 main: palette.grey[300],
//             },
//             bordercolor: {
//                 main: palette.blue[500],
//             },
//             iconhovercolor: {
//                 main: palette.grey[300],
//             },
//             nav: {
//                 activetext: palette.white[700],
//                 text: palette.white[100],
//                 background: palette.black[100],
//             },
//             card: {
//                 main: {
//                     border: palette.grey[300],
//                     background: palette.white[700],
//                     hover: {
//                         background: palette.main[200],
//                         border: palette.main[300],
//                         buttonbackground: palette.main[600],
//                         buttontext: palette.white[700],
//                     },
//                 },
//             },
//         },
//         typography: {
//             fontFamily:
//                 'SF Pro, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
//             h1: {
//                 fontFamily: 'DM Sans',
//                 fontWeight: 700,
//                 fontSize: '1.625rem',
//                 lineHeight: '2rem',
//                 letterSpacing: '-0.01562em',
//                 color: palette.grey[800], // Zendesk Garden grey 800
//             },
//             h2: {
//                 fontFamily: 'DM Sans',
//                 fontWeight: 700,
//                 fontSize: '1.375rem',
//                 lineHeight: '1.75rem',
//                 letterSpacing: '-0.00833em',
//                 color: palette.grey[800], // Zendesk Garden grey 800
//             },
//             h3: {
//                 fontWeight: 600,
//                 fontSize: '1.125rem',
//                 lineHeight: '1.5rem',
//                 letterSpacing: '0em',
//                 color: palette.grey[800], // Zendesk Garden grey 800
//             },
//             h4: {
//                 fontWeight: 600,
//                 fontSize: '1rem',
//                 lineHeight: '1.25rem',
//                 letterSpacing: '0.00735em',
//                 color: palette.grey[800], // Zendesk Garden grey 800
//             },
//             h5: {
//                 fontWeight: 600,
//                 fontSize: '0.875rem',
//                 lineHeight: '1rem',
//                 letterSpacing: '0em',
//                 color: palette.grey[800], // Zendesk Garden grey 800
//             },
//             h6: {
//                 fontWeight: 600,
//                 fontSize: '1.25rem',
//                 lineHeight: 1.2,
//                 letterSpacing: '0.0075em',
//                 color: palette.grey[800], // Zendesk Garden grey 800
//             },
//             subtitle: {
//                 fontFamily: 'DM Sans',
//                 fontWeight: 700,
//                 fontSize: '1.5rem',
//                 lineHeight: '1.5rem',
//                 letterSpacing: '0.00938em',
//                 color: palette.grey[800], // Zendesk Garden grey 800
//             },
//             subtitle1: {
//                 fontWeight: 600,
//                 fontSize: '1rem',
//                 lineHeight: '1.25rem',
//                 letterSpacing: '0.00938em',
//                 color: palette.grey[800], // Zendesk Garden grey 800
//             },
//             subtitle2: {
//                 fontWeight: 600,
//                 fontSize: '0.875rem',
//                 lineHeight: '1.125rem',
//                 letterSpacing: '0.00714em',
//                 color: palette.grey[800], // Zendesk Garden grey 800
//             },
//             body1: {
//                 fontWeight: 400,
//                 fontSize: '1rem',
//                 lineHeight: '1.25rem',
//                 letterSpacing: '0.00938em',
//                 color: palette.grey[800], // Zendesk Garden grey 800
//             },
//             body2: {
//                 fontWeight: 400,
//                 fontSize: '0.875rem',
//                 lineHeight: '1.25rem',
//                 letterSpacing: '0.00735em',
//                 color: palette.grey[600], // Zendesk Garden grey 600
//             },
//             body3: {
//                 fontWeight: 400,
//                 fontSize: '0.75rem',
//                 lineHeight: '1rem',
//                 letterSpacing: '0.01071em',
//                 color: palette.grey[500], // Zendesk Garden grey 600
//             },
//             body4: {
//                 fontWeight: 600,
//                 fontSize: '2.5rem',
//                 lineHeight: '1rem',
//                 letterSpacing: '0.01071em',
//             },
//             body5: {
//                 fontFamily: 'DM Sans',
//                 fontWeight: 700,
//                 fontSize: '2rem',
//                 lineHeight: '2.15rem',
//                 letterSpacing: '-0.01562em',
//                 color: palette.grey[800], // Zendesk Garden grey 800
//             },

//             button: {
//                 fontWeight: 600,
//                 fontSize: '0.875rem',
//                 lineHeight: '1.125rem',
//                 letterSpacing: '0.02857em',
//                 textTransform: 'capitalize',
//                 color: palette.grey[800],
//             },
//             caption: {
//                 fontWeight: 400,
//                 fontSize: '0.75rem',
//                 lineHeight: '1rem',
//                 letterSpacing: '0.01071em',
//                 color: palette.grey[500], // Zendesk Garden grey 600
//             },
//             overline: {
//                 fontWeight: 600,
//                 fontSize: '0.75rem',
//                 lineHeight: 2.66,
//                 letterSpacing: '0.08333em',
//                 textTransform: 'uppercase',
//                 color: palette.grey[800], // Zendesk Garden grey 800
//             },
//         },
//         components: {
//             MuiButton: {
//                 variants: [
//                     {
//                         props: { variant: 'save' },
//                         style: {
//                             fontSize: '0.875rem',
//                             fontWeight: 500,
//                             color: palette.grey[100],
//                             background: palette.green[600],
//                             textTransform: 'none',
//                             borderRadius: 100,
//                             '&:hover': {
//                                 background: palette.green[500],
//                                 color: palette.grey[300],

//                                 transition: '0.9s',
//                             },
//                         },
//                     },
//                     {
//                         props: { variant: 'start' },
//                         style: {
//                             fontSize: '0.875rem',
//                             fontWeight: 500,
//                             color: palette.grey[100],
//                             background: palette.kale[600],
//                             textTransform: 'none',
//                             borderRadius: 100,
//                             '&:hover': {
//                                 background: palette.kale[600],
//                                 color: palette.grey[300],
//                                 transition: '0.5s',
//                             },
//                         },
//                     },
//                     {
//                         props: { variant: 'create' },
//                         style: {
//                             fontSize: '0.875rem',
//                             fontWeight: 500,
//                             color: palette.grey[100],
//                             background: palette.blue[600],
//                             textTransform: 'none',
//                             borderRadius: 100,
//                             '&:hover': {
//                                 background: palette.blue[500],
//                                 color: palette.grey[300],
//                                 transition: '0.5s',
//                             },
//                         },
//                     },
//                     {
//                         props: { variant: 'contained' },
//                         style: {
//                             fontSize: '0.875rem',
//                             fontWeight: 500,
//                             background: palette.grey[800],
//                             color: palette.grey[100],
//                             textTransform: 'none',
//                             borderRadius: 100,
//                             '&:hover': {
//                                 background: palette.grey[700],
//                                 color: palette.grey[300],
//                             },
//                         },
//                     },
//                     {
//                         props: { variant: 'outlined' },
//                         style: {
//                             py: 2,
//                             color: palette.black[700],
//                             fontSize: '0.875rem',
//                             fontWeight: 500,
//                             background: palette.white[700],
//                             textTransform: 'none',
//                             borderRadius: 100,
//                             borderColor: palette.grey[300],
//                             '&:hover': {
//                                 color: palette.black[700],
//                                 background: palette.white[700],
//                             },
//                         },
//                     },
//                     {
//                         props: { variant: 'text' },
//                         style: {
//                             py: 2,
//                             color: palette.grey[800],
//                             fontSize: '0.875rem',
//                             fontWeight: 500,
//                             background: 'trasnparent',
//                             textTransform: 'none',
//                             borderRadius: 100,
//                             borderColor: palette.grey[300],
//                             '&:hover': {
//                                 color: palette.grey[700],
//                                 background: 'grey.800',
//                             },
//                         },
//                     },
//                 ],
//                 defaultProps: {
//                     size: 'small',
//                 },
//             },

//             MuiTab: {
//                 defaultProps: {
//                     disableRipple: true,
//                     textColor: 'primary',
//                     variant: 'text',
//                 },
//                 styleOverrides: {
//                     root: {
//                         '&.MuiTab-root': {
//                             fontFamily:
//                                 'SF Pro, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
//                             textTransform: 'none',
//                             fontSize: '0.875rem',
//                             lineHeight: '1.25rem',
//                             minHeight: 0,
//                             fontWeight: 600,
//                             border: '1px solid',
//                             borderColor: palette.grey[300],
//                             borderRadius: 100,
//                             padding: '0.5rem 1.5rem',
//                             marginRight: '0.75rem',
//                             color: palette.black[700],
//                         },
//                         '&.Mui-selected': {
//                             background: palette.black[700],
//                             color: palette.white[700],
//                         },
//                         '&:hover': {
//                             borderColor: palette.grey[500],
//                         },
//                     },
//                 },
//             },

//             MuiBox: {
//                 styleOverrides: {
//                     root: {},
//                 },
//             },

//             MuiFilledInput: {
//                 defaultProps: {
//                     margin: 'dense',
//                 },
//             },
//             MuiFormControl: {
//                 defaultProps: {
//                     margin: 'dense',
//                 },
//             },
//             MuiFormHelperText: {
//                 defaultProps: {
//                     margin: 'dense',
//                 },
//             },
//             MuiIconButton: {
//                 defaultProps: {
//                     size: 'small',
//                 },
//             },
//             MuiInputBase: {
//                 defaultProps: {
//                     margin: 'dense',
//                 },
//             },
//             MuiInputLabel: {
//                 defaultProps: {
//                     margin: 'dense',
//                 },
//             },
//             MuiPaper: {
//                 defaultProps: {
//                     variant: 'outlined',
//                 },
//                 styleOverrides: {
//                     root: {
//                         border: '1px solid',
//                         borderColor: palette.grey[300],
//                         boxShadow: 'none',
//                     },
//                 },
//             },

//             MuiListItem: {
//                 defaultProps: {
//                     dense: true,
//                 },
//             },
//             MuiAutocomplete: {
//                 styleOverrides: {
//                     paper: {
//                         borderRadius: '8px',
//                         marginTop: '4px',
//                         border: 'none',
//                         boxShadow: '0px 0px 0px 1px #d8dcde inset',
//                     },
//                 },
//             },
//             MuiOutlinedInput: {
//                 defaultProps: {
//                     margin: 'dense',
//                 },
//                 styleOverrides: {
//                     root: {},
//                 },
//             },
//             MuiFab: {
//                 defaultProps: {
//                     size: 'small',
//                 },
//             },
//             MuiTable: {
//                 defaultProps: {
//                     size: 'small',
//                 },
//             },
//             MuiTextField: {
//                 defaultProps: {
//                     margin: 'dense',
//                     size: 'small',
//                 },
//                 styleOverrides: {
//                     root: {
//                         // this is styles for the new variants
//                         '&.variant-bordered': {
//                             color: palette.black[700],
//                             borderRadius: 100,
//                             background: palette.white[700],
//                             '& .MuiOutlinedInput-root': {
//                                 borderRadius: 100,
//                             },
//                             '& .MuiInputBase-input + fieldset': {
//                                 border: `1px solid`,
//                                 borderColor: palette.grey[400],
//                             },
//                             '& .MuiInputBase-input:hover + fieldset': {
//                                 border: `1px solid`,
//                                 borderColor: palette.grey[500],
//                             },
//                             '& .MuiInputBase-input:focus + fieldset': {
//                                 border: `0.094rem solid`,
//                                 borderColor: palette.black[100],
//                             },
//                         },
//                     },
//                 },
//             },
//             MuiButtonBase: {
//                 disableRipple: true,
//             },
//             MuiSelect: {
//                 defaultProps: {
//                     color: 'primary',
//                     variant: 'outlined',
//                     margin: 'dense',
//                 },
//                 styleOverrides: {
//                     select: {
//                         borderRadius: '0.25rem',
//                     },
//                 },
//             },
//             MuiAppBar: {
//                 defaultProps: {
//                     color: 'primary',
//                 },
//                 styleOverrides: {
//                     root: {
//                         boxShadow: 'none',
//                     },
//                 },
//             },

//             MuiCheckbox: {
//                 defaultProps: {
//                     color: 'primary',
//                 },
//             },
//             MuiChip: {
//                 defaultProps: {
//                     size: 'small',
//                     variant: 'outlined',
//                 },
//                 styleOverrides: {
//                     root: {},
//                 },
//                 variants: [
//                     {
//                         props: { variant: 'primary' },
//                         style: {
//                             background: palette.kale[200],
//                             border: '1px solid',
//                             borderColor: palette.kale[300],
//                         },
//                     },
//                 ],
//             },
//             MuiDialog: {
//                 styleOverrides: {
//                     paper: {
//                         borderRadius: '0.25rem',
//                     },
//                 },
//             },
//             MuiDrawer: {
//                 styleOverrides: {
//                     paper: {
//                         borderRadius: '1rem',
//                     },
//                 },
//             },
//             MuiFormControlLabel: {
//                 defaultProps: {
//                     color: 'primary',
//                 },
//             },
//             MuiRadio: {
//                 defaultProps: {
//                     color: 'primary',
//                 },
//             },
//             MuiSnackbar: {
//                 defaultProps: {
//                     anchorOrigin: {
//                         vertical: 'bottom',
//                         horizontal: 'center',
//                     },
//                 },
//             },
//             MuiSwitch: {
//                 defaultProps: {
//                     color: 'primary',
//                 },
//             },
//             MuiTooltip: {
//                 styleOverrides: {
//                     tooltip: {
//                         borderRadius: '4px',
//                     },
//                 },
//             },
//         },
//         shadows: Array(25).fill('none'),
//     });

//     return (
//         <ThemeContext.Provider value={{ color, setColor }}>
//             <ThemeProvider theme={theme}>{children}</ThemeProvider>
//         </ThemeContext.Provider>
//     );
// }
// export default Theme;

// // Create a theme instance.

// export const palette = {
//     black: {
//         100: '#212121',
//         700: '#000000',
//     },
//     white: {
//         100: '#ffffff80',
//         200: 'FFFFFF00',
//         300: '#00000000',
//         700: '#ffffff',
//     },
//     grey: {
//         100: '#f8f9f9',
//         200: '#e9ebed',
//         300: '#d8dcde',
//         400: '#c2c8cc',
//         500: '#87929d',
//         600: '#68737d',
//         700: '#49545c',
//         800: '#2f3941',
//         900: '#888888aa',
//     },
//     main: {
//         100: '#f5fcfc',
//         200: '#daeded',
//         300: '#bdd9d7',
//         400: '#90bbbb',
//         500: '#467b7c',
//         600: '#17494d',
//         700: '#03363d',
//         800: '#012b30',
//         900: '#D23369',
//     },
//     blue: {
//         100: '#e2f0fe',
//         200: '#cee2f2',
//         300: '#adcce4',
//         400: '#5293c7',
//         500: '#337fbd',
//         600: '#1f73b7',
//         700: '#144a75',
//         800: '#0f3554',
//         900: '#007aff',
//     },
//     green: {
//         100: '#edf8f4',
//         200: '#d1e8df',
//         300: '#aecfc2',
//         400: '#5eae91',
//         500: '#228f67',
//         600: '#038153',
//         700: '#186146',
//         800: '#0b3b29',
//     },
//     red: {
//         100: '#fff0f1',
//         200: '#f5d5d8',
//         300: '#f5b5ba',
//         400: '#e35b66',
//         500: '#d93f4c',
//         600: '#cc3340',
//         700: '#8c232c',
//         800: '#681219',
//     },
//     kale: {
//         100: '#f5fcfc',
//         200: '#daeded',
//         300: '#bdd9d7',
//         400: '#90bbbb',
//         500: '#467b7c',
//         600: '#17494d',
//         700: '#03363d',
//         800: '#012b30',
//         900: '#f5fcfc99',
//     },
//     yellow: {
//         100: '#fff7ed',
//         200: '#ffeedb',
//         300: '#fed6a8',
//         400: '#ffb057',
//         500: '#f79a3e',
//         600: '#ed8f1c',
//         700: '#ad5918',
//         800: '#703815',
//     },
//     purple: {
//         400: '#b552e2',
//         600: '#6a27b8',
//         M400: '#b072cc',
//         M600: '#9358b0',
//     },
//     royal: {
//         400: '#5d7df5',
//         600: '#3353e2',
//         M400: '#7986d8',
//         M600: '#4b61c3',
//     },
//     fuschia: {
//         400: '#d653c2',
//         600: '#a81897',
//         M400: '#cf62a8',
//         M600: '#a8458c',
//     },
//     azure: {
//         400: '#3091ec',
//         600: '#1371d6',
//         M400: '#5f8dcf',
//         M600: '#3a70b2',
//     },
//     pink: {
//         400: '#ec4d63',
//         600: '#d42054',
//         M400: '#d57287',
//         M600: '#b23a5d',
//     },
//     teal: {
//         400: '#02a191',
//         600: '#028079',
//         M400: '#2d9e8f',
//         M600: '#3c7873',
//     },
//     crimson: {
//         400: '#e34f32',
//         600: '#c72a1c',
//         M400: '#cc6c5b',
//         M600: '#b24a3c',
//     },
//     mint: {
//         400: '#00a656',
//         600: '#058541',
//         M400: '#299c66',
//         M600: '#2e8057',
//     },
//     orange: {
//         400: '#de701d',
//         600: '#bf5000',
//         M400: '#d4772c',
//         M600: '#b35827',
//         700: '#F99184',
//         800: '#F99164',
//     },
//     lime: {
//         400: '#43b324',
//         600: '#2e8200',
//         M400: '#519e2d',
//         M600: '#47782c',
//     },
//     lemon: {
//         400: '#ffd424',
//         600: '#ffbb10',
//         M400: '#e7a500',
//         M600: '#c38f00',
//     },
//     support: {
//         main: '#006dff',
//     },

//     message: {
//         main: '#00c2ff',
//     },
//     explore: {
//         main: '#3ebd93',
//     },
//     gather: {
//         main: '#ae52d4',
//     },
//     guide: {
//         main: '#ffa600',
//         100: '#F1E7DE',
//     },
//     chat: {
//         main: '#00a6ff',
//     },
//     chatNotify: {
//         main: '#A3AA59',
//     },
//     talk: {
//         main: '#21c2ff',
//     },
//     trackertour: {
//         100: '#F9F8F4',
//     },
//     trackermain: {
//         100: '#E0F0F980',
//     },
//     customaccordian: {
//         100: '#CCCCCC',
//         200: '#D5CDA0',
//         300: '#e6e6e6',
//         400: '#212121CC',
//     },
// };
