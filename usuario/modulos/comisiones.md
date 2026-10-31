---
title: "Comisiones"
description: "Paga comisiones a tus empleados por venta, producto o servicio, y gestiona pagos por periodo"
audience: dueno
modulo: comisiones
rag_tags: [comisiones, empleados, vendedor, ventas, productos, pagos, reglas, escalones, periodos, disputas]
---

## ¿Qué es el módulo de Comisiones?

Calcula automáticamente cuánto le corresponde a cada empleado según reglas que tú defines. Sirve
para comisiones por venta de productos, como en tiendas de ropa, joyería o electrónica, y también
para servicios de [Agenda](/usuario/modulos/agenda-citas). No necesitas tener Agenda activa.

Las comisiones se generan de dos formas:

- **Por venta en Cobrar:** al cobrar, eliges el vendedor de cada producto o servicio.
- **Por cita completada:** si usas Agenda, al cobrar una cita la comisión se le carga al empleado
  de la cita.

## Dar de alta a tus empleados

Ve a **Empleados** en el menú lateral y agrega a cada persona que cobra comisión. Un empleado no
necesita tener usuario en elena.

## Elegir el vendedor al cobrar

1. Agrega los productos al ticket en **Cobrar**.
2. En cada línea, elige el empleado en el selector de vendedor. Para asignar todo el ticket a la
   misma persona, usa el control **"Vendedor"** arriba del total.
3. Cobra normalmente. La comisión se calcula con las reglas activas.

Si una línea queda en **"Sin empleado asignado"**, esa línea no genera comisión.

## Crear una regla de comisión

1. Ve a **Comisiones → Configuración → Reglas**.
2. Haz clic en **"Nueva regla"**.
3. Elige tipo: **porcentaje** (ej. 10% del servicio) o **monto fijo** (ej. $50 por servicio).
4. Elige a qué aplica: **todos** (general), **un producto específico** o, si tienes Agenda,
   **un servicio específico**. Opcional: liga la regla a un empleado específico.
5. Guarda. La regla aplica a las ventas y citas que se cobren después de crearla.

## Escalones por volumen

Puedes agregar escalones a una regla para pagar más conforme el empleado acumule más ventas o
servicios en el periodo (por ejemplo, 5% en los primeros 10 y 8% del 11 en adelante). Se
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
Sí. Al cobrar, elige el vendedor de cada línea y la comisión se calcula con tus reglas.

**¿Necesito el módulo de Agenda para usar Comisiones?**
No. Comisiones funciona solo para ventas. Si tienes los dos, Agenda y Comisiones cuentan como un
solo módulo de tu plan. Ver [Planes y módulos](/usuario/conceptos/planes-modulos).

**¿Qué pasa con la comisión si el cliente devuelve el producto?**
Se descuenta automáticamente: la devolución registra una reversa de la comisión de lo devuelto.

**¿Puedo tener una regla distinta para cada empleado?**
Sí, liga la regla a un empleado específico. Si no ligas empleado ni servicio, la regla aplica de
forma general a todos.

**¿Qué pasa si no cierro un periodo?**
Las comisiones quedan pendientes sin asignar a ningún periodo; puedes seguir pagándolas
individualmente desde Pagos sin necesidad de cerrar un periodo primero.
