const VENTAS_BASE = 5;

function calcularComision(numeroVenta, precioProducto) {
    let comision = 0;
    
    if (numeroVenta > VENTAS_BASE) {
        let ventasExtras = numeroVenta - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.10);
    }
    
    return comision;
}

function calcular() {
    // Obtener componentes
    let cmpSueldo = document.getElementById("txtSueldoBase");
    let cmpVentas = document.getElementById("txtVentas");
    let cmpPrecio = document.getElementById("txtPrecio");
    
    // Validar y obtener valores
    let sueldoBase = parseFloat(cmpSueldo.value) || 0;
    let numeroVentas = parseFloat(cmpVentas.value) || 0;
    let precioProducto = parseFloat(cmpPrecio.value) || 0;
    
    // Validaciones
    if (sueldoBase < 0 || numeroVentas < 0 || precioProducto < 0) {
        alert("⚠️ Los valores no pueden ser negativos");
        return;
    }
    
    if (numeroVentas === 0 || precioProducto === 0) {
        alert("⚠️ Ingrese número de ventas y precio del producto");
        return;
    }
    
    // Calcular
    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;
    
    // Mostrar resultados con animación
    mostrarResultado("spSueldoBase", sueldoBase);
    mostrarResultado("spComision", comision);
    mostrarResultado("spTotal", total);
    
    // Efecto visual en el total
    const totalCard = document.querySelector('.resultado-card.total');
    totalCard.style.animation = 'none';
    setTimeout(() => {
        totalCard.style.animation = 'pulse 0.5s ease-out';
    }, 10);
}

function mostrarResultado(id, valor) {
    let elemento = document.getElementById(id);
    // Animación de conteo
    elemento.textContent = "$0.00";
    setTimeout(() => {
        elemento.textContent = "$" + valor.toFixed(2);
    }, 100);
}

// Agregar animación pulse al CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Permitir calcular con Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calcular();
            }
        });
    });
});

/*
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
   // let cmpSueldo = recuperaraTexto("txtSueldoBase"); //document.getElementById("txtSueldoBase");
    //let cmpVentas = recuperaraTexto("txtVentas"); //document.getElementById("txtVentas");
    //let cmpPrecio =  recuperarFloat("txtPrecio");//document.getElementById("txtPrecio");
    
    //usamos || 0 para evitar errores si el campo está vacio
    let sueldoBase = recuperarFloat("txtSueldoBase") || 0;
    let numeroVentas = recuperarFloat("txtVentas") || 0;
    let precioProducto = recuperarFloat("txtPrecio")  || 0;

    console.log(sueldoBase,numeroVentas,precioProducto);

    //calcular
    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    //obtener los elementos donde se mostrara el resultado
    //let spSueldoBase = document.getElementById("spSueldoBase");
    //let spComision = document.getElementById("spComision");
   // let spTotal = document.getElementById("spTotal");

    // asignar texto al elemento HTML
    //spSueldoBase.textContent = sueldoBase.toFixed(2); // .toFixed(2) muestra 2 decimales (ideal para dinero)
    //spComision.textContent = comision.toFixed(2);     
   // spTotal.textContent = total.toFixed(2);       
    
    mostrarTexto("spSueldoBase",sueldoBase.toFixed(2));
    mostrarTexto("spComision",comision.toFixed(2));
    mostrarTexto("spTotal",total.toFixed(2));
}

*/