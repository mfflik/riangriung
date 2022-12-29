import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
  RECEIVE_PROFILE: 'RECEIVE_PROFILE',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function receiveProfileActionCreator(user) {
    return {
      type: ActionType.RECEIVE_PROFILE,
      payload: {
        user,
      },
    };
  }

function asyncRegisterUser({ id, name, password }) {
  return async () => {
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveProfileActionCreator,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
