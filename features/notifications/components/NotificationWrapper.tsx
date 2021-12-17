import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { INotification } from "../types/Notification";
import { NotificationContext } from "../contexts/NotificationContext";
import Notification from "./Notification";
import * as R from "ramda";

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

		const timer = setTimeout(() => {
			setNotifications((s) => R.drop(1, s));
		}, 2000);

		return () => clearTimeout(timer);
	}, [notifications]);

	return (
		<NotificationContext.Provider value={{ notify }}>
			{notifications.map((n, i) => (
				<Notification key={i}>{n.message}</Notification>
			))}
			{children}
		</NotificationContext.Provider>
	);
};

export default NotificationWrapper;

// useEffect(() => {
// 	if (firstRender.current) {
// 		firstRender.current = false;
// 		return;
// 	}
// 	let timeout: any;
// 	if (notifications.length > 0) {
// 		timeout = setTimeout(() => {
// 			setNotifications(R.without([notifications[0]], notifications));
// 		}, 1500);
// 	}
// 	return () => {
// 		clearTimeout(timeout);
// 	};
// }, [notifications]);

// // show only one notification and after 1 second remove it and show next
// return (
// 	<NotificationContext.Provider
// 		value={{
// 			notify,
// 		}}
// 	>
// 		{notifications.map((notification, index) => (
// 			<Notification key={`notification-${index}`}>
// 				{notification.message}
// 			</Notification>
// 		))}
// 		{children}
// 	</NotificationContext.Provider>
// );
