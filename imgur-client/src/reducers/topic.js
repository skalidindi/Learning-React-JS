const initialState = {
  loading: false,
  loaded: false,
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case INVALIDATE_REDDIT:
    case 'REQUEST_TOPICS':
      return {
        ...state,
        loading: true,
      };
    case 'RECEIVE_TOPICS':
      return {
        ...state,
        loading: false,
        loaded: true,
        lastUpdated: action.receivedAt,
        data: action.data,
      };
    default:
      return state;
  }
}
