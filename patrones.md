
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

