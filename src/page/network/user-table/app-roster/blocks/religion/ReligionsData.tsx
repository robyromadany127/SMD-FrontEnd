export interface ResponseReligionsData {
  code: number;
  status: boolean;
  data: Data;
}

export interface Data {
  items: IReligionsData[];
  metadata: Metadata;
}

export interface IReligionsData {
  id: number;
  name: string;
  show: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: number;
}

export interface Metadata {
  page: number;
  perPage: number;
  totalCount: number;
  pageCount: number;
}
