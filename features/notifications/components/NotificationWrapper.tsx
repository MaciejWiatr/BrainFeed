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
		let timeout: any;
		if (notifications.length > 0) {
			timeout = setTimeout(() => {
				setNotifications(R.without([notifications[0]], notifications));
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
					<Notification key={Math.random().toString()}>
						{notifications[0].message}
					</Notification>
				)}
				{children}
			</NotificationContext.Provider>
		</React.Fragment>
	);
};

export default NotificationWrapper;
