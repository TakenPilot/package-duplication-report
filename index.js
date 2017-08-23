const findDuplicateDependencies = require('find-duplicate-dependencies');

findDuplicateDependencies().then(function (result) {
  const keys = Object.keys(result);
  for(let i = 0; i < keys.length; i++) {
    const packageName = keys[i];
    const list = result[packageName];

    let str = packageName + ':\n';
    str += list.map(item => '  ' + [item.version, item.path.split('/').join('->'), item.from].join(', ')).join('\n');

    console.log(str);
  }
}).catch(function (err) {
  console.error(err.stack);
  return process.exit(1);
});
