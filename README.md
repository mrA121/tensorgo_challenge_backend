# tensorgo_challenge_backend

Prerequisite- Docker


TO execute on local follow the following step:-
```
1. Download and cd to the folder
2. in src/utils/databse change database credentials
3. docker build --tag gorest:1.0 .
4. docker run -p 3000:5000 -d gorest:1.0
```

Note:- Ideally mysql should run into another server container and we should be using docker compose to spin off all the containers and pass dependencies but for the sake of simplicity of the challenge have manually configured database connection. 

Note:- Database Dump and sample download-user-data file added in the folder for reference

## API ENDPOINTS 


##### API Request
```
GET /v1/users?page=21 HTTP/1.1
```

##### Response
```
{
    "message": "Fetched Posts Successfully",
    "users": [
        {
            "id": 385,
            "name": "Rev. Manikya Varma",
            "email": "rev_manikya_varma@ritchie.info",
            "gender": "Male",
            "status": "Active",
            "page_number": 20,
            "createdAt": "2020-10-13T07:25:35.000Z",
            "updatedAt": "2020-10-13T07:25:35.000Z"
        },
        {
            "id": 386,
            "name": "Dhatri Guneta",
            "email": "guneta_dhatri@bauch-gerlach.info",
            "gender": "Female",
            "status": "Inactive",
            "page_number": 20,
            "createdAt": "2020-10-13T07:25:35.000Z",
            "updatedAt": "2020-10-13T07:25:35.000Z"
        },
        ...
    ],
    "count": 20
}
```
##### API Request
```
GET /v1/users/post-data HTTP/1.1
```
This first check till what page number data is present in database then start making calls https://gorest.co.in/public-api/users?page=${page_number} and saves the further data points

#### Response

```
{
    "message": "New Data Points Uploaded."
}
```
##### API Request
```
PUT /v1/users/:userId HTTP/1.1
{
    "name": "Abhishek",
    "email": "abhi@gmail.com",
    "gender": "Male",
    "status": "Active"
}
```
#### Response
```
{
    "message": "User updated!",
    "user": {
        "id": 315,
        "name": "Abhishek",
        "email": "abhi@gmail.com",
        "gender": "Male",
        "status": "Active",
        "page_number": 16,
        "createdAt": "2020-10-13T07:25:35.000Z",
        "updatedAt": "2020-10-15T04:24:09.185Z"
    }
}

```
##### API Request
```
GET /v1/users/download-user-data HTTP/1.1
```

```
return download-user-data.csv
```