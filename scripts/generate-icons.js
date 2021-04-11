/* Based on https://blog.sapegin.me/til/react/generating-typescript-react-components-from-svg-icons-using-svgr/. */

const fs = require('fs').promises
const path = require('path')
const glob = require('tiny-glob')
const svgr = require('@svgr/core').default

const ICONS_SOURCE_DIR = 'src/assets/icons'
const COMPONENTS_DIR = 'src/components/icons'

const iconComponentTemplate = ({ template }, opts, { componentName, jsx }) =>
  template.smart({ plugins: ['typescript'] }).ast`
        export const ${componentName} = props => ${jsx};
    `

function getComponentName(iconPath) {
  const name = path.parse(iconPath).name
  const capitalizedName = name[0].charAt(0).toUpperCase() + name.slice(1)
  return `Svg${capitalizedName}`
}

function getFileName(iconPath) {
  return path.parse(iconPath).name
}

;(async function () {
  const icons = await glob(`${ICONS_SOURCE_DIR}/**.svg`)

  for (const icon of icons) {
    const svg = await fs.readFile(icon, 'utf8')
    const componentName = getComponentName(icon)
    const fileName = getFileName(icon)

    const componentCode = svgr.sync(
      svg,
      {
        template: iconComponentTemplate,
        icon: true,
        // 1. Clean SVG files using SVGO
        // 2. Generate JSX
        // 3. Format the result using Prettier
        plugins: [
          '@svgr/plugin-svgo',
          '@svgr/plugin-jsx',
          '@svgr/plugin-prettier',
        ],
        // Replace hardcoded colors with `currentColor`
        svgoConfig: {
          plugins: [
            { convertColors: { currentColor: true } },
            { removeXMLNS: true },
          ],
        },
        svgProps: { fill: 'currentColor' },
      },
      { componentName },
    )
    await fs.writeFile(
      `${COMPONENTS_DIR}/${path.parse(fileName).name}.tsx`,
      componentCode,
    )
  }
})()
