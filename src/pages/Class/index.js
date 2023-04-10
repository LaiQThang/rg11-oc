import classNames from 'classnames/bind';
import React, { useEffect, useCallback, useState } from 'react';
import { usePeer } from '~/providers/Peer';
import { useSocket } from '~/providers/Socket';
import styles from './Class.module.scss';

const cx = classNames.bind(styles);

const Class = () => {
    const { socket } = useSocket();

    const [myStream, setMyStream] = useState(null);
    const [remoteEmailID, setRemoteEmailID] = useState();

    const data = JSON?.parse(localStorage?.getItem('data'));

    const firstUser = data[0].username;

    const [user, setUser] = useState([firstUser]);

    const { peer, createOffer, createAnswer, setRemoteAns, sendStream, remoteStream } = usePeer();

    const handleNewUserJoined = useCallback(
        async (data) => {
            const { emailID } = data;
            console.log('New user join room', emailID);

            setUser((prv) => [...prv, emailID]);

            const offer = await createOffer();

            socket.emit('call-user', { emailID, offer });

            setRemoteEmailID(emailID);

            sendStream(myStream);
        },
        [socket],
    );

    const handleInCommingCall = useCallback(
        async (data) => {
            const { from, offer } = data;

            setUser((prv) => [...prv, from]);

            console.log('Incommingcall', from, offer);
            const ans = await createAnswer(offer);
            socket.emit('call-accepted', { emailID: from, ans });

            setRemoteEmailID(from);
        },
        [createAnswer, socket],
    );

    const handleCallAccepted = useCallback(
        async (data) => {
            const { ans } = data;
            console.log('Call got acc', ans);
            sendStream(myStream);

            await setRemoteAns(ans);
        },
        [setRemoteAns],
    );

    const getUserMediaStream = useCallback(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true });

        setMyStream(stream);
    }, []);

    const handleNegotiation = useCallback(async () => {
        console.log('nego pleasea');
        const localOffer = await peer.createOffer();
        socket.emit('call-user', { emailId: remoteEmailID, offer: localOffer });
    }, []);

    useEffect(() => {
        socket.on('user-joined', handleNewUserJoined);
        socket.on('incomming-call', handleInCommingCall);
        socket.on('call-accepted', handleCallAccepted);

        return () => {
            socket.off('user-joined', handleNewUserJoined);
            socket.off('incomming-call', handleInCommingCall);
            socket.off('call-accepted', handleCallAccepted);
        };
    }, [handleCallAccepted, handleInCommingCall, handleNewUserJoined, socket]);

    useEffect(() => {
        peer.addEventListener('negotiationneeded', handleNegotiation);

        return () => {
            peer.removeEventListener('negotiationneeded', handleNegotiation);
        };
    }, []);

    useEffect(() => {
        getUserMediaStream();
    }, [getUserMediaStream]);

    console.log(remoteStream);

    return (
        <div className={cx('wrapper')}>
            {user?.map((value, index) => {
                return (
                    <div className={cx('video')}>
                        <h2 key={index}>{value}</h2>
                    </div>
                );
            })}
            {/* <ReactPlayer url={myStream} playing />  */}
            {/* {remoteStream.map((value, index) => {
                console.log(value);
                return <h2>{value}</h2>;
            })} */}
        </div>
    );
};

export default Class;
