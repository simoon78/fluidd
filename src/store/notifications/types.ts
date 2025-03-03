import { AppNotificationType } from '@/store/types'

export interface NotificationsState {
  notifications: AppNotification[];
}

export interface AppNotification {
  id: string;
  type: AppNotificationType;
  title: string;
  description?: string;
  suffix?: string;
  suffixIcon?: string;
  to?: string;
  btnText?: string;
  icon?: string;
  timestamp: number;
  clear: boolean;
  merge: boolean;
}

export interface AppPushNotification {
  type: AppNotificationType;
  title: string;
  description?: string;
  suffix?: string;
  suffixIcon?: string;
  to?: string;
  btnText?: string;
  icon?: string;
  timestamp?: number;
  snackbar?: boolean;
  clear?: boolean;
  merge?: boolean;
}
