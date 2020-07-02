const {spawnSync} = require('child_process');

const entry = process.argv[2] || 'nttdi-nowex-exam-checklist';

spawnSync(`now-cli develop --open --entry =../src/${entry}`,{
    shell: true,
    stdio: "inherit"
});