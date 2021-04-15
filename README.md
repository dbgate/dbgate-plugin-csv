# dbgate-plugin-csv

This repository was moved into [DbGate](https://github.com/dbgate/dbgate) repository

CSV import/export plugin for DbGate

## Usage without DbGate

Export from fake object reader into CSV file. Fake object file can be replaced with other reader/writer factory functions, as described in 
[dbgate-api package](https://www.npmjs.com/package/dbgate-api)

```javascript
const dbgateApi = require('dbgate-api');
const dbgatePluginCsv = require("dbgate-plugin-csv");

dbgateApi.registerPlugins(dbgatePluginCsv);


async function run() {
  const reader = await dbgateApi.fakeObjectReader();
  const writer = await dbgatePluginCsv.shellApi.writer({ fileName: 'myfile1.csv', separator: ';' });
  await dbgateApi.copyStream(reader, writer);
  
  console.log('Finished job script');
}
dbgateApi.runScript(run);


```

## Factory functions

### shellApi.reader
Reads CSV file
```js
  const dbgatePluginCsv = require("dbgate-plugin-csv");
  const reader = await dbgatePluginCsv.shellApi.reader({
    fileName: 'test.csv',
    encoding: 'utf-8',
    header: true,
    delimiter: ',',
    quoted: false,
    limitRows: null
  });
```

### shellApi.writer
Writes CSV file
```js
  const dbgatePluginCsv = require("dbgate-plugin-csv");
  const writer = await dbgatePluginCsv.shellApi.writer({
    fileName: 'test.csv',
    encoding: 'utf-8',
    header: true,
    delimiter: ',',
    quoted: false
  });
```
