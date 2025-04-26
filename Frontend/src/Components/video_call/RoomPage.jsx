import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
  const { roomId } = useParams();
  const meetingRef = useRef(null);

  useEffect(() => {
    if (meetingRef.current) {
        const appID = Number(import.meta.env.VITE_APP_ID);
        const serverSecret = import.meta.env.VITE_SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(), // userId
        "Prince Singh" // username
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: meetingRef.current,
        sharedLinks: [
          {
            name: 'Copy Link',
            url: `https://plus-point.onrender.com/room/${roomId}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
        showScreenSharingButton: false,
      });
    }
  }, [roomId]);

  return (
    <div className='video-room-page'>
      <div ref={meetingRef} />
    </div>
  );
};

export default RoomPage;
