const assignments = [
  { label: 'Week 2', url: 'week02' },
  { label: 'Week 3', url: 'week03' },
  { label: 'Week 4', url: 'week04' },
  { label: 'Midterm', url: 'midterm' },
  { label: 'Week 6', url: 'week06' },
  { label: 'Week 7', url: 'week07' },
  { label: 'Week 8', url: 'week08' },
];

if (document.currentScript.hasAttribute('homepage')) {
  for (const asgn of assignments) {
    document.write(`<a href="${asgn.url}"><div class="container">${asgn.label}</div></a>`);
  }
} else {
  for (const asgn of assignments) {
    document.write(`<li><a href="../${asgn.url}">${asgn.label}</a></li>`);
  }
}
