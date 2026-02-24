import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import App from './App'

export function render(url: string) {
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )

  return { appHtml }
}
