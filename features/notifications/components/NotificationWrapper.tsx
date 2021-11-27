import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { INotification } from "../types/Notification";
import { NotificationContext } from "../contexts/NotificationContext";
import Notification from "./Notification";

interface IProps {
	children: ReactNode;
}

const NotificationWrapper: FC<IProps> = ({ children }) => {
	const [notifications, setNotifications] = useState<INotification[]>([]);
	const firstRender = useRef(true);

	const notify = (data: INotification) => {
		setNotifications((s) => [...s, data]);
	};
	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}
		let timeout: any;
		if (notifications.length > 0) {
			timeout = setTimeout(() => {
				const newNotifications = [...notifications];
				newNotifications.splice(0, 1);
				setNotifications(newNotifications);
			}, 1500);
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [notifications]);

	return (
		<React.Fragment>
			<NotificationContext.Provider value={{ notify }}>
				{notifications.length > 0 && (
					<Notification>{notifications[0].message}</Notification>
				)}
				{children}
			</NotificationContext.Provider>
		</React.Fragment>
	);
};

export default NotificationWrapper;
