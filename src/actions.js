/*
{type: 'EXPAND', title, description}
*/

// Create an action to expand one panel.
// @param {object}
export const expand = panel => ({
  type: 'EXPAND',
  title: panel.title,
  description: panel.description
});

/*
{type: 'SHRINK', title, description}
*/

// Create an action to shrink a panel.
// @param {object}
export const shrink = initial => ({
  type: 'SHRINK',
  title: initial.title,
  description: initial.description
});

/*
{type: 'SHOW_PROJECT', title, description}
*/

// Create an action to show one of the projects.
// @param {object}
export const show = project => ({
  type: 'SHOW_PROJECT',
  title: project.name,
  description: project.description
});
