# Sistemes Distribuïts a Gran Escala - Pràctica MapReduce

Implementació de funcions MapReduce per al càlcul massiu de dades d'una BD no relacional (MongoDB)

## Build & Run docker container

```bash
docker build -t sdge-prac-ubuntu .
docker run \
 -p 7017:27017 \
 -p 2222:22 \
 -v ~/MyStuff/repos/personal/UOC/SDGE/uoc.sdge.prac/workspace:/home/runner \
 -v ~/MyStuff/repos/personal/UOC/SDGE/uoc.sdge.prac/mongo_data:/data/db \
 -d --name uoc-sdge-ee sdge-prac-ubuntu

# OPTIONAL (for debugging purposes)
docker exec -it uoc-sdge-ee bash
```

## Connectar via VSCODE

```bash
cat <<EOF >> ~/.ssh/config

Host uoc-sdge-ee
  HostName localhost
  User root
  Port 2222
EOF
```

Open remote window --> Connect to host --> uoc-sdge-ee

## Administrar / Visualitzar mongodb

### Crear usuari

```bash
mongo
> use admin
switched to db admin
> db.createUser(
... {
... user: "sdge",
... pwd: "student",
... roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
... }
... )
```
