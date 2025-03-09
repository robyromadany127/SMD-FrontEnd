interface IMetaData {
  page: number;
  perPage: number;
  pageCount: number;
  totalCount: number;
}

interface IPayloadList {
  page: number;
  perPage: number;
  sort: string;
}

export { type IMetaData, type IPayloadList };
