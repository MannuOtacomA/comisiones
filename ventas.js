const VENTAS_BASE = 5;

function calcularComision(numeroVenta, precioProducto) {
    let comision = 0;
    if (numeroVenta > VENTAS_BASE) {
        let ventasExtras = numeroVenta - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.10);
    }
    console.log("Comisión: " + comision);
    return comision;
}

function calcular() { 
    
    //obtener componentes
    let cmpSueldo = document.getElementById("txtSueldoBase");
    let cmpVentas = document.getElementById("txtVentas");
    let cmpPrecio = document.getElementById("txtPrecio");
    
    //usamos || 0 para evitar errores si el campo está vacio
    let sueldoBase = parseFloat(cmpSueldo.value) || 0;
    let numeroVentas = parseFloat(cmpVentas.value) || 0;
    let precioProducto = parseFloat(cmpPrecio.value) || 0;

    //calcular
    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    //obtener los elementos donde se mostrara el resultado
    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    // asignar texto al elemento HTML
    spSueldoBase.textContent = sueldoBase.toFixed(2); // .toFixed(2) muestra 2 decimales (ideal para dinero)
    spComision.textContent = comision.toFixed(2);     
    spTotal.textContent = total.toFixed(2);         
}