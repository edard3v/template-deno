#!/bin/bash

# Elimina la carpeta de migraciones
rm -rf src/db/migrations

# Elimina la db
rm -rf src/db/template.db

# Genera una nueva migración
deno -A npm:drizzle-kit generate

# Sincroniza la migración con la db
deno -A npm:drizzle-kit migrate

# Envia los cambios del schema directo a la db
# npx drizzle-kit push