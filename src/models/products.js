export default {
    namespace: 'products',
    state: [],
    reducers: {// eslint-disable-next-line
      'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
  };
