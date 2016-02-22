export function getTopics() {
  return { type: 'GET_TOPICS' };
}

export function receiveTopics(json) {
  return {
    type: 'RECEIVE_TOPICS',
    topics: json.data,
    receivedAt: Date.now(),
  };
}
