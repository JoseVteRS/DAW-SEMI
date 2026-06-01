# MÓDULO 8

**1. Está diseñando una aplicación web de comercio electrónico que escalará a cientos de miles de usuarios simultáneos. ¿Qué tecnología de base de datos es la más adecuada para mantener el estado de la sesión en este ejemplo?**
- [ ] Amazon Relational Database Service (Amazon RDS)  
- [x] Amazon DynamoDB  
- [ ] Amazon Redshift  
- [ ] Amazon Simple Storage Service (Amazon S3)  

Porque ofrece latencia muy baja y escalabilidad masiva, ideal para almacenar estados de sesión.

---

**2. Para buscar un elemento en una tabla de Amazon DynamoDB utilice un atributo distinto de la clave principal del elemento. ¿Cuál de estas operaciones debería utilizar? (Seleccione la mejor respuesta).**
- [ ] PutItem  
- [x] Scan  
- [ ] Query  
- [ ] GetItem  

Porque Scan permite buscar usando atributos distintos a la clave principal.

---

**3. En Amazon DynamoDB, ¿qué le permite realizar la operación de consulta? (Seleccione la mejor respuesta).**
- [ ] Consultar una tabla con la clave de partición y un filtro opcional de clave de ordenamiento  
- [ ] Consultar cualquier índice secundario que exista para una tabla  
- [ ] Recuperar de manera eficaz los elementos de una tabla o de un índice secundario  
- [x] Todas las opciones anteriores  

Porque Query permite consultar por clave, usar índices secundarios y recuperar datos eficientemente.

---

**4. ¿Qué servicio en la nube de AWS es el más adecuado para analizar sus datos con el lenguaje de consulta estructurado (SQL) estándar y las herramientas de inteligencia empresarial existentes? (Seleccione la mejor respuesta).**
- [ ] Amazon Relational Database Service (Amazon RDS)  
- [ ] Amazon Simple Storage Service Glacier  
- [ ] Amazon DynamoDB  
- [x] Amazon Redshift  

Porque es un data warehouse diseñado para análisis con SQL y herramientas BI.

---

**5. En Amazon DynamoDB, un atributo es _____. (Seleccione la mejor respuesta).**
- [x] un elemento de datos fundamental  
- [ ] un conjunto de elementos  
- [ ] un conjunto de atributos  

Porque es la unidad básica de datos dentro de un elemento.

---

**6. Si está desarrollando una aplicación que requiere una base de datos con rendimiento extremadamente rápido, escalabilidad veloz y flexibilidad en el esquema de la base de datos, ¿qué servicio debería tener en cuenta? (Seleccione la mejor respuesta).**
- [ ] Amazon Relational Database Service (Amazon RDS)  
- [ ] Amazon ElastiCache  
- [x] Amazon DynamoDB  
- [ ] Amazon Redshift  

Porque es NoSQL, altamente escalable y de baja latencia.

---

**7. ¿Cuál de estos casos de uso es adecuado para utilizar Amazon Relational Database Service (Amazon RDS)? (Seleccione la mejor respuesta).**
- [ ] Tasas de lectura o escritura masivas  
- [ ] Solicitudes GET o PUT sencillas  
- [x] Transacciones complejas  
- [ ] Todas las opciones anteriores  

Porque RDS es ideal para cargas transaccionales con integridad ACID.

---

**8. Una empresa tiene una aplicación, la cual consiste en una capa .NET que se conecta a una base de datos MySQL.Quiere migrar esta aplicación a AWS para aprovechar sus características, como la alta disponibilidad y las copias de seguridad automatizadas. ¿Cuál de estas opciones sería la base de datos ideal para este caso de uso? (Seleccione la mejor respuesta).**
- [ ] Amazon DynamoDB  
- [ ] Amazon RDS  
- [x] Amazon Aurora  
- [ ] Amazon Redshift  

Porque es compatible con MySQL y ofrece mayor rendimiento y alta disponibilidad.

---

**9. ¿Verdadero o falso? Amazon RDS implementa parches en el software de la base de datos y realiza copias de seguridad de esta de manera automática, lo que implica el almacenamiento de las copias de seguridad durante un periodo de retención definido por el usuario y la habilitación de la recuperación a un momento dado.**
- [x] Verdadero  
- [ ] Falso  

Porque RDS gestiona parches y copias automáticas con recuperación a un punto en el tiempo.

---

**10.  ¿Qué debe tener en cuenta a la hora de elegir un tipo de base de datos? (Seleccione la mejor respuesta).**
- [ ] Volumen de datos  
- [ ] Período de acceso a los datos  
- [ ] Frecuencia de las consultas  
- [ ] Con alta disponibilidad  
- [x] Todas las opciones anteriores  
Porque la elección depende del volumen, patrones de acceso, frecuencia y requisitos de disponibilidad.
