const fonts = [
  'Gotham-Black.otf',
  'Gotham-BlackItalic.otf',
  'Gotham-Bold.otf',
  'Gotham-BoldItalic.otf',
  'Gotham-Book.otf',
  'Gotham-BookItalic.otf',
  'Gotham-Light.otf',
  'Gotham-LightItalic.otf',
  'Gotham-Medium.otf',
  'Gotham-MediumItalic.otf',
  'Gotham-Thin.otf',
  'Gotham-ThinItalic.otf',
  'Gotham-Ultra.otf',
  'Gotham-UltraItalic.otf',
  'Gotham-XLight.otf',
  'Gotham-XLightItalic.otf',
]

import { replaceInFile } from 'replace-in-file'

async function replaceFonts() {
  try {
    await replaceInFile({
      files: './build/_next/static/css/*.css',
      from: fonts.map((font) => `/fonts/${font}`),
      to: fonts.map((font) => `../../../fonts/${font}`),
    })
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

async function replaceFavicon() {
  try {
    await replaceInFile({
      files: './build/index.html',
      from: ['/favicon.ico'],
      to: ['./favicon.ico'],
    })
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

replaceFonts()
replaceFavicon()
