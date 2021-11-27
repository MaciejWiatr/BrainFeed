import { INotification } from "./Notification";

export interface INotificationContext {
	notify: (data: INotification) => void;
}
