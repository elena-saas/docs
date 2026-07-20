---
title: "Comisiones"
description: "Define reglas de comisión para tus empleados y gestiona pagos por periodo"
audience: dueno
modulo: comisiones
rag_tags: [comisiones, empleados, pagos, reglas, escalones, periodos, disputas]
---

## ¿Qué es el módulo de Comisiones?

Calcula automáticamente cuánto le corresponde a cada empleado por los servicios de Agenda que
completa, según reglas que tú defines. Requiere que el módulo de Agenda esté activo — las
comisiones solo se generan a partir de citas completadas, no de ventas de productos.

## Crear una regla de comisión

1. Ve a **Comisiones → Configuración → Reglas**.
2. Haz clic en **"Nueva regla"**.
3. Elige tipo: **porcentaje** (ej. 10% del servicio) o **monto fijo** (ej. $50 por servicio).
4. Opcional: liga la regla a un empleado específico y/o un servicio específico. Sin especificar,
   aplica de forma general.
5. Guarda — la regla queda activa de inmediato para citas completadas después de crearla.

## Escalones por volumen

Puedes agregar escalones a una regla para pagar más conforme el empleado complete más servicios
en el periodo (por ejemplo, 5% en los primeros 10 servicios y 8% del 11 en adelante). Se
configuran desde el detalle de la regla, indicando el rango de conteo y el valor de ese escalón.

## Pagar comisiones

1. Ve a **Comisiones → Configuración → Pagos**.
2. Revisa el resumen por empleado (total pendiente y pagado histórico).
3. Usa **"Pagar todo"** para marcar como pagadas todas las comisiones pendientes de un empleado.

Las comisiones en disputa nunca se incluyen en "Pagar todo" — se resuelven aparte.

## Periodos de liquidación

1. Ve a **Comisiones → Configuración → Periodos**.
2. Crea un periodo con fecha de inicio y fin.
3. Al **cerrar** el periodo, todas las comisiones pendientes o en disputa dentro de ese rango de
   fechas quedan asignadas a él.
4. Al **pagar** el periodo, todas sus comisiones pendientes se marcan como pagadas de una sola
   vez.

## Resolver disputas

Cuando una cita se cancela o el cliente no se presenta, su comisión asociada pasa a estado
**"En disputa"** automáticamente.

1. Ve a **Comisiones → Configuración → Disputas**.
2. Para cada entrada en disputa, decide: **Pagar** (si el dueño decide honrarla igual) o
   **Cancelar** (no se paga).

## Vista del empleado

Cada empleado puede entrar a **Comisiones** y ver únicamente sus propias comisiones: fecha,
servicio, monto de venta, monto de comisión y estado. El dueño y gerente ven las de todos los
empleados.

## Preguntas frecuentes

**¿Las comisiones se generan por vender productos?**
No. Solo se generan al completar una cita del módulo de Agenda (al cobrarla).

**¿Puedo tener una regla distinta para cada empleado?**
Sí, liga la regla a un empleado específico. Si no ligas empleado ni servicio, la regla aplica de
forma general a todos.

**¿Qué pasa si no cierro un periodo?**
Las comisiones quedan pendientes sin asignar a ningún periodo; puedes seguir pagándolas
individualmente desde Pagos sin necesidad de cerrar un periodo primero.
