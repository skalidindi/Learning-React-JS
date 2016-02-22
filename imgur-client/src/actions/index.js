import WebAPI from '../middleware/api.jsx';

function fetchTopics() {
  return WebAPI.get('topics/defaults');
}

export function receiveTopics(json) {
  return {
    type: 'RECEIVE_TOPICS',
    data: json.data,
    receivedAt: Date.now(),
  };
}

export function requestTopics() {
  return (dispatch) => fetchTopics().then(
    data => dispatch(receiveTopics(data)),
    error => error,
  );
}
