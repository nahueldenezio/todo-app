import { EVENTS } from "./const"
import { useState, useEffect, Children } from "react"
import { match } from 'path-to-regexp'

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => null }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    console.log(children)
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
    
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
      }
    }, [])

    let routeParams = {}

    //add routes from children <Route /> components
    const routesFromChildren = Children.map(children, ({ props, type }) => {
      const { name } = type
      const isRoute = name === 'Route'
      return isRoute ? props : null

    })

    const routesToUse = routes.concat(routesFromChildren)

    const Page = routesToUse.find(({ path }) => {
        if (path === currentPath) return true

        //usando path-to-regexp para detectar rutas dinamicas como por ejemplo: /search/:query
        const matchUrl = match(path, { decode: decodeURIComponent })
        const matched = matchUrl(currentPath)
        if(!matched) return false

        //guardar los params de la url que eran dinamicos y extraidos con path-to-regexp
        routeParams = matched.params // { query : 'javascript' }
        return true
    })?.Component

    return Page 
    ? <Page routeParams={routeParams}/> 
    : <DefaultComponent routeParams={routeParams}/>
  
  }