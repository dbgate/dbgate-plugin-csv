const csvFormat = {
  storageType: 'csv',
  extension: 'csv',
  name: 'CSV',
  readerFunc: 'csvReader@dbgate-plugin-csv',
  writerFunc: 'csvWriter@dbgate-plugin-csv',
  args: [
    {
      type: 'select',
      name: 'delimiter',
      label: 'Delimiter',
      options: [
        { name: 'Comma (,)', value: ',' },
        { name: 'Semicolon (;)', value: ';' },
        { name: 'Tab', value: '\t' },
        { name: 'Pipe (|)', value: '|' },
      ],
      apiName: 'delimiter',
    },
    {
      type: 'checkbox',
      name: 'quoted',
      label: 'Quoted',
      apiName: 'quoted',
      direction: 'target',
    },
    {
      type: 'checkbox',
      name: 'header',
      label: 'Has header row',
      apiName: 'header',
      default: true,
    },
  ],
};

export default {
  fileFormats: [csvFormat],
};
