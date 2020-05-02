import { CLOSE_MODAL, OPEN_MODAL } from "../constants/modal";

export const openModal = (body,size="tiny") => (dispatch) => {
  dispatch({
    type: OPEN_MODAL,
    payload: {body,size},
  });
};

export const closeModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_MODAL,
    payload: null,
  });
};
