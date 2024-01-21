[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[EXPRESS__BADGE]: https://img.shields.io/badge/express-005CFE?style=for-the-badge&logo=express


<h1 align="center" style="font-weight: bold;">Project name 💻</h1>

![express][EXPRESS__BADGE]
![nest][NEST__BADGE]
![typescript][TYPESCRIPT__BADGE]
![javascript][JAVASCRIPT__BADGE]

<p align="center">
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> •
</p>

<p align="center">
  <b>Backend desenvolvido para desafio tecnico para uma vaga fullstack</b>
</p>

<h2 id="started">🚀 Getting started</h2>

Here you describe how to run your project locally

<h3>Prerequisites</h3>

Here you list all prerequisites necessary for running your project. For example:

- [NodeJS](https://github.com/)
- [Git 2](https://github.com)

<h3>Cloning</h3>

Para clonar o projeto

```bash
git clone https://github.com/kasilianaoliveira/desafio-fullstack.git
```

<h3> Environment Variables</h2>

Crie um arquivo `.env` e nele adicione a referencia do banco de dados

```bash
DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb-fs?schema=public"
```

<h3>Starting</h3>

Para iniciar o backend, caso utilize docker faça o passo do `sudo docker compose up`

```bash
cd backend
yarn i
sudo docker compose up
yarn prisma migrate dev
yarn prisma db seed
yarn dev
``````

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route                | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /detail/:id </kbd>   | Lista as informações detalhadas de uma escola 
| <kbd>GET /search</kbd>        | Lista todas escolas cadastradas
| <kbd>GET /results</kbd>       | Lista as informações para dashboard - Media total, Qtd de alunos,Classificação mais presente e Qtd de escolas por estado
| <kbd>DELETE /deleteSchool/:id</kbd>   | Deleta uma escola por ID
| <kbd>POST /school</kbd>   | Cadastra uma escola

<h3 id="get-auth-detail">GET /authenticate</h3>

**RESPONSE**
```json
{
 	"schools": [
		{
			"id_escola": 11047461,
			"nu_ano_saeb": 2021,
			"co_uf": 11,
			"sg_uf": "RO",
			"no_uf": "Rondônia",
			"co_municipio": 1100015,
			"no_municipio": "Alta Floresta D'Oeste",
			"no_escola": "EMEIEF 17 DE JUNHO",
			"tp_tipo_rede": 3,
			"tp_localizacao": 1,
			"tp_capital": 2,
			"qtd_alunos_inse": 69,
			"media_inse": 4.56,
			"inse_classificacao": "Nível IV",
			"pc_nivel_1": 0,
			"pc_nivel_2": 18.05,
			"pc_nivel_3": 31.45,
			"pc_nivel_4": 25.16,
			"pc_nivel_5": 18.53,
			"pc_nivel_6": 4.99,
			"pc_nivel_7": 1.82,
			"pc_nivel_8": 0
		},
  ]
}
```
