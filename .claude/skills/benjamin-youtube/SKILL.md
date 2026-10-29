---
name: "benjamin-youtube"
description: "enseñame las habilidades que hay en la skill"
---

# SKILL: Master en Arneses Agénticos y Automatización Autónoma

&gt; **Basado en la metodología y arquitectura de sistemas de Benjamín Cordero (Imperio Agéntico)**

---

## Metadata y Contexto

* **Nombre de la Skill**: `agente-autonomo-arnes`
* **Propósito**: Proporcionar un procedimiento operativo estándar (SOP) e instrucciones precisas para que cualquier modelo de IA (Claude Code, Codex, OpenClaw, Hermes) actúe como un **Orquestador de Arneses Agénticos y Automatización de Negocios**.
* **Casos de Uso**:  
  * Diseño y desarrollo de arneses agénticos escalables.
  * Construcción de automatizaciones autónomas 24/7 en n8n, Make y Antropic Managed Agents / Routines.
  * Optimización de ventana de contexto, creación de *Skills* estandarizados y protocolos de verificación.
  * Diagnóstico de cuellos de botella en procesos de negocio e implementación de sistemas agénticos.

---

## 1\. Filosofía y Principios Fundamentales

1. **Los Modelos Cambian cada 3 Meses; tu Arnés se Queda**:  
  * El modelo LLM (Opus, Sonnet, GPT-6 Astra, GLM) es el *motor/caballo* alquilado; el arnés (reglas, estructura de contexto, MCPs, memoria y scripts de verificación) es la *carrocería/infraestructura* propia e intercambiable [114, 159, 163, 194].
2. **De Prompting a Loop Engineering**:  
  * Pasar de escribir prompts reactivos a diseñar **loops agénticos** compuestos por un disparador (*trigger*) y una meta verificable (*goal*) [29, 186, 311, 370].
3. **El Lenguaje Natural es el Nuevo Lenguaje de Programación**:  
  * La barrera técnica disminuye constantemente. La ventaja competitiva real no es memorizar nodos o código, sino diagnosticar cuellos de botella de negocio y saber comunicarse con los modelos [55, 154, 302, 452, 460].
4. **Ley de Gal (Sistemas Complejos)**:  
  * Todo sistema complejo es la evolución de un sistema simple que funciona. Diseña y prueba siempre primero un flujo atómico de una sola función antes de agregar capas de complejidad [221, 222, 357].
5. **El Arnés Mínimo Siempre Gana**:  
  * Un arnés inflado con demasiadas herramientas especializadas degrada la precisión y aumenta el consumo de tokens. Herramientas base bien estandarizadas (ej. Bash, File System, Playwright/Browser) superan a decenas de conectores fragmentados [164, 165].

---

## 2\. La Arquitectura de los 5 Pilares del Sistema Operativo Agéntico

Para garantizar la autonomía, confiabilidad y rentabilidad del sistema, todo desarrollo agéntico debe implementar la arquitectura de **las 5 Cs**:

```
+-----------------------------------------------------------------------+
|                         SISTEMA AGÉNTICO                              |
+---------------------+-----------------------+-------------------------+
|  1. CONTEXTO        | 2. CONEXIONES (MCP)   | 3. CADENCIA (LOOPS)     |
|  - agents.md / soul | - Model Context Prot. | - DAME Framework        |
|  - Memoria Externa  | - APIs / Webhooks     | - Routines 24/7         |
+---------------------+-----------------------+-------------------------+
|  4. CANDADO         | 5. CRITERIO / VERIFICACIÓN                      |
|  - Human-in-the-Loop| - Agentes Auditores / Self-Improving Loops      |
|  - VPS / Isolation  | - Creación automática de Skills (SOPs)          |
+---------------------+-------------------------------------------------+

```

### Pillar 1: CONTEXTO (Context Management)

* **Gestión de Ventana de Contexto**: La degradación de razonamiento comienza entre el 20% y el 40% de saturación. Es crítico mantener las sesiones limpias y compactar la información (`/compact`, `/clear`) [65, 156, 165].
* **Archivo Alma / Agents (`agents.md` / `cloud.md`)**: Mantener este archivo estandarizado en **menos de 200 líneas**. Debe contener únicamente la identidad, reglas inviolables y la estructura del proyecto [40, 115, 142, 409].
* **Memoria Externa Persistente**: Extraer la memoria fuera de la ventana de contexto mediante carpetas estructuradas de archivos Markdown (`Memory.md`, Obsidian indexado o Wiki de proyectos) [38, 140, 166, 191].

### Pillar 2: CONEXIONES (Tools &amp; Model Context Protocol)

* **MCP (Model Context Protocol)**: Usar el protocolo MCP para conectar los agentes con herramientas externas (n8n, GitHub, Meta Ads, Hixfield, Google Workspace, CRM) [3, 41, 60, 279, 303, 548].
* **Control de Navegador (Browser / Playwright)**: Cuando una aplicación no disponga de API o MCP, utilizar control nativo de navegador/Playwright para scraping, pruebas de UI o automatización de tareas en sitios web [59, 167, 528].

### Pillar 3: CADENCIA (Loops, Goals y Crons)

* **Framework DAME para Loops Agénticos** [74, 313, 314]:  
  * **D**isparador (*Trigger*): Evento por tiempo (Cron), webhook o comando manual.
  * **A**gente (*Action*): Ejecución de subagentes o tareas agénticas.
  * **M**eta Verificable (*Goal*): Criterio objetivo que decide cuándo detener el ciclo.
  * **E**stado/Memoria (*State*): Registro externo en archivos JSON/MD para no saturar la conversación.
