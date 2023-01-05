const initialState = {
  recipes: [
    {
      id: 1,
      name: 'Pasta',
      view: 234,
    },
    {
      id: 2,
      name: 'Pizza',
      view: 123,
    },
    {
      id: 3,
      name: 'Hamburgers',
      view: 345,
    },
    {
      id: 4,
      name: 'Salad',
      view: 456,
    },
    {
      id: 5,
      name: 'Sandwich',
      view: 567,
    },
    {
      id: 6,
      name: 'Soup',
      view: 678,
    },
  ],
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recipesReducer;
