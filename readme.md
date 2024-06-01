# Prueba tecnica Juan David Mahecha Cruz

El presente repositorio presenta el codigo ejecutado y realizado para dar cumplimiento a la prueba tecnica que se me presento, dentro de este, se puede encontrar una carpeta combrada APK la cual esta contiene el apk del ejercicio.

Este proyecto funciona con reconocimiento de tema por defecto.

Para poder ejecutar la aplicación en un entorno web local se requiere seguir de los siguientes pasos:

    1. Tener instalado node.js (versión utiliazada 22.0.0)
    2. Tener instalo angular (versión utilizada 17.3.8)
    3. Tener ionic instaldo (versión instalad 7.2.0)

una vez se cumpla con esos tres requerimientos seguir los siguientes paso:

```
npm i
npm run start:dev

// para compilar
ionic build

//para agregar la plataforma android
ionic capacitor add android

//sincronizar los modulos
npx cap sync android

//abrir android studio
npx cap open android

```
