---
title: "Proveedores y Órdenes de Compra"
description: "Gestiona tu catálogo de proveedores, genera órdenes de compra y controla las cuentas por pagar"
audience: dueno
modulo: proveedores
rag_tags: [proveedores, orden-compra, oc, cuentas-por-pagar, recepcion-mercancia, inventario]
---

## ¿Qué es el módulo Proveedores?

Permite registrar tus proveedores, crear órdenes de compra formales y controlar cuánto les debes. Cuando recibes mercancía contra una OC, el inventario se actualiza automáticamente.

## ¿Cuándo usarlo?

Cuando quieres dejar de anotar pedidos en papel o en mensajes de WhatsApp y llevar un registro dentro del mismo sistema donde vendes y controlas tu stock.

## Catálogo de proveedores

1. Ir a **Proveedores** en el menú lateral.
2. En el tab **Catálogo de proveedores**, hacer clic en **"+ Nuevo proveedor"**.
3. Ingresar nombre (requerido), RFC, datos de contacto y notas.
4. Guardar. El proveedor aparece disponible al crear órdenes de compra.

Para desactivar un proveedor: edítalo y usa el botón **"Desactivar proveedor"** al pie del formulario.

## Crear una orden de compra

1. En el tab **Órdenes de compra**, hacer clic en **"+ Nueva OC"**.
2. Seleccionar el proveedor.
3. Buscar y agregar los productos que vas a pedir con sus cantidades y costos.
4. Guardar como **borrador** (para revisar antes de enviar) o **"Guardar y enviar"** para marcarla como enviada al proveedor.

El folio se asigna automáticamente (#001, #002...).

## Estados de una orden de compra

| Estado | Qué significa |
|---|---|
| Borrador | Creada pero no enviada. Se puede editar o cancelar. |
| Enviada | Pedido hecho al proveedor. Esperando llegada de mercancía. |
| Parcialmente recibida | Llegó parte de la mercancía. Queda saldo pendiente de recibir. |
| Completada | Toda la mercancía fue recibida. |
| Cancelada | OC anulada. No actualiza inventario. |

## Recibir mercancía

1. En el listado de OC, hacer clic en una OC en estado **Enviada** o **Parcialmente recibida**.
2. Hacer clic en **"Recibir mercancía"**.
3. Ingresar la cantidad recibida por cada producto (puede ser menos del total pedido).
4. Confirmar — el inventario se actualiza automáticamente.

## Registrar un pago al proveedor

1. Abrir el detalle de la OC.
2. Hacer clic en **"Registrar pago"**.
3. Ingresar el monto, método (efectivo, transferencia o cheque) y una referencia opcional.
4. El saldo pendiente se reduce inmediatamente.

Puedes hacer varios pagos parciales contra la misma OC.

## Preguntas frecuentes

**¿El inventario se actualiza solo al recibir la OC?**
Sí. Al confirmar la recepción, elena registra automáticamente una entrada de inventario por cada producto recibido. No necesitas hacerlo manualmente desde Inventario.

**¿Puedo recibir solo parte de la mercancía?**
Sí. La OC pasa a estado "Parcialmente recibida" y puedes volver a recibir el resto cuando llegue.

**¿El costo de la OC actualiza el precio de costo del producto?**
No. El costo ingresado en la OC queda en el historial de movimientos para tus reportes. El precio de costo del catálogo solo se modifica manualmente desde **Productos**.

**¿Puedo cancelar una OC ya enviada?**
Sí, mientras no hayas recibido mercancía. Las OC con recepción parcial no se pueden cancelar.

**¿El módulo Proveedores tiene costo adicional?**
Sí, es un add-on del plan. Consulta precios en [soyelena.app](https://soyelena.app).
