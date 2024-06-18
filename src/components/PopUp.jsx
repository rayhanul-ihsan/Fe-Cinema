import React from 'react';
import { useDispatch } from 'react-redux';
import { TOGGLE_POPUP } from '../store/slices/auth';
import { getGuestSession } from '../store/async/auth';

const Popup = () => {
    const dispatch = useDispatch()

    const onClose =async () => {
        await dispatch(getGuestSession())
        dispatch(TOGGLE_POPUP(false));
    }

  return (
    <div className="popup-container">
      <div className="popup">
        <button onClick={onClose}>
          <img src="https://i.ibb.co.com/hV77FXF/Untitled-1.png" alt="logo" />
          Login with TMDB</button>
      </div>
    </div>
  );
};

export default Popup;