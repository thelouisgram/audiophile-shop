import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNotifMessage } from "../../store/storeSlice";
import { AnimatePresence, motion } from "framer-motion";

const Notif = () => {
    const dispatch = useDispatch();
    const notifMessage = useSelector((state) => state.app.notifMessage);

    useEffect(() => {
        // Set up timers for automatic notification removal
        const timerIds = notifMessage.map((_, index) => {
            return setTimeout(() => {
                handleDelete(index);
            }, 1000);
        });

        // Clean up timers when the component unmounts or notifMessage changes
        return () => {
            timerIds.forEach((timerId) => clearTimeout(timerId));
        };
    }, [notifMessage, dispatch]);

    const handleDelete = (index) => {
        // Remove the notification at the specified index
        const updatedMessage = [...notifMessage];
        updatedMessage.splice(index, 1);
        dispatch(updateNotifMessage(updatedMessage));
    };

    if (!notifMessage || notifMessage.length === 0) {
        // If there are no notifications, render nothing
        return null;
    }

    return (
        <div className="fixed p-4 flex flex-col gap-3 z-[202]">
            {notifMessage.map((item, index) => (
                <AnimatePresence key={index}>
                    <motion.div
                        initial={{ x: -40 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-green p-3 w-full rounded-[5px] flex gap-2 justify-between"
                    >
                        <div className="h-full flex items-center gap-2">
                            <i className="fa-solid fa-circle-check text-white text-[16px] ss:text-[18px]"></i>
                            <h2 className="text-white text-[10px] xs:text-[14px] md:text-[16px] font-bold mr-4">
                                {item}
                            </h2>
                            <div
                                className="flex items-start h-full cursor-pointer"
                                onClick={() => handleDelete(index)}
                            >
                                <i className="fa-solid fa-xmark text-[14px] text-white"></i>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            ))}
        </div>
    );
};

export default Notif;
