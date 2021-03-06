import './patch'
import './interface'

import {providers} from './providers'
import {Framework} from '@roots/bud-framework'
import * as api from '@roots/bud-api'

class Bud extends Framework {}

const bud: Bud = new Bud({api, providers})

export {bud, Bud}
