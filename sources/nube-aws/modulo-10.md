# MÓDULO 10

**1. ¿Cuáles de estas herramientas de AWS ayudan a su aplicación con la escalabilidad ascendente o descendente según la demanda? (Elija dos).**

- [ ] Zonas de disponibilidad  
- [x] Amazon EC2 Auto Scaling  
- [ ] AWS CloudFormation  
- [x] Elastic Load Balancing  
- [ ] AWS Config  

Porque Auto Scaling ajusta la cantidad de instancias y ELB distribuye el tráfico para soportar esa escalabilidad.

---

**2. ¿Qué servicio utilizaría para enviar alertas basadas en las alarmas de Amazon CloudWatch? (Seleccione la mejor respuesta).**

- [x] Amazon Simple Notification Service (Amazon SNS)  
- [ ] AWS CloudTrail  
- [ ] AWS Trusted Advisor  
- [ ] Amazon Route 53  

Porque CloudWatch envía notificaciones de alarmas a través de SNS.

---

**3. ¿Cuáles de estas características corresponden a Amazon EC2 Auto Scaling? (Elija tres).**

- [ ] Solo admite el escalado dinámico  
- [x] Responde a condiciones cambiantes agregando o terminando instancias  
- [ ] Entrega notificaciones push  
- [x] Lanza instancias a partir de una imagen de Amazon Machine (AMI) específica  
- [x] Obliga a ejecutar una cantidad mínima de instancias de Amazon EC2  

Porque Auto Scaling ajusta capacidad automáticamente, usa una AMI definida y mantiene un número mínimo configurado.
  
---

**4. ¿Cuál de estos elementos debe configurarse en un balanceador de carga de Elastic Load Balancing para aceptar el tráfico entrante? (Seleccione la mejor respuesta).**

- [ ] Un puerto  
- [ ] Una interfaz de red  
- [x] Un agente de escucha  
- [ ] Una instancia  

Porque el listener define protocolo y puerto para recibir tráfico.

---

**5. ¿Cuáles de estos elementos se utilizan para crear una configuración de lanzamiento de Amazon EC2 Auto Scaling? (Elija tres).**

- [x] Imagen de Amazon Machine (AMI)  
- [ ] Balanceador de carga  
- [x] Tipo de instancia  
- [ ] Nube virtual privada (VPC) y subredes  
- [x] Volúmenes de Amazon Elastic Block Store (Amazon EBS)  

Porque la configuración de lanzamiento define AMI, tipo de instancia y almacenamiento.

---

**6. ¿Cuál de estos servicios puede ayudarlo a recopilar métricas importantes sobre las instancias de Amazon Relational Database Service (Amazon RDS) y Amazon Elastic Compute Cloud (Amazon EC2)? (Seleccione la mejor respuesta).**

- [ ] Amazon CloudFront  
- [ ] Amazon CloudSearch  
- [x] Amazon CloudWatch  
- [ ] AWS CloudTrail  
- [ ] Amazon EC2 Auto Scaling  

Porque CloudWatch recopila y supervisa métricas de EC2 y RDS.

---

**7. ¿Cuáles de estos elementos corresponden a un grupo de Auto Scaling? (Elija tres).**

- [x] Tamaño mínimo  
- [ ] Comprobaciones de estado  
- [x] Capacidad deseada  
- [x] Tamaño máximo  

Porque un grupo de Auto Scaling se define por tamaño mínimo, deseado y máximo.

---

**8. Hay una auditoría en su empresa, y necesita un registro de todo el acceso a los recursos de AWS en la cuenta. ¿Cuál de estos servicios puede ayudarlo a proporcionar esta información? (Seleccione la mejor respuesta).**

- [ ] Amazon CloudWatch  
- [x] AWS CloudTrail  
- [ ] Amazon Elastic Compute Cloud (Amazon EC2)  
- [ ] Amazon Simple Notification Service (Amazon SNS)  

Porque CloudTrail registra todas las llamadas a la API y actividades en la cuenta.

---

**9. En Elastic Load Balancing, cuando el balanceador de carga detecta un destino en mal estado, ¿cuáles de estas medidas se cumplen? (Elija tres).**

- [x] Deja de dirigir el tráfico hacia ese destino  
- [ ] Activa una alarma  
- [x] Reanuda el direccionamiento del tráfico cuando detecta que el destino está en buen estado nuevamente  
- [ ] Reanuda el direccionamiento del tráfico cuando se reinicia de forma manual  
- [x] Dirige el tráfico a un destino en buen estado  

Porque ELB deja de enviar tráfico a destinos no saludables y lo restablece automáticamente cuando se recuperan.

---

**10. ¿Cuáles son los tres tipos de balanceadores de carga que ofrece Elastic Load Balancing?**

- [ ] Balanceador de carga de Internet  
- [x] Balanceador de carga de aplicaciones  
- [x] Balanceador de carga de red  
- [ ] Balanceador de carga informático  
- [x] Balanceador de carga clásico  
- [ ] Balanceador de carga de Auto Scaling  

Porque los tres tipos oficiales son Application Load Balancer, Network Load Balancer y Classic Load Balancer.
