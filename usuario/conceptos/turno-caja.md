---
title: "¿Qué es un turno de caja?"
description: "Entiende cómo funciona el ciclo de apertura y cierre de turno en elena"
audience: ambos
modulo: conceptos
rag_tags: [turno, caja, apertura, cierre, fondo, cajero, corte, ciclo]
---

## ¿Qué es un turno?

Un turno es el período de trabajo de un cajero entre la apertura y el cierre
de la caja. Todas las ventas, abonos y cobros del turno quedan agrupados
bajo ese turno para facilitar el cuadre al final del día.

## ¿Cómo funciona el ciclo?

```
Abrir turno (con fondo inicial)
    ↓
Registrar ventas durante el turno
    ↓
Cerrar turno (contar efectivo y cuadrar)
    ↓
Corte de caja guardado en el historial
```

## Fondo inicial

Es el efectivo que se pone en la caja al inicio del turno para dar cambio.
No es una venta — se descuenta del total al calcular el efectivo esperado.

## Un turno por sucursal

Cada sucursal puede tener un solo turno abierto a la vez. Si hay varios
cajeros en la misma sucursal, comparten el mismo turno.

## Preguntas frecuentes

**¿Puedo hacer ventas sin turno abierto?**
No. Elena requiere un turno activo para registrar ventas, abonos de apartados
o pagos de crédito.

**¿Un turno puede abarcar varios días?**
Técnicamente sí, si no se cierra. Pero lo recomendable es cerrar el turno
al final de cada jornada para tener cortes diarios precisos.
