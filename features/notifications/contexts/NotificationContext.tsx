import React from "react";
import { INotificationContext } from "../types/INotificationContext";

export const NotificationContext = React.createContext<INotificationContext>({
	notify: () => {},
});
