const Bundler = require('parcel-bundler');
const Path = require('path');
const nodemon = require('nodemon');

const entryFiles = Path.join(__dirname, './src/bin/www/server.ts');

const options = {
  outDir: './dist', // O diretório de saída para construir os arquivos, dist é o padrão
  outFile: 'app.js', // O nome do arquivo de saída
  watch: true, // whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
  cache: true, // Habilita ou desabilita o cache, true é o padrão
  cacheDir: '.cache', // O diretório de cache a ser utilizado, .cache é o padrão
  contentHash: false, // Desabilita o hash de conteúdo de ser incluído no nome do arquivo
  minify: false, // Minifica o arquivo, habilitado se process.env.NODE_ENV === 'production'
  scopeHoist: false, // Torna ligado a flag de scope hoisting/tree shaking experimental, para pequenas builds de produção
  target: 'node', // browser/node/electron, browser é o padrão
  bundleNodeModules: false, // Por padrão, as dependências do package.json não são incluídas ao usar a opção 'node' ou 'electron' na opção 'target' acima. Defina como true para adicioná-los ao bundle, false é o padrão
  logLevel: 3, // 5 = irá salvar tudo em um arquivo, 4 = assim como o 3 mas com timestamp e adicionalmente irá logar as requisições http realizadas para o servidor, 3 = irá loggar tudo, 2 = irá loggar avisos e erros, 1 = irá loggar erros
  sourceMaps: true, // Habilita ou desabilita sourcemaps, habilitado é o padrão (builds minificadas atualmente sempre criam sourcemaps)
  detailedReport: false // Exibe um report detalhado dos bundles, assets, tamanho de arquivos e tempos, false é o padrão, os reports são exibidos somente se o watch estiver desabilidado
};

(async function() {
  const bundler = new Bundler(entryFiles, options);
  await bundler.bundle();

  process.env.NODE_ENV = 'development';
  nodemon({
    script: './dist/app.js',
    ext: 'js json'
  });

  nodemon
    .on('start', () => console.log('App iniciado!'))
    .on('quit', () => {
      console.log('App has quit');
      process.exit();
    });

})();
