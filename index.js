const precios = {
    dos: 15000,
    tres: 18000,
    week: 20000,
};

const profesores = {
    "8 AM": "Profesor Pablo Diaz",
    "10 AM": "Profesor Adrian Lopez",
    "4 PM": "Profesora Sofia Garcia",
};

const fechasDisponibles = ["1 de julio", "8 de julio", "15 de julio", "22 de julio"];

let membresia = {
    dias: null,
    horario: null,
    nombreApellido: null,
    fechaInicio: null,
    costoTotal: null
};

function calcularCosto(dias) {
    switch (dias) {
        case '1':
            return precios.dos;
        case '2':
            return precios.tres;
        case '3':
            return precios.week;
        default:
            return 0;
    }
}

function mostrarResumen({nombreApellido, dias, horario, fechaInicio, costoTotal}) {
    const resumen = `Resumen de Inscripción:
    Nombre: ${nombreApellido}
    Días a la semana: ${dias}
    Horario: ${horario}
    Fecha de inicio: ${fechaInicio}
    Costo total: $${costoTotal}`;

    alert(resumen);
}

const opciones = [
    { mensaje: "Elija cuantos días a la semana asistirá:\n1. 2 días ($15000)\n2. 3 días ($18000)\n3. Toda la semana ($20000)", accion: elegirDias },
    { mensaje: "Elija su horario de disponibilidad:\n1. 8 AM - Profesor Pablo Diaz\n2. 10 AM - Profesor Adrian Lopez\n3. 4 PM - Profesora Sofia Garcia", accion: elegirHorario },
    { mensaje: "Ingrese su nombre y apellido:", accion: elegirNombreApellido },
    { mensaje: `Ingrese la fecha en la que desea comenzar:\n${fechasDisponibles.map((fecha, index) => `${index + 1}. ${fecha}`).join('\n')}`, accion: elegirFechaInicio }
];

function elegirDias() {
    const dias = prompt(opciones[0].mensaje);
    membresia.dias = dias;
    membresia.costoTotal = calcularCosto(dias);
}

function elegirHorario() {
    const opcion = prompt(opciones[1].mensaje);
    const horario = ["8 AM", "10 AM", "4 PM"][opcion - 1];
    membresia.horario = `${horario} - ${profesores[horario]}`;
}

function elegirNombreApellido() {
    membresia.nombreApellido = prompt(opciones[2].mensaje);
}

function elegirFechaInicio() {
    const opcion = prompt(opciones[3].mensaje);
    membresia.fechaInicio = fechasDisponibles[opcion - 1];
}

while (true) {
    const accion = prompt(`
    Ingrese sus datos y preferencias para comenzar membresía:
    1. Elija cuantos días semanales comenzará
    2. Elija horario de disponibilidad
    3. Ingresar nombre y apellido
    4. Fechas disponibles
    5. Terminar inscripción
    0. Salir
    `);

    if (accion == '0') {
        alert("Saliendo del sistema.");
        break;
    } else if (accion == '5') {
        mostrarResumen(membresia);
        alert("Inscripción completa. ¡Bienvenido!");
        break;
    } else if (accion >= '1' && accion <= '4') {
        opciones[accion - 1].accion();
    } else {
        alert("Opción no válida.");
    }
}
