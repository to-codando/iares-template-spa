import {TRoute, html, render} from 'iares'

import {DetailStationPage} from '@/components/pages/DetailStationPage'
import {StationsPage} from '@/components/pages/StationsPage'
import {DefaultPage} from '@/components/pages/DefaultPage'

export const routes: TRoute[] = [
  {
    regex: /^\/404$/,
    default: '#/404',
    mount: ({context}) => {
      render(html`<${DefaultPage} title="404" />`, context)
    }
  },
  {
    regex: /^#\/$|^#\/stations$/,
    start: '#/',
    mount: ({context}) => {
      render(html`<${StationsPage} title="Estações" />`, context)
    }
  },
  {
    regex: /^#\/stations\/\d+$/,
    start: '#/',
    mount: ({context}) => {
      render(
        html`<${DetailStationPage} title="Detalhes da estação" />`,
        context
      )
    }
  }
]
