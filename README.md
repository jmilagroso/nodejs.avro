# nodejs.avro
Using [Avro](https://avro.apache.org/docs/1.8.1/spec.html) specification in [NodeJS](https://nodejs.org/en/)

```
/* ----------------- Console output ----------------- */
/*
Avro serialised:
                 Albert
Bytes: 8 bytes  //Bytes passed over HTTP
--------------------------------------
Avro deserialised: {"kind":"CAT","name":"Albert"}
Bytes: 30 bytes //Actual bytes
*/
/* ----------------- Console output ----------------- */

//8 bytes VS 30 bytes ~ 73% smaller data size using avro! FTW!
```
