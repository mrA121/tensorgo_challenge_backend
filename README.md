# tensorgo_challenge_backend

## API ENDPOINTS 


router.get('',userController.downloadUsers)

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
GET /v1/users/download-user-data HTTP/1.1
```

