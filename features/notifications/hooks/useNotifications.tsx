import React, { useContext } from "react";
import { NotificationContext } from "../contexts/NotificationContext";

const useNotifications = () => {
	const { notify } = useContext(NotificationContext);

	return notify;
};

export default useNotifications;
