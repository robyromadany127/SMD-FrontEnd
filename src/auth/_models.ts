import { type TLanguageCode } from "@/i18n/index";

export interface AuthModel {
  data: {
    token: string;
    expiredAt: string;
  };
}

export interface UserModel {
  id: number;
  name: string;
  parentId: string;
  status: number;
  show: number;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
}
