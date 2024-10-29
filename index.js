
const admin = require("firebase-admin");
const dotenv = require("dotenv");

// Cargar variables de entorno
dotenv.config();

// Inicializar Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Función para enviar la notificación
function sendPushNotification() {
  const registrationToken = process.env.FCM_TOKEN;

  const message = {
    /*notification: {
      title: "Prueba de Notificación",
      body: "Este es un mensaje de prueba de notificación push"
    },*/
    data: {
      "type": "LOANS",
      "payType": "",
      "title": "Prueba de notificación por tony",
      "message": "Prueba de mensaje por tony"
    },
    token: registrationToken
  };

  admin.messaging().send(message)
    .then((response) => {
      console.log("¡Notificación enviada exitosamente!", response);
    })
    .catch((error) => {
      console.log("Error al enviar la notificación:", error);
    });
}

// Ejecutar la función
sendPushNotification();
