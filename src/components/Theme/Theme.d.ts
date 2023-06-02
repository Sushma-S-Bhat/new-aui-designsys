import '@mui/material/styles/createPalette'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    primary: true
    secondary: true
    kale: true
  }
  interface PaletteOptions {
    background: PaletteColorOptions
  }
}
