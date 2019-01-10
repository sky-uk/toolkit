import path from 'path';

import sassTrue from 'sass-true';

const sassFile = path.join(__dirname, '_all.scss');

sassTrue.runSass({ file: sassFile, includePaths: ['node_modules/'], precision: 9 }, describe, it);
