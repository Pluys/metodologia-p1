## SINGLETON

El patrón **Singleton** garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella. Es útil cuando se requiere que un objeto coordine acciones en todo el sistema, como una configuración o una conexión a base de datos. Se implementa restringiendo la creación de instancias y exponiendo un método estático que retorna la instancia única.

## FACTORY

El patrón **Factory** abstrae el proceso de creación de objetos, delegando la instanciación a subclases o métodos especializados. Permite crear objetos sin exponer la lógica de creación al cliente y favorece la extensión del sistema. Es ideal cuando el sistema debe ser independiente de las clases concretas que necesita crear.

## DECORATOR

El patrón **Decorator** permite añadir funcionalidades a un objeto de manera dinámica, sin modificar su estructura original. Utiliza una composición de objetos, donde los decoradores envuelven al objeto base y agregan comportamientos adicionales. Es útil para cumplir el principio de abierto/cerrado y evitar la proliferación de subclases.

## TEMPLATE

El patrón **Template** define la estructura de un algoritmo en una clase base, dejando algunos pasos como métodos abstractos que deben ser implementados por las subclases. Permite reutilizar la lógica común y personalizar partes específicas del proceso, promoviendo la reutilización y la consistencia en la implementación de algoritmos.

## OBSERVER

El patrón **Observer** establece una relación de dependencia uno-a-muchos entre objetos, de modo que cuando uno cambia su estado, todos sus dependientes son notificados automáticamente. Es ampliamente utilizado en sistemas de eventos, interfaces gráficas y modelos de publicación/suscripción, facilitando la comunicación desacoplada entre componentes.

## BUILDER

El patrón **Builder** separa la construcción de un objeto complejo de su representación, permitiendo crear diferentes variantes del objeto utilizando el mismo proceso de construcción. Es útil cuando un objeto requiere múltiples pasos para su creación y se desea evitar constructores con muchos parámetros o configuraciones complicadas.

## FACADE

El patrón **Facade** proporciona una interfaz simplificada para un conjunto de interfaces en un subsistema, ocultando la complejidad interna y facilitando el uso del sistema por parte de los clientes. Es útil para desacoplar el sistema y reducir la dependencia entre componentes, mejorando la mantenibilidad y la legibilidad del código.

## STRATEGY

El patrón **Strategy** define una familia de algoritmos, encapsula cada uno y los hace intercambiables. Permite seleccionar el algoritmo adecuado en tiempo de ejecución sin modificar el cliente. Es útil para cumplir el principio de abierto/cerrado y para evitar condicionales complejos relacionados con la selección de comportamientos.

## ADAPTER

El patrón Adapter permite que dos interfaces incompatibles colaboren entre sí, actuando como un traductor entre ellas. Su objetivo es convertir la interfaz de una clase existente en otra interfaz que el cliente espera. Es especialmente útil cuando se desea reutilizar clases existentes sin modificar su código, integrándolas en sistemas con diferentes interfaces. El Adapter encapsula la lógica de conversión, facilitando la interoperabilidad y promoviendo el principio de reutilización de código.

## STATE

El patrón State soluciona la dicha cuando una clase tiene muchos estados, y los metodos de la misma dependen de un "estado" de la clase (Cada método verificaria el estado y tendría una extensa lista de funciones dependiendo de el estado: Eso, por cada método)
Por Ejemplo: Activo, Inactivo (Cada método verificaría el estado, y tendría dos funciones distintas dependiendo el mismo)
El patrón State hace que el "estado" sea una clase abstracta con todos los metodos que compartirían dichos estados, y que los distintos estados (En este caso, activo e inactivo) sean una clase que hereda de la abstracta, e implementen los métodos por separado. De esta manera, la clase que contenía al estado y los métodos, simplemente los invoca haciendo "estado.método", y el estado (Que puede ser Activo o Inactivo) se encarga de el resto.

## BRIDGE

El patrón Bridge reduce la repetición de lógica entre módulos que comparten funcionalidades (Por ejemplo, enviarMsjMB/recibirMsjMB, y enviarMsjPC/recibirMsjPC), haciendo los métodos parte del contrato de una interfaz, y hacer que las clases correspondientes (Ej: MensajeriaMB, MensajeriaPC) se adhieran al contrato (Ej: IMensajeria; enviarMsj, recibirMsj).
Posterior a eso, se crea una clase abstracta que tenga una variable que sea del tipo de la interfaz (IMensajeria), y métodos que (En nombre) representarían a los de la interfaz.
Al crear una nueva clase que extienda de la abstracta, tendrá como variable el tipo de Mensajero correspondiente, y podrán implementarse los metodos de su variable, y lógica extra si es necesario, en los métodos de la clase creada, que en fin representaban a los de la interfaz. De esta manera, la implementación es fácilmente extensible y cumple con el open/close principle.

## COMMAND

El patrón Command soluciona los distintos pedidos de peticiones de los usuarios (Ejemplo; Comprar, Vender) realizados a través de una función (function ManejarOrden(tipo)). (La función manualmente verifica el tipo de comando que es, similar al state)
La manera en la que lo soluciona, es separando cada funcionalidad (Comprar y Vender) en su propio propio objeto, y que los objetos compartan, a través de una interfaz, un método, preferiblemente llamado "execute" o "run", para que la clase original llame a el método original (En este caso, ManejarOrden), y reciba el comando (El objeto) como parámetro, y que el objeto haga "orden.execute()", de esta manera, la función ManejarOrden es fácilmente extendible, respeta open/close principle, y modulariza el código.

## PROXY

El patrón Proxy se encarga de ser un intermediario entre un usuario y un servicio a través de una clase intermediaria, que comparte el mismo contrato (interfaz) que el servicio. La clase proxy invoca al método de servicio correspondiente por método, y hace lógica extra externa al mismo. Proxy se suele usar con APIs, y ser de intermediario entre el cliente y la API.

## PATRONES QUE PODEMOS USAR EN ESTE PROYECTO

\*_SINGLETON_ ----> STORAGE
_BUILDER_ ---> TIPO DE USUARIOS
_STRATEGY_ ---> EN LOS RISK
_OBSERVER_ ---> NOTIFICA A LOS USUARIOS LOS CAMBIOS DEL MERCADO [funcionalidad extra]
_FACADE_ ---> ENCAPSULAR LOGICA EN FUNCIONES QUE NO LE CORRESPONDE
