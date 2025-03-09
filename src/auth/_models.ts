import { type TLanguageCode } from "@/i18n/index";

export interface AuthModel {
  data: {
    token: string;
    expiredAt: string;
  };
}

export interface UserModel {
  data: {
    id: number;
    nomor_induk_karyawan: string;
    nama_depan: string;
    nama_belakang: string;
    jenis_kelamin: string;
    agama_id: number;
    golongan_darah_id: number;
    npwp: number;
    lahir_tempat: string;
    cabang_id: number;
    join_date: Date;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: number;
  };
}
