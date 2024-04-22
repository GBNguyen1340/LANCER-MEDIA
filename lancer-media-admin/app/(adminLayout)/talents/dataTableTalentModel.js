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
import { deleteTalent } from "@/app/services/actions/talents";
import { useState } from "react";

function RowAction({ talent }) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleDeleteTalent = async (id) => {
    const result = await deleteTalent(id);
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
            <Pen className="h-3 w-3 mr-3" /> <Link href={`/talents/${talent.id}`}>Details</Link>
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
                handleDeleteTalent(talent.id);
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

export const dataTableTalentModel = [
  {
    accessorKey: "avatar",
    header: "",
  },
  {
    accessorKey: "name",
    header: "Tên",
  },
  {
    accessorKey: "followers",
    header: "Số lượng theo dõi",
  },
  {
    accessorKey: "views",
    header: "Số lượng view",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const talent = row.original;
      return <RowAction talent={talent}></RowAction>;
    },
  },
];
