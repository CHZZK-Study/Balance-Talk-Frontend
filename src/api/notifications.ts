/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState, useEffect, useCallback, useRef } from 'react';
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import { END_POINT } from '@/constants/api';
import { axiosInstance } from './interceptor';

interface FetchSSEProps {
  accessToken: string;
  onLogout: () => void;
}

interface NotificationMessage {
  id: number;
  category: string;
  createdAt: string;
  postTitle: string;
  message: string;
  isNew?: boolean;
}

export const postNotification = async (Id: number) => {
  const response = await axiosInstance.post(END_POINT.READ_NOTIFICATION(Id));
  return response;
};

export const useFetchSSE = ({ accessToken, onLogout }: FetchSSEProps) => {
  const [messages, setMessages] = useState<NotificationMessage[]>([]);
  // const eventSourceRef = useRef<EventSource | null>(null);

  // useEffect(() => {
  //   if (accessToken) {
  //     console.log('SSE connection starting...');

  //     const EventSource = EventSourcePolyfill || NativeEventSource;

  //     const headers = {
  //       Authorization: `Bearer ${accessToken}`,
  //     };

  //     const eventSource = new EventSource(
  //       'http://localhost:4000/api/notifications',
  //       {
  //         headers,
  //         withCredentials: true,
  //       },
  //     );

  //     eventSourceRef.current = eventSource;
  //     console.log('EventSource initialized:', eventSource);

  //     eventSource.onmessage = (event) => {
  //       const newMessages = JSON.parse(event.data) as NotificationMessage[];
  //       setMessages((prevMessages) => {
  //         const filteredMessages = newMessages.map((newMessage) => ({
  //           ...newMessage,
  //           isNew: !prevMessages.some(
  //             (prevMessage) => prevMessage.id === newMessage.id,
  //           ),
  //         }));
  //         return [...filteredMessages, ...prevMessages];
  //       });
  //     };

  //     eventSource.onerror = (error) => {
  //       console.error('SSE connection error:', error);
  //       eventSource.close();
  //     };
  //   }

  //   return () => {
  //     if (eventSourceRef.current) {
  //       console.log('Closing SSE connection...');
  //       eventSourceRef.current.close();
  //       eventSourceRef.current = null;
  //     }
  //   };
  // }, [accessToken]);

  // useEffect(() => {
  //   if (!accessToken && eventSourceRef.current) {
  //     onLogout();
  //     eventSourceRef.current.close();
  //     eventSourceRef.current = null;
  //   }
  // }, [accessToken, onLogout]);

  // const handleMarkAsRead = useCallback(async (notificationId: number) => {
  //   try {
  //     await postNotification(notificationId);
  //     setMessages((prevMessages) =>
  //       prevMessages.map((message) =>
  //         message.id === notificationId
  //           ? { ...message, isNew: false }
  //           : message,
  //       ),
  //     );
  //   } catch (error) {
  //     console.error('Error marking notification as read:', error);
  //   }
  // }, []);

  // return { messages, handleMarkAsRead };

  useEffect(() => {
    const EventSource = EventSourcePolyfill || NativeEventSource;
    const eventSource = new EventSource('/api/notifications');

    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [newMessage.time, ...prevMessages]);
    };

    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const handleMarkAsRead = useCallback(async (notificationId: number) => {
    try {
      await postNotification(notificationId);
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === notificationId
            ? { ...message, isNew: false }
            : message,
        ),
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  }, []);
  return { messages, handleMarkAsRead };
};
