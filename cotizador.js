// Cotizador de seguros de hogar

// Función para calcular el valor de la póliza

function calculoMontos(){

    let montoIngresadoElectro = parseFloat(prompt("Ingrese el monto en pesos (mínimo $100.000) de los electrodomésticos a asegurar:"));

    while (montoIngresadoElectro < 100000) {
    alert("El monto ingresado es menor al mínimo permitido. Por favor, ingrese un valor mayor.");
    montoIngresadoElectro = parseFloat(prompt("Ingrese el monto en pesos (mínimo $100.000) de los electrodomésticos a asegurar:"));
    }

    let montoIngresadoMuebles = parseFloat(prompt("Ingrese el monto en pesos (mínimo $100.000) de los muebles a asegurar:"));

    while (montoIngresadoMuebles < 100000) {
        alert("El monto ingresado es menor al mínimo permitido. Por favor, ingrese un valor mayor.");
        montoIngresadoMuebles = parseFloat(prompt("Ingrese el monto en pesos (mínimo $100.000) de los muebles a asegurar:"));
    }
    

    let valorIncendio = montoIngresadoMuebles * 10;
    let valorPza = montoIngresadoElectro / 10;

    // Condicional de póliza mayor a $2.000.000 en Electrodomésticos

    if (montoIngresadoElectro > 2000000) {
        valorPza *= 0.95; // se descuenta un 5% por póliza "cara" o premium
    }
    let valorCuota = valorPza / 12;

    alert("El valor de la cobertura de incendio mobiliario es de $" + valorIncendio + " y el valor de la cuota mensual es de $" + valorCuota + ".");
    }

calculoMontos()