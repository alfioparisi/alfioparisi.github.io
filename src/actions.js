/*
{type: 'EXPAND', title, description}
*/

export const expand = panel => ({
  type: 'EXPAND',
  title: panel.title,
  description: panel.description
});

/*
{type: 'SHRINK', title, description}
*/

export const shrink = initial => ({
  type: 'SHRINK',
  title: initial.title,
  description: initial.description
});
