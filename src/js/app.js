import './../css/nav.css'
import './../css/tooltip.css'
import './../css/app.css'

import { tooltip } from './tooltip'
import { nav } from './nav'
import { themeToggler } from './themeToggler'
import { DropDown } from './dropDown'

tooltip({ theme: 'dark' })
nav()
themeToggler()
new DropDown()
