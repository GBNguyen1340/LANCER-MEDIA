"use client";

import Link from "next/link";
import { MoreHorizontal, Trash, Pen } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { deleteRoom } from "@/app/services/actions/rooms";

function RowAction({ room }) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleDeleteRoom = async (id) => {
    const result = await deleteRoom(id);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-slate-100">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem className="hover:bg-slate-300">
            <Pen className="h-3 w-3 mr-3" /> <Link href={`/rooms/${room.id}`}>Details</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red-800 hover:text-red-900 hover:cursor-pointer hover:bg-slate-300"
            onClick={() => setIsConfirmOpen(true)}
          >
            <Trash className="h-3 w-3 mr-3" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your data and remove your
              data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-800 text-white hover:bg-red-900"
              onClick={() => {
                handleDeleteRoom(room.id);
              }}
            >
              Continue
              <Trash className="h-4 w-4 ml-2" />
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export const dataTableRoomModel = [
  {
    accessorKey: "name",
    header: "Tên phòng",
  },
  {
    accessorKey: "type",
    header: "Loại phòng",
    cell: ({ row }) => {
      const roomType = row.getValue("type");
      switch (roomType) {
        case "PHONG_TRON":
          return (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Phòng trơn
            </span>
          );
        case "PHONG_LED":
          return (
            <span className="bg-amber-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Phòng đèn led
            </span>
          );
        case "PHONG_XANH":
          return (
            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              Phòng phông xanh
            </span>
          );
      }
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Giá phòng</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const room = row.original;
      return <RowAction room={room}></RowAction>;
    },
  },
];
