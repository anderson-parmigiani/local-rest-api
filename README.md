### REST API local de películas.

  Permite la consulta de todas las películas registradas en el JSON, consultar por ID o por género, permite agregar, editar y eliminar las mismas.

##### Recuperar todas las películas (GET)
`/movies`

##### Recuperar una película por ID (GET)
`/movies/7e3fd5ab-60ff-4ae2-92b6-9597f0308d1`

##### Recuperar películas por género (GET)
`/movies?genre=Crime`

##### Crear una película (POST)
`/movies`
```json
[
  {
    "title": "The Godfather",
    "year": 1975,
    "director": "Francis Ford Coppola",
    "duration": 175,
    "poster": "url",
    "genre": [ "Crime", "Drama" ]
  }
]
```

##### Borrar una película (DELETE)
`/movies/dcdd0fad-a94c-4810-8acc-5f108d3b18c3`

##### Actualizar una película (PATCH)
`/movies/5ad1a235-0d9c-410a-b32b-220d91689a08`
```json
[
  {
    "year": 1989
  }
]
```

[Link de la API](https://local-rest-api.onrender.com/movies 'enlace API')