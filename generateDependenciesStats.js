const fs = require('fs');

function getDependenciesStats() {
    const packageJson = require('./package.json');
    const dependencies = packageJson.dependencies || {};

    // Aqui, você pode realizar outras operações, como verificar versões, popularidade, etc.
    // Neste exemplo, apenas criamos uma lista simples com o nome das dependências.
    const dependenciesStats = Object.keys(dependencies).map(name => ({ name }));

    return dependenciesStats;
}

function saveToJson(data, filename = 'dependencies_stats.json') {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

if (require.main === module) {
    const stats = getDependenciesStats();
    saveToJson(stats);
}
