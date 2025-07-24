
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, PlusCircle, Search } from "lucide-react";

const transfers = [
  {
    id: "TRN-001",
    employeeName: "Eva Green",
    previousUnit: "IT Support",
    newUnit: "IT Operations",
    transferDate: "2024-09-01",
    status: "Approved",
  },
  {
    id: "TRN-002",
    employeeName: "Frank Castle",
    previousUnit: "Finance",
    newUnit: "Audit",
    transferDate: "2024-09-05",
    status: "Pending",
  },
];

export default function TransferPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Transfers</h1>
          <p className="text-muted-foreground">
            Manage employee transfers.
          </p>
        </div>
        <Link href="/activities/transfer/add" passHref>
          <Button variant="accent" className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5" />
            Add Transfer
          </Button>
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Transfer Records</CardTitle>
          <CardDescription>A list of all recent employee transfers.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search transfers..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
              </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee Name</TableHead>
                <TableHead>Previous Unit</TableHead>
                <TableHead>New Unit</TableHead>
                <TableHead>Date of Transfer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transfers.map((t) => (
                <TableRow key={t.id}>
                  <TableCell className="font-medium">{t.employeeName}</TableCell>
                  <TableCell>{t.previousUnit}</TableCell>
                  <TableCell>{t.newUnit}</TableCell>
                  <TableCell>{t.transferDate}</TableCell>
                   <TableCell>
                      <Badge
                        variant={
                          t.status === 'Approved'
                            ? 'default'
                            : t.status === 'Pending'
                            ? 'secondary'
                            : 'destructive'
                        }
                         className={
                          t.status === 'Approved'
                            ? 'bg-green-500/20 text-green-700 border-green-500/30'
                            : t.status === 'Pending'
                            ? 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30'
                            : 'bg-red-500/20 text-red-700 border-red-500/30'
                        }
                      >
                        {t.status}
                      </Badge>
                    </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
