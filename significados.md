## En este lugar, voy a poner los significados de las palabras para tener una mejor comprensión del código;

**Helmet** : Helmet es un middleware para aplicaciones Express que ayuda a proteger tu API estableciendo varios encabezados HTTP relacionados con la seguridad. Su objetivo principal es reducir vulnerabilidades comunes en aplicaciones web, como ataques XSS, clickjacking, fuga de información, entre otros.

**ataques XSS** : Los ataques XSS, o Cross-Site Scripting, son una vulnerabilidad de seguridad común en aplicaciones web que permite a un atacante inyectar código malicioso, normalmente en JavaScript, en el contenido que se muestra a los usuarios.
 Este tipo de ataque ocurre cuando una aplicación web utiliza datos de entrada de un usuario sin validarlos o sanitizarlos adecuadamente, lo que permite que el código malicioso se ejecute en el navegador del usuario víctima.
 El atacante no necesita atacar directamente a la víctima, sino que explota una vulnerabilidad en un sitio web legítimo que la víctima visita, convirtiendo así el sitio en un colaborador involuntario del ataque.

 **clickjacking** :El clickjacking, también conocido como ataque de redireccionamiento de interfaz de usuario (UI redressing), es una técnica maliciosa que engaña a los usuarios de Internet para que revelen información confidencial o permitan el control de su ordenador al hacer clic en páginas web que parecen inocentes.￼10
 Este ataque se basa en la superposición de elementos invisibles o transparentes sobre elementos legítimos de una página web, haciendo que el usuario crea que está interactuando con una acción segura, cuando en realidad está activando una acción oculta y potencialmente dañina.


 **Fee** En el contexto de trading o intercambio financiero, un fee es una comisión o tarifa que se cobra por realizar una operación, como comprar o vender activos. Por ejemplo, si compras acciones, el sistema puede cobrarte un pequeño porcentaje del monto como fee.

**Hot Reload**: Hot reload es una funcionalidad que reinicia automáticamente el servidor o la aplicación cuando detecta cambios en el código fuente. Así, puedes ver los resultados de tus modificaciones al instante, sin tener que detener y volver a iniciar el servidor manualmente


**Volatility factor** El volatility factor es un parámetro que controla cuánto pueden variar los precios de los activos en cada actualización de la simulación de mercado. Un valor más alto significa que los precios pueden cambiar más rápidamente y de forma más impredecible, simulando un mercado más volátil. .

**CORS** : cors (Cross-Origin Resource Sharing) es un mecanismo de seguridad que permite controlar qué dominios pueden acceder a recursos de tu servidor desde navegadores web. Por defecto, los navegadores bloquean solicitudes hechas desde un origen diferente al del servidor. Usando CORS puedes permitir o restringir estos accesos configurando encabezados HTTP apropiados. En Node.js, el paquete `cors` facilita esta configuración en aplicaciones Express.



**SMA**: SMA significa Simple Moving Average (Media Móvil Simple). Es un indicador técnico utilizado en análisis de mercados financieros para suavizar los precios de un activo durante un período determinado, mostrando la tendencia general eliminando fluctuaciones cortas. Se calcula promediando los precios de cierre de un activo durante un número específico de días o periodos.

**SIGTERM**: SIGTERM es una señal del sistema operativo utilizada para solicitar la terminación de un proceso de forma controlada. Cuando un proceso recibe SIGTERM, puede ejecutar tareas de limpieza antes de finalizar, como cerrar conexiones o guardar datos. Es comúnmente usada para apagar servidores o aplicaciones de manera segura.

**SIGINIT**: SIGINT es una señal del sistema operativo que se envía a un proceso para interrumpirlo. Normalmente se genera cuando el usuario presiona Ctrl+C en la terminal. Al recibir SIGINT, el proceso puede ejecutar tareas de limpieza antes de finalizar, permitiendo un cierre controlado.


**Health check** Un health check es una verificación rápida que realiza una aplicación para indicar si está funcionando correctamente. Normalmente responde con un estado como "OK" y detalles básicos, permitiendo a sistemas de monitoreo saber si el servicio está activo y disponible.


