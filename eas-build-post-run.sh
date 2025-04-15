#!/bin/bash

echo "🔔 Iniciando el envío del mensaje a Discord..."

# Enviar el mensaje a Discord
curl -X POST -H "Content-Type: application/json" \
  -d '{"content": "✅ Build de preview completado con éxito 📦✨"}' \
  https://discord.com/api/webhooks/1359492861376073849/UG5D1MUvgsO2cPYacgJX9md7S19nGOQ0W0cOov9IN7pcfyXW1KxJXjewK_EjWZm4FmBA

echo "✅ Mensaje enviado a Discord con éxito!"
