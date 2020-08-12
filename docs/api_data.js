define({ "api": [
  {
    "type": "DELETE",
    "url": "/client/:id",
    "title": "Excluir cliente",
    "name": "DeleteClient",
    "group": "Client",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID do cliente</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "deleted",
            "description": "<p>Número de linhas afetadas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"deleted\": 1\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/components/clients/routes.ts",
    "groupTitle": "Client"
  },
  {
    "type": "GET",
    "url": "/client/:id",
    "title": "Listar cliente por ID",
    "name": "GetClient",
    "group": "Client",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID do cliente</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID do cliente criado</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>Razão social da empresa</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "fantasyName",
            "description": "<p>Nome fanstasia da empresa</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "cnpj",
            "description": "<p>CNPJ da empresa</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "creationDate",
            "description": "<p>Data de criação da empresa. Formato: YYYY-MM-DD</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"id\": 10,\n   \"companyName\": \"Nome Empresa\",\n   \"fantasyName\": \"Empresa\",\n   \"cnpj\": \"12345678901234\",\n   \"creationDate\": \"1999-05-01\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "ClientNotFound",
            "description": "<p>ID do cliente não encontrado</p>"
          }
        ]
      }
    },
    "filename": "src/components/clients/routes.ts",
    "groupTitle": "Client"
  },
  {
    "type": "GET",
    "url": "/client",
    "title": "Listar clientes",
    "name": "ListClient",
    "group": "Client",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "client",
            "description": "<p>Lista de clientes cadastrados</p>"
          },
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "client.id",
            "description": "<p>ID do cliente criado</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "client.companyName",
            "description": "<p>Razão social da empresa</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "client.fantasyName",
            "description": "<p>Nome fanstasia da empresa</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "client.cnpj",
            "description": "<p>CNPJ da empresa</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "client.creationDate",
            "description": "<p>Data de criação da empresa. Formato: YYYY-MM-DD</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n     \"id\": 10,\n     \"companyName\": \"Nome Empresa\",\n     \"fantasyName\": \"Empresa\",\n     \"cnpj\": \"12345678901234\",\n     \"creationDate\": \"1999-05-01\"\n  },\n...\n]",
          "type": "JSON"
        }
      ]
    },
    "filename": "src/components/clients/routes.ts",
    "groupTitle": "Client"
  },
  {
    "type": "POST",
    "url": "/client",
    "title": "Criar novo cliente",
    "name": "PostClient",
    "group": "Client",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>Razão social da empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fantasyName",
            "description": "<p>Nome fanstasia da empresa. (Opcional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cnpj",
            "description": "<p>CNPJ da empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "creationDate",
            "description": "<p>Data de criação da empresa. Formato: YYYY-MM-DD</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"companyName\": \"Nome Empresa\",\n   \"fantasyName\": \"Empresa\",\n   \"cnpj\": \"12345678901234\",\n   \"creationDate\": \"1999-05-01\"\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID do cliente criado</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>Razão social da empresa</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "fantasyName",
            "description": "<p>Nome fanstasia da empresa</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "cnpj",
            "description": "<p>CNPJ da empresa</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "creationDate",
            "description": "<p>Data de criação da empresa. Formato: YYYY-MM-DD</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"id\": 10,\n   \"companyName\": \"Nome Empresa\",\n   \"fantasyName\": \"Empresa\",\n   \"cnpj\": \"12345678901234\",\n   \"creationDate\": \"1999-05-01\"\n}",
          "type": "JSON"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "ClientInvalidParameters",
            "description": "<p>Parametros do cliente enviado estão inválido.</p>"
          }
        ]
      }
    },
    "filename": "src/components/clients/routes.ts",
    "groupTitle": "Client"
  }
] });
