import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "@/utils";
import {
  DataGrid,
  KeenIcon,
  DataGridColumnHeader,
  DataGridRowSelect,
  DataGridRowSelectAll,
  useDataGrid,
  TDataGridRequestParams,
} from "@/components";
import { ColumnDef, Column, RowSelectionState } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useIntl } from "react-intl";
import { IReligionsData } from "./ReligionsData";
import { IPayloadList } from "@/entities/common";
import useReligions from "./ReligionsHooks";
import { API } from "@/lib/api";

interface IColumnFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
}

const ReligionTable = () => {
  const intl = useIntl();
  const [payload, setPayload] = useState<IPayloadList>({
    page: 1,
    perPage: 10,
    sort: "desc",
  });
  const { religions, metadata } = useReligions(payload);

  const ColumnInputFilter = <TData, TValue>({
    column,
  }: IColumnFilterProps<TData, TValue>) => {
    return (
      <Input
        placeholder="Filter..."
        value={(column.getFilterValue() as string) ?? ""}
        onChange={(event) => column.setFilterValue(event.target.value)}
        className="h-9 w-full max-w-40"
      />
    );
  };

  const columns = useMemo<ColumnDef<IReligionsData>[]>(
    () => [
      // {
      //   accessorKey: "id",
      //   header: () => <DataGridRowSelectAll />,
      //   cell: ({ row }) => <DataGridRowSelect row={row} />,
      //   enableSorting: false,
      //   enableHiding: false,
      //   meta: {
      //     headerClassName: "w-0",
      //   },
      // },
      {
        accessorFn: (row: IReligionsData) => row.name,
        id: "religion",
        header: ({ column }) => (
          <DataGridColumnHeader
            title={intl.formatMessage({ id: "religion" })}
            filter={<ColumnInputFilter column={column} />}
            column={column}
          />
        ),
        enableSorting: true,
        cell: ({ row }) => {
          return (
            <div className="flex items-center gap-2.5">
              {/* <img
                src={toAbsoluteUrl(
                  `/media/avatars/${row.original.user.avatar}`
                )}
                className="rounded-full size-7 shrink-0"
                alt={`${row.original.user.userName}`}
              /> */}
              <KeenIcon icon="user" />
              <Link
                to="#"
                className="text-sm font-medium text-gray-900 hover:text-primary-active"
              >
                {row.original.name}
              </Link>
              {/* <a className="text-sm font-medium text-gray-900">
                {row.original.name}
              </a> */}
            </div>
          );
        },
        meta: {
          // className: "min-w-[200px]",
          cellClassName: "font-normal text-gray-800",
        },
      },
      {
        accessorFn: (row) => row.createdBy,
        id: "createdBy",
        header: ({ column }) => (
          <DataGridColumnHeader
            title={intl.formatMessage({ id: "created_by" })}
            column={column}
          />
        ),
        enableSorting: true,
        cell: (info) => {
          return info.row.original.createdBy;
        },
        meta: {
          // className: "min-w-[165px]",
        },
      },
      {
        accessorFn: (row) => row.createdAt,
        id: "createdAt",
        header: ({ column }) => (
          <DataGridColumnHeader
            title={intl.formatMessage({ id: "created_at" })}
            column={column}
          />
        ),
        enableSorting: true,
        cell: (info) => {
          const date = new Date(info.row.original.createdAt);
          const formattedDate = date
            .toLocaleString("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false, // Gunakan format 24 jam
            })
            .replace(",", ""); // Hapus koma dari format default

          return formattedDate;
        },

        meta: {
          // className: "min-w-[165px]",
          cellClassName: "font-normal text-gray-800",
        },
      },
      {
        accessorFn: (row) => row.updatedAt,
        id: "updatedAt",
        header: ({ column }) => (
          <DataGridColumnHeader
            title={intl.formatMessage({ id: "updated_at" })}
            column={column}
          />
        ),
        enableSorting: true,
        cell: (info) => {
          const date = new Date(info.row.original.updatedAt);
          const formattedDate = date
            .toLocaleString("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false, // Gunakan format 24 jam
            })
            .replace(",", ""); // Hapus koma dari format default

          return formattedDate;
        },

        meta: {
          // className: "min-w-[165px]",
          cellClassName: "font-normal text-gray-800",
        },
      },
      {
        accessorFn: (row) => row.status,
        id: "status",
        header: ({ column }) => (
          <DataGridColumnHeader
            title={intl.formatMessage({ id: "status" })}
            column={column}
          />
        ),
        enableSorting: false,
        cell: (info) => {
          return (
            <div className="flex items-center text-gray-800 font-normal gap-1.5">
              <span
                className={`badge badge-sm ${info.row.original.status === 1 ? "badge-success" : "badge-danger"}`}
              >
                {info.row.original.status === 1
                  ? intl.formatMessage({ id: "active" })
                  : intl.formatMessage({ id: "inactive" })}
              </span>
            </div>
          );
        },
        meta: {
          headerClassName: "w-[60px]",
        },
      },
      {
        id: "action",
        // header: ({ column }) => (
        //   <DataGridColumnHeader
        //     title={intl.formatMessage({ id: "action" })}
        //     column={column}
        //   />
        // ),
        enableSorting: false,
        cell: () => {
          return (
            <button className="btn btn-sm btn-icon btn-clear btn-light ">
              <KeenIcon icon="trash" />
            </button>
          );
        },
        meta: {
          headerClassName: "w-[60px]",
        },
      },
    ],
    []
  );

  const data: IReligionsData[] = useMemo(() => religions, [religions]);

  const handleRowSelection = (state: RowSelectionState) => {
    const selectedRowIds = Object.keys(state);

    if (selectedRowIds.length > 0) {
      toast(`Total ${selectedRowIds.length} are selected.`, {
        description: `Selected row IDs: ${selectedRowIds}`,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    }
  };

  const Toolbar = () => {
    const { table } = useDataGrid();
    const [searchInput, setSearchInput] = useState("");

    return (
      <div className="card-header flex-wrap gap-2 border-b-0 px-5">
        <h3 className="card-title font-medium text-sm">
          {`${intl.formatMessage({ id: "fetching" })} ${metadata.perPage} ${intl.formatMessage(
            { id: "of" }
          )} ${metadata.totalCount} ${intl.formatMessage({ id: "religions" })}`}
        </h3>

        <div className="flex flex-wrap gap-2 lg:gap-5">
          <div className="flex">
            <label className="input input-sm">
              <KeenIcon icon="magnifier" />
              <input
                type="text"
                placeholder={intl.formatMessage({ id: "search_religion" })}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </label>
          </div>

          {/* <div className="flex flex-wrap gap-2.5">
            <Select defaultValue="active">
              <SelectTrigger className="w-28" size="sm">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="w-32">
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="latest">
              <SelectTrigger className="w-28" size="sm">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="w-32">
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="older">Older</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>

            <button className="btn btn-sm btn-outline btn-primary">
              <KeenIcon icon="setting-4" /> Filters
            </button>
          </div> */}
          <div className="flex items-center space-x-2 order-2 md:order-1 pb-2 md:pb-0">
            <div className="text-sm text-muted-foreground">
              {intl.formatMessage({ id: "fetching" })}
            </div>
            <Select
              value={`${payload.perPage}`}
              onValueChange={(value) => {
                setPayload({
                  ...payload,
                  perPage: Number(value),
                });
              }}
            >
              <SelectTrigger className="w-[70px]" size="sm">
                <SelectValue placeholder={payload.perPage} />
              </SelectTrigger>
              <SelectContent side="top">
                {[
                  10,
                  25,
                  50,
                  100,
                  { value: metadata.totalCount, label: "All" },
                ].map((pageSize) => (
                  <SelectItem
                    key={
                      typeof pageSize === "object" ? pageSize.value : pageSize
                    }
                    value={`${typeof pageSize === "object" ? pageSize.value : pageSize}`}
                  >
                    {typeof pageSize === "object" ? pageSize.label : pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    );
  };

  return (
    <DataGrid
      columns={columns}
      data={data}
      rowSelection={true}
      onRowSelectionChange={handleRowSelection}
      pagination={{
        size: payload.perPage,
        page: metadata.page,
      }}
      toolbar={<Toolbar />}
      layout={{ card: true }}
    />
  );
};

export { ReligionTable };
