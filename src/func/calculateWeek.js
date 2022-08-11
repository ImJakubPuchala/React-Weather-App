function calculateWeek() {
  let today = new Date();
  const week = [
    new Date().setDate(today.getDate()),
    new Date().setDate(today.getDate() + 1),
    new Date().setDate(today.getDate() + 2),
    new Date().setDate(today.getDate() + 3),
    new Date().setDate(today.getDate() + 4),
    new Date().setDate(today.getDate() + 5),
    new Date().setDate(today.getDate() + 6),
    new Date().setDate(today.getDate() + 7),
    new Date().setDate(today.getDate() + 8),
    new Date().setDate(today.getDate() + 9),
    new Date().setDate(today.getDate() + 10),
  ];

  return week;
}

export { calculateWeek };
