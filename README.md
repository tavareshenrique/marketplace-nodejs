# Marketplace

Back-end of the Marketplace app developed in Bootcamp module 3 Node.js.

## Compatibility

- Linux
- Windows
- Mac

### Prerequisites

It needs a connection to the database, preferably PostgreSQL. You need to add the <b>database.js</b> file to the database settings in the <b>config folder</b>.

database.js

```
module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'user',
  password: 'password',
  database: 'database',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}

```

## Installing

Install:

    yarn

## Running

With yarn:

    yarn start

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars1.githubusercontent.com/u/27022914?v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Henrique Tavares</b>
        </sub>
       </a>
       <br />
       <a href="https://github.com/tavareshenrique/app-gobarber/commits?author=tavareshenrique" title="Code">💻</a>
    </td>
  </tr>
</table>
