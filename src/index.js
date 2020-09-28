import ToolTip from './ui-lib/tooltip'
import Dropdown from './ui-lib/dropdown'
import Tabs from './ui-lib/tabs'
import Snackbar from './ui-lib/snackbar'

// Create a tooltip
const tooltip = new ToolTip(document.querySelector('.tooltip'))
tooltip.init()

// Create dropdown
const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown)
    instance.init()
})

// Create tab
const tabs = new Tabs(document.querySelector('.tabs'))
tabs.init()

// Create snackbar
const snackbar = new Snackbar()
snackbar.init()

const button = document.querySelector('button')
button.addEventListener('click', () => {
    snackbar.show('You clicked me ):')
})