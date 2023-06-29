import base64
import requests
import xmlrpc.client

url = 'http://localhost:8069'
db = 'docker'
username = 'test'
password = '12345678'

common = xmlrpc.client.ServerProxy('{}/xmlrpc/2/common'.format(url))
uid = common.authenticate(db, username, password, {})


urlapi = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=6"
headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDkyZTQzODlmZTE1MzRiYWVkZmUzMjZiOWMzZWUzYiIsInN1YiI6IjY0M2QyZDRkNGQ2NzkxMDRmM2Q4NGNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ZkyJ5KfiHjyDTPk-V4yDccjMxBgOskVHaf1kqQYLN8"
}

if uid :
    models = xmlrpc.client.ServerProxy('{}/xmlrpc/2/object'.format(url))
    response = requests.get(urlapi, headers=headers)
    data = response.json()
    data = data['results']

    for record in data:
        result_movie = "https://api.themoviedb.org/3/movie/" + str(record['id']) + "?language=en-US"
        response_movie = requests.get(result_movie, headers=headers)
        data_movie = response_movie.json()

        topCash = "https://api.themoviedb.org/3/movie/" + str(record['id']) + "/credits?language=en-US"
        response_topCash = requests.get(topCash, headers=headers)
        data_topCash = response_topCash.json()
        data_topCash = data_topCash['crew']

        director = ''
        producer = ''

        for topCash in data_topCash:
            if topCash['job'] == 'Director':
                director = topCash['name']
            elif topCash['job'] == 'Producer':
                producer = topCash['name']

        trailer = "https://api.themoviedb.org/3/movie/" + str(record['id']) + "/videos?language=en-US"
        response_trailer = requests.get(trailer, headers=headers)
        data_trailer = response_trailer.json()
        data_trailer = data_trailer['results'][0] if data_trailer['results'] else None 
        data_key = data_trailer['key'] if data_trailer else '12345678' 


        image = 'https://image.tmdb.org/t/p/original' + record['backdrop_path'] if record['backdrop_path'] else ''
        image = base64.b64encode(image.encode('utf-8')).decode('utf-8')

        vals = {
            'title': record['title'],
            'description': record['overview'],
            'image': image,
            'rating': record['vote_average'],
            'video' : "https://www.youtube.com/embed/" + data_key ,
            'status' : data_movie['status'],
            'release_date' : record['release_date'],
            'runtime' : data_movie['runtime'],
            'director' : director,
            'producer' : producer
        }
        print(vals)
        created_id =  models.execute_kw(db,uid,password,'movie.movix','create',[vals])
        
        