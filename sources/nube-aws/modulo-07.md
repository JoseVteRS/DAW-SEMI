# MÓDULO 7

**1. ¿Verdadero o falso? Amazon Simple Storage Service (Amazon S3) es un almacenamiento de objetos adecuado para guardar archivos sin formato, como documentos de Microsoft Word, fotos y otros.**
- [x] Verdadero  
- [ ] Falso  

Porque S3 está diseñado para almacenar objetos como documentos e imágenes.

---

**2. Amazon S3 replica todos los objetos________. (Seleccione la mejor respuesta)**
- [ ] en varios volúmenes dentro de una zona de disponibilidad  
- [x] en varias zonas de disponibilidad dentro de la misma región  
- [ ] en varias regiones para obtener mayor durabilidad  
- [ ] en varios buckets de S3  

Porque replica automáticamente entre múltiples zonas dentro de la región.

---

**3. ¿Cuáles de las siguientes opciones pueden utilizarse como clase de almacenamiento para un objeto de S3? (Elija TRES)**
- [x] Acceso estándar  
- [ ] AWS Storage Gateway  
- [x] S3: acceso poco frecuente  
- [x] Simple Storage Service Glacier  
- [ ] S3: almacenamiento de redundancia reducida  
- [ ] Amazon Dynamo DB  

Porque son clases válidas de almacenamiento de S3.

---

**4. El nombre de un bucket de S3 debe ser único________. (Seleccione la mejor respuesta)**
- [x] en todo el mundo, en todas las cuentas de AWS  
- [ ] dentro de una región  
- [ ] en todas sus cuentas de AWS  
- [ ] en su cuenta de AWS  

Porque los nombres de bucket son globalmente únicos.

---

**5.  Puede utilizar Amazon Elastic File System (Amazon EFS) para: (Seleccione la mejor respuesta)**
- [ ] proporcionar almacenamiento de archivos sencillo, escalable y elástico para su uso solo con los servicios de AWS.  
- [x] implementar almacenamiento para instancias de Amazon EC2 a las que puedan acceder varias máquinas virtuales al mismo tiempo.  
- [ ] alojar una CDN robusta para brindar sitios web completos con contenido dinámico, estático y de streaming.  
- [ ] generan contenido específico del usuario  

Porque EFS permite acceso simultáneo desde múltiples instancias.

---

**6.  Se recomienda Amazon Elastic Block Store (Amazon EBS) cuando los datos________y________. (Seleccione dos opciones).**
- [ ] requieren almacenamiento de objetos  
- [x] deben ser de rápido acceso y perdurar a largo plazo  
- [x] exigen una solución de cifrado  
- [ ] deben almacenarse en una zona de disponibilidad diferente a la de la instancia de EC2  

Porque ofrece baja latencia, persistencia y cifrado.

---

**7.  ¿Verdadero o falso? De forma predeterminada, todos los datos almacenados en Amazon S3 son visibles de manera pública**.
- [ ] Verdadero  
- [x] Falso  

Porque los objetos son privados por defecto.

---

**8.  Respecto a Amazon S3 Glacier, ¿qué es un Vault? (Seleccione la mejor respuesta)**
- [ ] Las reglas que determinan quién puede (o no) acceder a los archivos  
- [ ] Un objeto (fotos, videos, archivos o documentos)  
- [x] Un contenedor para almacenar archivos  
- [ ] Una política con la que se identifica quién tiene acceso al contenido almacenado en Glacier  

Porque es el contenedor donde se almacenan los archivos archivados.

---

**9.  ¿Verdadero o falso? Cuando se crea un bucket en Amazon S3, se asocia con una región de AWS específica.**
- [x] Verdadero  
- [ ] Falso  

Porque cada bucket se crea en una región determinada.

---

**10.  ¿Cuáles de las siguientes son características de Amazon Elastic Block Store (Amazon EBS)? (Seleccione dos opciones).**
- [x] Amazon EBS se replica de manera automática dentro de una zona de disponibilidad  
- [x] Los volúmenes de Amazon EBS se pueden cifrar de forma transparente en las cargas de trabajo en las instancias asociadas  
- [ ] Los datos de Amazon EBS están automáticamente respaldados en cinta.  
- [ ] Los datos de un volumen de Amazon EBS se pierden cuando se detiene la instancia adjunta.  

Porque ofrece replicación dentro de la zona de disponibilidad y cifrado integrado.