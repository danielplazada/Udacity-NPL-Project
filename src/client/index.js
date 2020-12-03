import './styles/styles.scss'
import './styles/stylesContent.scss'

import { handleSubmit } from './js/formHandler'
import { validateURL } from './js/validateURL'

document.getElementById('submit_btn').addEventListener('click', handleSubmit)
