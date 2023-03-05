import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  message,
  messageStatus,
  getMessage,
} from '../redux/message.js';
// import Loading from './Loading';

const Message = () => {
  const randomMessage = useSelector(message);
  const status = useSelector(messageStatus);
  const dispatch = useDispatch();

  const handleRandomMessage = () => {
    dispatch(getMessage());
  };

  useEffect(() => {
    setTimeout(() => {
      if (randomMessage.length === 0) dispatch(getMessage());
    }, 2000);
  }, [dispatch]);

  return (
    <>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <div>
          <h1>
            <span>Greeting:</span> 
            <span>{randomMessage}</span>
          </h1>
          <button onClick={handleRandomMessage}>
            Random
          </button>
        </div>
      )}
    </>
  );
};

export default Greeting;