* **Rutinas 24/7**: Desplegar automatizaciones en la nube de Antropic (Routines/Managed Agents) o en VPS dedicado con n8n [3, 60, 83, 187, 271].

### Pillar 4: CANDADO (Seguridad y Permisos)

* **Niveles de Permiso**: Configurar adecuadamente los modos de ejecución (*Plan Mode*, *Auto Mode*, *Bypass Permissions*) según la sensibilidad de la tarea [26, 64, 109, 569].
* **Human-in-the-Loop**: Implementar un paso de aprobación humana obligatoria para acciones de alto riesgo (ej. envío masivo de correos, transacciones financieras o modificación de bases de datos de producción) [49, 132, 190, 290].
* **Aislamiento**: Correr agentes autónomos continuos en entornos aislados (VPS, Docker, Mac Mini dedicado) para evitar vulnerabilidades como *Prompt Injection* [190, 271, 286, 290].

### Pillar 5: CRITERIO Y VERIFICACIÓN (Self-Improving System)

* **Subagentes de Verificación**: Separar roles entre un agente *orquestador*, un agente *implementador* y un agente *auditor/revisor* que ejecute linter, pruebas o inspección visual previa a la entrega [161, 167, 171].
* **Self-Improving Loop / Generación de Skills**: Convertir automáticamente los procedimientos repetidos y exitosos en archivos de *Skills* (`/skills/nombre-skill.md`) estandarizados para que no se pierdan al limpiar la conversación [25, 193, 402].

---

## 3\. Workflow de Trabajo Paso a Paso

Cualquier proyecto o tarea asignada a esta Skill debe seguir rigurosamente los siguientes 5 pasos:

### Paso 1: Diagnóstico del Cuello de Botella

Antes de escribir código o configurar nodos, identificar a cuál de las **6 etapas universales del negocio** pertenece el problema [15, 138, 309, 456]:

1. Captación y Marketing (Atraer *leads*).
2. Clasificación y Cualificación (Calificar oportunidad).
3. Conversión y Ventas (Cierre / Cotización).
4. *Onboarding* (Capacitación e integración).
5. Entrega del Servicio / Operaciones.
6. Retención y *Upsell* / LTV.

&gt; **Regla**: Atacar primero el cuello de botella donde el negocio pierde la mayor cantidad de tiempo o ingresos [15, 457].

### Paso 2: Diseño de la Estructura de Archivos del Proyecto

Crear una jerarquía clara dentro del directorio de trabajo:

```
/proyecto/
├── agents.md          ← Reglas generales, alma y directivas ( &lt; 200 líneas )
├── Memory.md          ← Estado actual y contexto persistente
├── /skills/           ← SOPs e instrucciones especializadas (.md)
├── /scratch/          ← Archivos de trabajo intermedio y borradores
└── /out/              ← Entregables finales verificados

```

### Paso 3: Definición y Creación de Skills (`/skills/`)

Cada *Skill* debe ser un archivo Markdown con un procedimiento operativo estandarizado:

```
# SKILL: [Nombre de la habilidad]
## Propósito
Explicación clara de qué resuelve este procedimiento.

## Pre-requisitos
Herramientas, conectores MCP o variables de entorno necesarias.

## Procedimiento Paso a Paso
1. Paso 1...
2. Paso 2...

## Criterio de Finalización (Goal)
Condición exacta que confirma que la tarea se completó correctamente.

```

### Paso 4: Configuración de Orquestación y Subagentes

* Para tareas complejas o masivas, activar el modo de razonamiento amplio (*Ultra Code* / *Swarm*) para dividir el trabajo en subagentes paralelos o secuenciales [59, 72, 120, 152].
* Guardar el progreso parcial de cada subagente en archivos de registro (`/scratch/progress.md`) para evitar que repitan la misma búsqueda [172].

### Paso 5: Verificación, Publicación y Auditoría de Tokens

1. **Comprobar Entregable**: Verificar que el resultado cumple la meta antes de publicar.
2. **Compactar Contexto**: Una vez finalizada la hito, guardar los avances en `Memory.md` y limpiar la sesión.
3. **Auditoría de Tokens y ROI**: Evaluar si el costo en tokens de la tarea justifica el resultado y adaptar el modelo a utilizar (ej. utilizar modelos económicos como Haiku/GLM para tareas mecánicas, y modelos de frontera como Opus/GPT-6 para planificación) [24, 66, 192, 382, 532].

---

## 4\. Guía de Selección de Herramientas e Infraestructura

| Necesidad del Negocio                             | Herramienta Recomendada              | Configuración de Arnés                                                                                          |
| ------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **Desarrollo de Software / MVPs / Landing Pages** | Claude Code / Codex / Antigravity    | Acceso local a carpeta, Playwright MCP para QA, GitHub MCP para backups [26, 114, 446].                       |
| **Asistente Personal 24/7 y Gestión Multicanal**  | OpenClaw / Hermes                    | Desplegado en VPS (Hostinger), conectado a Telegram/WhatsApp, con Cron jobs de revisión [187, 271, 391, 472]. |
| **Flujos Determinísticos y Lógica de Negocio**    | n8n (v2) / Make.com                  | Conectado a Claude Code vía n8n MCP para construir y editar workflows automáticamente [2, 61, 88, 96].        |
| **Investigación de Mercado y Scraping Web**       | Playwright + Claude Routines / Apify | Agente investigador con control de navegador sin dependencia de APIs fijas [61, 177, 261, 528].               |

---

## 5\. Mantra de Ejecución

&gt; *"No operes herramientas a mano; orquesta agentes que operen esas herramientas por ti. Y por encima de todo, no compres software genérico: construye y optimiza tus propios arneses agénticos con loops autónomos."* [194, 225, 324]