import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNotifMessage } from "../../store/storeSlice";

const Notif = () => {
    const dispatch = useDispatch();
    const notifMessage = useSelector((state) => state.app.notifMessage);

    useEffect(() => {
        const timerIds = notifMessage.map((_, index) => {
            return setTimeout(() => {
                handleDelete(index);
            }, 1000);
        });

        return () => {
            timerIds.forEach((timerId) => clearTimeout(timerId));
        };
    }, [notifMessage, dispatch]);

    const handleDelete = (index) => {
        const updatedMessage = [...notifMessage];
        updatedMessage.splice(index, 1);
        dispatch(updateNotifMessage(updatedMessage));
    };

    if (!notifMessage || notifMessage.length === 0) {
        return null;
    }

    return (
        <div className="fixed p-4 flex flex-col gap-4 z-[202]">
            {notifMessage.map((item, index) => (
                <div key={index} className="bg-green p-3 w-full rounded-[5px] flex gap-2 justify-between">
                    <div className="h-full flex items-center gap-2">
                        <i className="fa-solid fa-circle-check text-white text-[16px] ss:text-[18px]"></i>
                        <h2 className="text-white text-[10px] xs:text-[14px] md:text-[16px] font-bold mr-4">{item}</h2>
                    </div>
                    <div className="flex items-start h-full cursor-pointer" onClick={() => handleDelete(index)}>
                        <i className="fa-solid fa-xmark text-[14px] text-white"></i>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Notif;
