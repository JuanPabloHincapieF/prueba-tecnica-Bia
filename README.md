# Prueba Técnica Bia

## Instalación

Para poder instalar este aplicativo debemos de clonar el repositorio en una carpeta donde vamos a guardar el proyecto:

```bash
git clone https://github.com/JuanPabloHincapieF/prueba-tecnica-Bia.git
```

Luego de esto tendremos que ejecutar el comando `npm i ` dentro de la carpeta que se acaba de crear.

## Pruebas Unitarias

En el desarrollo se realizaron 15 pruebas unitarias, estas fueron realizadas con Mocha y Supertest, para poder ejecutar las pruebas se debe usar el siguiete comando:

`npm test`

## Uso

Para utilizar la aplicacion se puede utilizar el comando `npm run dev` asi nuestro servidor va a estar activo.

### Uso con el método GET

Para recibir la información con el método GET debemos utilizar la siguiente ruta:

`http://localhost:3000/api/:date/period`

Ejemplo de uso:

Con la ruta `http://localhost:3000/api/2022-10-12/weekly` resultado será:

```JSON
[
  {
    "meter_date": "2022-10-10 00:00:00",
    "value": 0
  },
  {
    "meter_date": "2022-10-11 00:00:00",
    "value": 0
  },
  {
    "meter_date": "2022-10-12 00:00:00",
    "value": 539.75958
  },
  {
    "meter_date": "2022-10-13 00:00:00",
    "value": 571.8937999999998
  },
  {
    "meter_date": "2022-10-14 00:00:00",
    "value": 558.74927
  },
  {
    "meter_date": "2022-10-15 00:00:00",
    "value": 547.8400899999997
  },
  {
    "meter_date": "2022-10-16 00:00:00",
    "value": 390.2697699999999
  }
]
```

### Uso con el método POST

Para recibir la información con el método POST debemos utilizar la siguiente ruta, además de ello, debemos enviar la información por el body:

`http://localhost:3000/api`

```JSON
{
  "date":"2022-10-12",
  "period":"daily"
}
```

Ejemplo de uso:

Información enviada en el body:

```JSON
{
  "date":"2022-10-12",
  "period":"daily"
}
```

La respuesta de esta peticion será:

```JSON
[
  {
    "meter_date": "2022-10-12 00:00:00",
    "value": "0"
  },
  {
    "meter_date": "2022-10-12 01:00:00",
    "value": "0"
  },
  {
    "meter_date": "2022-10-12 02:00:00",
    "value": "3.1815199999999777"
  },
  {
    "meter_date": "2022-10-12 03:00:00",
    "value": "4.084969999999998"
  },
  {
    "meter_date": "2022-10-12 04:00:00",
    "value": "3.438290000000052"
  },
  {
    "meter_date": "2022-10-12 05:00:00",
    "value": "3.961490000000026"
  },
  {
    "meter_date": "2022-10-12 06:00:00",
    "value": "3.5401600000000144"
  },
  {
    "meter_date": "2022-10-12 07:00:00",
    "value": "3.6774900000000343"
  },
  {
    "meter_date": "2022-10-12 08:00:00",
    "value": "3.097470000000044"
  },
  {
    "meter_date": "2022-10-12 09:00:00",
    "value": "2.8346599999999853"
  },
  {
    "meter_date": "2022-10-12 10:00:00",
    "value": "3.7407799999999725"
  },
  {
    "meter_date": "2022-10-12 11:00:00",
    "value": "3.2685599999999795"
  },
  {
    "meter_date": "2022-10-12 12:00:00",
    "value": "4.028189999999995"
  },
  {
    "meter_date": "2022-10-12 13:00:00",
    "value": "4.548340000000053"
  },
  {
    "meter_date": "2022-10-12 14:00:00",
    "value": "4.712030000000027"
  },
  {
    "meter_date": "2022-10-12 15:00:00",
    "value": "5.2922399999999925"
  },
  {
    "meter_date": "2022-10-12 16:00:00",
    "value": "4.639769999999999"
  },
  {
    "meter_date": "2022-10-12 17:00:00",
    "value": "4.499209999999948"
  },
  {
    "meter_date": "2022-10-12 18:00:00",
    "value": "0"
  },
  {
    "meter_date": "2022-10-12 19:00:00",
    "value": "4.744869999999992"
  },
  {
    "meter_date": "2022-10-12 20:00:00",
    "value": "0"
  },
  {
    "meter_date": "2022-10-12 21:00:00",
    "value": "3.6817700000001423"
  },
  {
    "meter_date": "2022-10-12 22:00:00",
    "value": "4.044439999999895"
  },
  {
    "meter_date": "2022-10-12 23:00:00",
    "value": "3.8347100000000864"
  }
]
```
