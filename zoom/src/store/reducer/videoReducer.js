import {
  MY_STREAM,
  ADD_STREAM,
  ADD_PEERID,
  ADD_REMOTE_STREAM,
} from '../actions/types';

const initialState = {
  myStream: null,
  streams: [],
  remoteStreams: [],
  peers: {},
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case MY_STREAM:
      return {
        ...state,
        myStream: payload,
      };
    case ADD_STREAM:
      return {
        streams: [...state.streams, payload],
      };
    case ADD_PEERID:
      const {userId, call} = payload;
      return {
        ...state,
        peers: (state.peers[userId] = call),
      };
    case ADD_REMOTE_STREAM:
      return {
        ...state,
        remoteStreams: [...state.remoteStreams, payload],
      };
    default:
      return state;
  }
};
