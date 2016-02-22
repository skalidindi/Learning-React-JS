const initialState = {
  loading: false,
  loaded: false,
  topics: [],
};

export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'GET_TOPICS':
      return {
        ...state,
        loading: true,
      };
    case 'RECEIVE_TOPICS_SUCCESS':
      return {
        ...state,
        loading: false,
        loaded: true,
        lastUpdated: action.receivedAt,
        topics: action.data,
      };
    case 'RECEIVE_TOPICS_FAILURE':
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
}
