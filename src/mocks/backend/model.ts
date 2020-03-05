export const mock = {
  id: 1,
  barriers: {
    1: {
      id: 1,
      name: 'Общий барьер 1',
      createDate: '28.02.2020',
    },
    2: {
      id: 2,
      name: 'Общий барьер 2',
      createDate: '28.02.2020',
    },
    3: {
      id: 3,
      name: 'Общий барьер 3',
      createDate: '28.02.2020',
    },
    4: {
      id: 4,
      name: 'Общий барьер 4',
      createDate: '28.02.2020',
    },
    5: {
      id: 5,
      name: 'Барьер для причины 1',
      createDate: '28.02.2020',
    },
    6: {
      id: 6,
      name: 'Барьер для причины 2',
      createDate: '28.02.2020',
    },
    7: {
      id: 1,
      name: 'Барьер для причины 3',
      createDate: '28.02.2020',
    },
    8: {
      id: 8,
      name: 'Барьер для последствия 1',
      createDate: '28.02.2020',
    },
    9: {
      id: 9,
      name: 'Барьер для последствия 2',
      createDate: '28.02.2020',
    },
    10: {
      id: 10,
      name: 'Барьер для последствия 3',
      createDate: '28.02.2020',
    },
  },
  causes: {
    1: {
      id: 1,
      name: 'Причина 1',
      createDate: '28.02.2020',
      barriers: [5, 6],
    },
    2: {
      id: 2,
      name: 'Причина 2',
      createDate: '28.02.2020',
      barriers: [7],
    },
  },
  consequences: {
    1: {
      id: 1,
      name: 'Последствие 1',
      createDate: '28.02.2020',
      barriers: [10],
    },
    2: {
      id: 2,
      name: 'Последствие 2',
      createDate: '28.02.2020',
      barriers: [],
    },
    3: {
      id: 3,
      name: 'Последствие 3',
      createDate: '28.02.2020',
      barriers: [8, 9],
    },
  },
  commonCauseBarriers: [1, 2, 3],
  commonConsequencesBarriers: [4],
  incident: {
    name: 'Название инцидента',
    createDate: '29.02.2020',
  },
};
