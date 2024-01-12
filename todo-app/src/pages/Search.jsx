import { useEffect } from "react"

export default function Search({ routeParams }) {
    useEffect(() => {
        document.title = `Has buscado ${routeParams.query}`

        //tirar de la api
        // fetch(`http://localhost:3000/search/${routeParams.query}`)
    }, [])

    return (
        <div>
            <h1>Has buscado {routeParams.query}</h1>
        </div>
    )
}