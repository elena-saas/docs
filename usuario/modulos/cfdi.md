---
title: "Facturas Electrónicas (CFDI 4.0)"
description: "Emite facturas electrónicas con validez fiscal desde cualquier venta en elena"
audience: dueno
modulo: cfdi
rag_tags: [cfdi, factura, sat, timbrado, rfc, csd, xml, pdf, cancelar, regimen-fiscal, modo-integral, modo-exportacion]
---

## ¿Qué es una factura electrónica (CFDI)?

Una factura electrónica (CFDI 4.0) es el comprobante fiscal que el SAT reconoce
como válido en México. elena la genera directamente desde cualquier venta completada,
sin necesidad de software adicional.

## ¿Cuándo emitir una factura?

Cuando un cliente la solicite — ya sea al momento de pagar o en días posteriores.
El SAT no establece un límite de tiempo para facturar una venta ya registrada
en el sistema.

## Configuración inicial (solo una vez)

Antes de emitir la primera factura, el dueño configura los datos del negocio:

1. Ir a **Fiscal** en el menú lateral.
2. Ingresar RFC, nombre fiscal (razón social exacta del SAT), código postal fiscal
   y régimen fiscal del negocio.
3. Elegir el modo de facturación: **Integral** (recomendado) o **Exportación**.
4. Guardar la configuración.

## Modos de facturación

**Modo Integral (recomendado)**
elena timbra la factura automáticamente. Necesitas subir tu Certificado de Sello
Digital (CSD) en Configuración Fiscal. La factura queda lista en segundos.

**Modo Exportación**
elena genera el XML sin timbrar. Úsalo si tu negocio ya tiene contrato con un
sistema de facturación propio. Llevas el XML a ese sistema para timbrar.

## Cómo emitir una factura desde el cobro

1. Completa la venta normalmente en la pantalla de cobro.
2. Al cerrar el pago aparece el enlace **"Facturar esta venta"**.
3. Ingresa RFC, nombre fiscal y código postal del cliente.
4. Selecciona el uso del CFDI (generalmente "G03 — Gastos en general").
5. Selecciona el régimen fiscal del receptor.
6. Presiona **"Emitir factura"** — en modo integral recibes el CFDI en segundos.

## Cómo emitir una factura desde el historial

Para ventas de días anteriores:

1. Ir a **Facturas** en el menú lateral.
2. Localizar la venta por fecha en la tabla.
3. Hacer clic en la fila y completar los datos del receptor.
4. Presionar **"Emitir factura"**.

## Descargar el XML

Desde **Facturas**, cada CFDI emitido tiene un botón **"XML"** para descargar
el archivo fiscal oficial. Guárdalo — el SAT exige conservar los CFDIs por 5 años.

## Cancelar una factura

Una factura se cancela desde **Facturas** → clic en el CFDI → **"Cancelar"**.
El SAT requiere indicar el motivo:

| Motivo | Cuándo usarlo |
|---|---|
| 01 — Con relación | Se emitió otra factura correcta en sustitución |
| 02 — Sin relación | Error en datos, sin factura sustituta |
| 03 — No se realizó | La operación no ocurrió |
| 04 — Operación nominativa | Factura global relacionada con la operación |

Una vez cancelada, el CFDI queda inválido ante el SAT. No se puede reactivar.

## Ambientes de prueba y producción

| Ambiente | Descripción | Costo |
|---|---|---|
| Sandbox | CFDIs de prueba, sin validez fiscal | Gratis |
| Producción | CFDIs reales, válidos ante el SAT | Por timbre |

Cambia el ambiente en **Configuración Fiscal → Ambiente**. Usa sandbox para
familiarizarte antes de emitir facturas reales.

## Preguntas frecuentes

**¿Qué necesito para empezar a facturar?**
Tu RFC activo ante el SAT y tus datos fiscales. Para el modo integral también
necesitas tu Certificado de Sello Digital (CSD) vigente — dos archivos
(`.cer` y `.key`) que tramitas gratis en `sat.gob.mx`. Tienen vigencia de 4 años.

**¿Qué es el Certificado de Sello Digital (CSD)?**
Es tu firma electrónica fiscal. El SAT te lo entrega al tramitarlo en su portal.
elena lo usa para firmar facturas en tu nombre y lo cifra antes de almacenarlo —
nadie en el equipo de elena puede verlo ni exportarlo.

**¿Puedo facturar ventas de días anteriores?**
Sí. Desde **Facturas** puedes facturar cualquier venta completada sin límite
de tiempo.

**¿Qué RFC uso si el cliente no quiere factura a su nombre?**
Usa el RFC genérico `XAXX010101000` con nombre "PÚBLICO EN GENERAL" y
código postal del negocio.

**¿Qué hago si la factura tiene datos incorrectos?**
Cancela con motivo "02 — Sin relación" y emite una nueva con los datos correctos.

**¿El módulo CFDI tiene costo adicional?**
Sí, es un add-on del plan. Consulta precios en [soyelena.app](https://soyelena.app).
