---
title: "Inventario"
description: "Controla el stock de tus productos, registra entradas y consulta movimientos"
audience: dueno
modulo: inventario
rag_tags: [inventario, stock, entrada, compra, ajuste, movimiento, variante, excel, alerta, minimo]
---

## ¿Qué es el módulo de inventario?

Muestra el stock actual de todos tus productos y te permite registrar entradas
de mercancía, ajustes y consultar el historial de movimientos. Solo el dueño
y el gerente tienen acceso.

## Ver el stock actual

En **Inventario → Stock actual** ves todos tus productos con:
- Cantidad disponible
- Alertas de stock bajo (ámbar) o agotado (rojo)
- Costo de inventario por producto

Usa los filtros para buscar por nombre, categoría o estado de stock.

## Registrar una entrada de mercancía

Cuando recibes mercancía nueva:

1. Haz clic en **"Nueva entrada"**.
2. Busca el producto (por nombre o SKU).
3. Ingresa la cantidad que recibiste y el costo unitario.
4. Opcionalmente agrega proveedor y notas.
5. Guarda — el stock se actualiza automáticamente.

## Importar entradas desde Excel

Para registrar muchos productos a la vez:

1. Haz clic en **"Importar Excel"**.
2. Descarga la plantilla y llénala con tus datos.
3. Sube el archivo — elena muestra una vista previa antes de confirmar.
4. Revisa los errores (marcados en rojo) y confirma las filas correctas.

## Ajustar el stock

Si hay diferencias entre el sistema y el físico (merma, robo, error):

1. Busca el producto en la tabla.
2. Haz clic en **"Ajustar"**.
3. Ingresa la cantidad real y el motivo del ajuste.
4. Guarda — el movimiento queda registrado en el historial.

## Consultar movimientos

En **Inventario → Movimientos** ves el historial completo: ventas que
descontaron stock, entradas que lo incrementaron y ajustes manuales.
Filtra por producto, tipo de movimiento y rango de fechas.

## Preguntas frecuentes

**¿Por qué el stock disponible es menor que el stock total?**
Si hay productos apartados (en modo Apartado), esa cantidad se reserva
y no aparece como disponible para venta normal.

**¿Cómo configuro una alerta de stock mínimo?**
En **Productos**, edita el producto y configura el campo "Stock mínimo".
Cuando el stock baje de ese número, aparece la alerta en el dashboard.

**¿Las variantes tienen stock separado?**
Sí. Cada variante (talla, color, etc.) tiene su propio stock independiente.
