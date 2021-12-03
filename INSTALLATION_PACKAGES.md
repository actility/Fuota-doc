# Prepar your package install 

```text
NOTE :

***This is the steps needing for install multiple package's of Actility Artifactory repositorie, 
if you don't have problem with installer Manager don't fallow that documentation.***

```


Step 1 : for start a good follow at documentation delete ***node_medules*** at hand.

Step 2 : in your computer you need search a file name ***.npmrc***.

```text
NOTE :

( it's a file manager to nodejs registry option)

```

Step 3 : check your file if he have the next lines
this lines are links to registry NodeJS  origin repository and the artifactory registry root access.
the line with authentificate is a access token key for actifactory


```text

@node=true

registry=https://repo.int.actility.com/artifactory/api/npm/npm/


//repo.int.actility.com/artifactory/api/npm/npm/:_authToken=eyJ2ZXIiOiIyIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYiLC
JraWQiOiJhc002TjRhdFNtdjJhdkZvcnpQVE9HREVmeGY2Sk0wZDNMakRvaEpnMlE4In0.eyJzdWIiOiJqZi1hcnRpZmFjdG9yeUBhM2JlNTEw
Mi0zZWRhLTQ5ZjAtYjljMi1hZmEyNGYyNTI1ZTRcL3VzZXJzXC9tYXNodXAiLCJzY3AiOiJtZW1iZXItb2YtZ3JvdXBzOiogYXBpOioiLCJhdW
QiOiJqZi1hcnRpZmFjdG9yeUBhM2JlNTEwMi0zZWRhLTQ5ZjAtYjljMi1hZmEyNGYyNTI1ZTQiLCJpc3MiOiJqZi1hcnRpZmFjdG9yeUBhM2Jl
NTEwMi0zZWRhLTQ5ZjAtYjljMi1hZmEyNGYyNTI1ZTRcL3VzZXJzXC9tYXNodXAiLCJpYXQiOjE2MjA4MjYyMDYsImp0aSI6IjRjMTFkNGQ3LT
UyZDItNDFmMy04OGE4LTIyMDE2YzBiZTdiMSJ9.VQvqVLsCoT5WF8J7PHryUMGCgkR-IRC349D-KgR8BdReAsqD1wihb6gFZ7a7L4lPdMxaPbS
DDZerxdB_pH2LwEKIt8ROHJ63ToQaW8wOIZSlUm7rZx2rAeyML22XAz2uO2wWgr7m-KxU-qgpWHM0rVYiCau65Uc8cgo1LM8WCBmFKPcV1swfK
kf3O6uSp6GnVneXDS6nCjjvyg8Zmyp0oVpM2iYoWje8qTjEUyGuSTi9uXxI0i5PMDUFGSvlF7vuHLOCuPpJfY5kO9vT3cJqq2HLvzOPtl17oDA
vccq2xu5yvLNZY10VMM34nv6ClU_Y1Jso6w6mc0IsBH7ddrWgAQ

```

Step 4 : open your project and if you have follow the next step, in your terminal start just ```npm install```
