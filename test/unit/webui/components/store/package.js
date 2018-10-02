export const packageInformation = [
  {
    name: 'jquery',
    title: 'jQuery',
    description: 'JavaScript library for DOM operations',
    version: '3.3.2-pre',
    main: 'dist/jquery.js',
    homepage: 'https://jquery.com',
    author: {
      name: 'JS Foundation and other contributors',
      url: 'https://github.com/jquery/jquery/blob/master/AUTHORS.txt'
    },
    repository: {
      type: 'git',
      url: 'https://github.com/jquery/jquery.git'
    },
    keywords: ['jquery', 'javascript', 'browser', 'library'],
    bugs: {
      url: 'https://github.com/jquery/jquery/issues'
    },
    license: 'MIT',
    dependencies: {},
    devDependencies: {
      'babel-core': '7.0.0-beta.0',
      'babel-plugin-transform-es2015-for-of': '7.0.0-beta.0',
      commitplease: '3.2.0',
      'core-js': '2.5.7',
      'eslint-config-jquery': '1.0.1',
      grunt: '1.0.3',
      'grunt-babel': '7.0.0',
      'grunt-cli': '1.2.0',
      'grunt-compare-size': '0.4.2',
      'grunt-contrib-uglify': '3.3.0',
      'grunt-contrib-watch': '1.1.0',
      'grunt-eslint': '20.2.0',
      'grunt-git-authors': '3.2.0',
      'grunt-jsonlint': '1.1.0',
      'grunt-karma': '2.0.0',
      'grunt-newer': '1.3.0',
      'grunt-npmcopy': '0.1.0',
      'gzip-js': '0.3.2',
      husky: '0.14.3',
      insight: '0.10.1',
      jsdom: '5.6.1',
      karma: '2.0.3',
      'karma-browserstack-launcher': '1.3.0',
      'karma-chrome-launcher': '2.2.0',
      'karma-firefox-launcher': '1.1.0',
      'karma-qunit': '1.2.1',
      'load-grunt-tasks': '4.0.0',
      'native-promise-only': '0.8.1',
      'promises-aplus-tests': '2.1.2',
      q: '1.5.1',
      'qunit-assert-step': '1.1.1',
      qunitjs: '1.23.1',
      'raw-body': '2.3.3',
      requirejs: '2.3.5',
      sinon: '2.3.7',
      sizzle: '2.3.3',
      'strip-json-comments': '2.0.1',
      testswarm: '1.1.0',
      'uglify-js': '3.4.0'
    },
    scripts: {
      build: 'npm install && grunt',
      start: 'grunt watch',
      'test:browserless': 'grunt && grunt test:slow',
      'test:browser': 'grunt && grunt karma:main',
      test: 'grunt && grunt test:slow && grunt karma:main',
      jenkins: 'npm run test:browserless',
      precommit: 'grunt lint:newer qunit_fixture',
      commitmsg: 'node node_modules/commitplease'
    },
    commitplease: {
      nohook: true,
      components: [
        'Docs',
        'Tests',
        'Build',
        'Support',
        'Release',
        'Core',
        'Ajax',
        'Attributes',
        'Callbacks',
        'CSS',
        'Data',
        'Deferred',
        'Deprecated',
        'Dimensions',
        'Effects',
        'Event',
        'Manipulation',
        'Offset',
        'Queue',
        'Selector',
        'Serialize',
        'Traversing',
        'Wrap'
      ],
      markerPattern: '^((clos|fix|resolv)(e[sd]|ing))|^(refs?)',
      ticketPattern: '^((Closes|Fixes) ([a-zA-Z]{2,}-)[0-9]+)|^(Refs? [^#])'
    }
  },
  {
    name: 'lodash',
    version: '4.17.4',
    license: 'MIT',
    private: true,
    main: 'lodash.js',
    engines: {
      node: '>=4.0.0'
    },
    sideEffects: false,
    scripts: {
      build: 'npm run build:main && npm run build:fp',
      'build:fp': 'node lib/fp/build-dist.js',
      'build:fp-modules': 'node lib/fp/build-modules.js',
      'build:main': 'node lib/main/build-dist.js',
      'build:main-modules': 'node lib/main/build-modules.js',
      doc: 'node lib/main/build-doc github && npm run test:doc',
      'doc:fp': 'node lib/fp/build-doc',
      'doc:site': 'node lib/main/build-doc site',
      'doc:sitehtml':
        'optional-dev-dependency marky-markdown@^9.0.1 && npm run doc:site && node lib/main/build-site',
      pretest: 'npm run build',
      style: 'eslint *.js .internal/**/*.js',
      test: 'npm run test:main && npm run test:fp',
      'test:doc': 'markdown-doctest doc/*.md',
      'test:fp': 'node test/test-fp',
      'test:main': 'node test/test',
      validate: 'npm run style && npm run test'
    },
    devDependencies: {
      async: '^2.1.4',
      benchmark: '^2.1.3',
      chalk: '^1.1.3',
      cheerio: '^0.22.0',
      'codecov.io': '~0.1.6',
      coveralls: '^2.11.15',
      'curl-amd': '~0.8.12',
      docdown: '~0.7.2',
      dojo: '^1.12.1',
      ecstatic: '^2.1.0',
      eslint: '^3.15.0',
      'eslint-plugin-import': '^2.2.0',
      'fs-extra': '~1.0.0',
      glob: '^7.1.1',
      istanbul: '0.4.5',
      jquery: '^3.1.1',
      lodash: '4.17.3',
      'lodash-doc-globals': '^0.1.1',
      'markdown-doctest': '^0.9.1',
      'optional-dev-dependency': '^2.0.0',
      platform: '^1.3.3',
      'qunit-extras': '^3.0.0',
      qunitjs: '^2.1.0',
      request: '^2.79.0',
      requirejs: '^2.3.2',
      'sauce-tunnel': '^2.5.0',
      'uglify-js': '2.7.5',
      webpack: '^1.14.0'
    },
    greenkeeper: {
      ignore: ['lodash']
    }
  }
];
