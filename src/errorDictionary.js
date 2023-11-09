class ErrorDictionary {
    constructor() {
      this.errors = {
        200: "operación exitosa",
        201: "documento actualizado",
        400: "Solicitud no válida",
        401: "No autorizado",
        403: "Acceso prohibido",
        404: "Recurso no encontrado",
        451: "Identificador de carrito invalido",
        452: "Identificador de producto invalido",
        453: "Faltan datos o datos erroneos",
        454: "Producto existente",
        500: "Error interno del servidor",
        551: "Error en el servidor al enviar un correo",
        552: "Error en el servidor al tratar de recuperar mensajes guardados",
        553: "Error en el servidor al tratar de guardar mensajes del chat"
      
      };
    }
    getErrorMessage(code) {
        return this.errors[code] || "Error desconocido";
      }
    
    }

    export default ErrorDictionary