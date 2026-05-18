---
title: "Stock disponible vs. stock apartado"
description: "Diferencia entre el inventario total y la cantidad reservada en apartados"
audience: dueno
modulo: conceptos
rag_tags: [stock, inventario, apartado, disponible, reservado, cantidad-apartada, bloqueo]
---

## ¿Qué es el stock apartado?

Cuando se crea un apartado, la cantidad del producto queda reservada —
"bloqueada" para ese cliente específico. Este stock apartado no puede
venderse a otro cliente de forma normal.

## Stock total vs. stock disponible

```
Stock total = Stock disponible + Stock apartado

Ejemplo:
  Coca-Cola 600ml: 50 piezas en total
  Apartados activos: 8 piezas reservadas
  Disponible para venta normal: 42 piezas
```

## ¿Dónde se ve esta diferencia?

- En **Inventario**, la columna "Disponible" ya descuenta el stock apartado
- En la pantalla de cobro, el badge de stock muestra el disponible real
- Al intentar vender más del stock disponible, elena muestra una alerta

## ¿Cuándo se libera el stock apartado?

El stock reservado se libera en dos casos:
1. **Al liquidar el apartado** — el stock pasa a vendido
2. **Al cancelar el apartado** — el stock vuelve a estar disponible

## Preguntas frecuentes

**¿Puedo vender un producto que tiene todo su stock apartado?**
No directamente. Si el stock disponible es 0, la venta normal no procede.
Deberías cancelar o renegociar los apartados afectados.

**¿Los apartados aparecen en el reporte de inventario?**
Sí. En Inventario puedes ver tanto el stock total como el disponible,
lo que te permite identificar cuánto está comprometido en apartados.
