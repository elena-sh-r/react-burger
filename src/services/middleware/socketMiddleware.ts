interface IProps {
  wsUrl: string,
  wsActions: any,
}

export const socketMiddleware = ({wsUrl, wsActions} : IProps) => {
  return (store: any) => {
    let socket: WebSocket | null = null;

    return (next: any) => (action: any) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, onOpen, wsClose, onClose, onError, onMessage } = wsActions;

      if (type === wsInit) {
        const token = payload;
        if (token){
          socket = new WebSocket(`${wsUrl}?token=${token.substring(7)}`);
        }
        else {
          socket = new WebSocket(`${wsUrl}/all`);
        }
      }

      if (type === wsClose) {
          socket?.close();
      }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, message: restParsedData });
        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };
      }

      next(action);
    };
  };
};