---
title: "Cortes de caja"
description: "Cierra el turno, cuadra el efectivo y consulta el historial de cortes"
audience: ambos
modulo: cortes
rag_tags: [corte, turno, caja, efectivo, cuadre, cierre, sobrante, faltante, historial, cajero]
---

## ¿Qué es un corte de caja?

Es el cierre del turno al final del día (o del turno del cajero). Se verifica
que el efectivo físico en caja coincida con lo que el sistema registró.
El resultado queda guardado en el historial de cortes.

## Cómo cerrar el turno

1. Haz clic en el botón **"Cerrar turno"** en el menú lateral.
2. Elena muestra el resumen del turno: ventas, métodos de pago, abonos de
   apartados y pagos de fiado recibidos.
3. Cuenta el efectivo físico en caja e ingrésalo en el campo.
4. Elena calcula la diferencia en tiempo real.
5. Agrega notas si hay incidencias.
6. Confirma el cierre.

## Interpretar el resultado

| Resultado | Significado |
|---|---|
| Cuadre perfecto | El efectivo físico coincide exactamente |
| Sobrante (azul) | Hay más efectivo del esperado |
| Faltante (ámbar) | Hay menos efectivo del esperado |

Un sobrante o faltante pequeño es normal por redondeo. Diferencias grandes
ameritan revisión del historial de ventas.

## ¿Qué incluye el efectivo esperado?

El sistema suma:
- Fondo inicial de apertura
- Ventas pagadas en efectivo
- Abonos de apartados recibidos en efectivo
- Pagos de fiado recibidos en efectivo

El efectivo de ventas con tarjeta o transferencia no entra al cuadre.

## Ver el historial de cortes

En **Cortes** del menú lateral (solo dueño y gerente):

- Filtros por cajero, sucursal y rango de fechas
- Tabla con ventas totales, efectivo esperado vs. contado y diferencia
- Haz clic en cualquier fila para ver el desglose completo del turno

## Preguntas frecuentes

**¿Puedo cerrar el turno sin contar el efectivo?**
Sí, el campo es opcional. Si lo dejas en cero, Elena registra cero como
efectivo contado y muestra la diferencia completa.

**¿Qué pasa si un cajero olvidó cerrar su turno?**
El dueño o gerente puede cerrar el turno desde el historial en el módulo
de Cortes.

**¿Por qué el historial de cortes es distinto al historial de ventas?**
El historial de ventas muestra cada transacción individual. Los cortes
muestran el resumen por turno (un corte = un turno completo).
