
# Push Notifications Test Project

Este proyecto está diseñado para probar el envío de notificaciones push utilizando Firebase Cloud Messaging (FCM) en un entorno Node.js.

## Requisitos

- Node.js (versión 14 o superior)
- Una cuenta en Firebase con un proyecto configurado para Firebase Cloud Messaging (FCM).

## Configuración del Proyecto

### 1. Archivo de Credenciales: `serviceAccountKey.json`

Este archivo contiene las credenciales necesarias para autenticar el envío de notificaciones mediante FCM. **No debe subirse a ningún repositorio público**.

#### Cómo obtener `serviceAccountKey.json`

1. Ve a [Firebase Console](https://console.firebase.google.com/) e inicia sesión.
2. Selecciona tu proyecto en Firebase o crea uno nuevo.
3. Ve a **Configuración del proyecto** (ícono de engranaje) en la esquina superior izquierda.
4. Selecciona la pestaña **Cuentas de servicio**.
5. Haz clic en **Generar nueva clave privada** y confirma la descarga del archivo `JSON`.
6. Renombra este archivo a `serviceAccountKey.json` y colócalo en la raíz de tu proyecto.

Para más detalles, consulta la documentación oficial de Firebase sobre [cuentas de servicio](https://firebase.google.com/docs/admin/setup#initialize-sdk).

### 2. Archivo de Configuración de Entorno: `.env`

Este archivo contiene variables de entorno sensibles, incluido el token de FCM del dispositivo al que deseas enviar la notificación.

#### Configuración del archivo `.env`

Crea un archivo `.env` en la raíz de tu proyecto con el siguiente contenido:

```plaintext
FCM_TOKEN=your_firebase_device_token_here
```

- **FCM_TOKEN**: Es el *Device Registration Token*, que identifica el dispositivo de destino en Firebase. Este token se obtiene desde la aplicación cliente (Android o iOS) y varía con el tiempo.

Para más detalles sobre cómo obtener el token FCM en dispositivos, consulta la documentación oficial:
- [Obtener el Token FCM en Android](https://firebase.google.com/docs/cloud-messaging/android/client)
- [Obtener el Token FCM en iOS](https://firebase.google.com/docs/cloud-messaging/ios/client)

## Instalación

Clona este repositorio y luego instala las dependencias:

```bash
npm install
```

## Uso

Después de configurar `serviceAccountKey.json` y `.env`, puedes ejecutar el proyecto para enviar una notificación push:

```bash
node index.js
```

## Notas

- **Seguridad**: Asegúrate de no subir los archivos `.env` y `serviceAccountKey.json` a ningún repositorio público, ya que contienen información sensible.
- **Actualización de Token FCM**: El `FCM_TOKEN` puede expirar o cambiar, por lo que es posible que debas actualizarlo periódicamente en el archivo `.env`.

## Más Información

Para obtener más detalles sobre Firebase Cloud Messaging, visita la [documentación oficial de Firebase](https://firebase.google.com/docs/cloud-messaging).
