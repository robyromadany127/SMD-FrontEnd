import { getAuth } from "@/auth";
import { IMetaData, IPayloadList } from "@/entities/common";
import { API } from "@/lib/api";
import { IReligionsData, ResponseReligionsData } from "./ReligionsData";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useReligions(payload: IPayloadList) {
  const auth = getAuth();
  const [religions, setReligions] = useState<IReligionsData[]>([]);
  const [metadata, setMetadata] = useState<IMetaData>({} as IMetaData);

  async function getReligions() {
    try {
      const response = await API.post<ResponseReligionsData>(
        "/agamas",
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth?.data?.token}`,
          },
        }
      );

      setReligions(response.data.data.items);
      setMetadata(response.data.data.metadata);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  const { data, isLoading, error } = useQuery<
    ResponseReligionsData,
    Error,
    ResponseReligionsData
  >({
    queryKey: ["religions", payload],
    queryFn: getReligions,
  });

  return {
    data,
    isLoading,
    error,
    religions,
    metadata,
  };
}
