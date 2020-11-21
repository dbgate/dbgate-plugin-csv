const csv = require('csv');
const fs = require('fs');
const stream = require('stream');

class CsvPrepareStream extends stream.Transform {
  constructor({ header }) {
    super({ objectMode: true });
    this.structure = null;
    this.header = header;
  }
  _transform(chunk, encoding, done) {
    if (this.structure) {
      this.push(this.structure.columns.map((col) => chunk[col.columnName]));
      done();
    } else {
      this.structure = chunk;
      if (this.header) {
        this.push(chunk.columns.map((x) => x.columnName));
      }
      done();
    }
  }
}

async function csvWriter({ fileName, encoding = 'utf-8', header = true, delimiter, quoted }) {
  console.log(`Writing file ${fileName}`);
  const csvPrepare = new CsvPrepareStream({ header });
  const csvStream = csv.stringify({ delimiter, quoted });
  const fileStream = fs.createWriteStream(fileName, encoding);
  csvPrepare.pipe(csvStream);
  csvStream.pipe(fileStream);
  csvPrepare['finisher'] = fileStream;
  return csvPrepare;
}

module.exports = csvWriter;
