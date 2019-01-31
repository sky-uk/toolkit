const components = [
  'bezel',
  'buttons',
  'calendar',
  'divider',
  'dropdown',
  'forms',
  'hero',
  'links',
  'modal',
  'overlay',
  'panel',
  'select',
  'shine',
  'spinner',
  'tables',
  'tile',
  'trim',
  'tooltip',
];

const componentsUndocumented = [
  'accordion',
  'card',
  'costing',
  'link-faux',
  'links',
  'price',
  'roundel',
  'switch',
  'tabs',
  'typography',
];

const reduceMarkdown = comps => {
  return comps.reduce((docs, component) => {
    docs[component] = require(`sky-toolkit-ui/docs/components/${component}.md`);
    return docs;
  }, {});
};

const componentsData = reduceMarkdown(components);

export { componentsData as components, componentsUndocumented };
