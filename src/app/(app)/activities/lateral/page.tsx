
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
import { MoreHorizontal, PlusCircle, Search } from "lucide-react";

const laterals = [
  {
    id: "LAT-001",
    employeeName: "Charlie Davis",
    currentPosition: "Marketing Specialist",
    newPosition: "Sales Specialist",
    assignmentDate: "2024-08-10",
  },
  {
    id: "LAT-002",
    employeeName: "Diana Prince",
    currentPosition: "HR Manager",
    newPosition: "Operations Manager",
    assignmentDate: "2024-08-12",
  },
];

export default function LateralPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Laterals</h1>
          <p className="text-muted-foreground">
            Manage employee lateral movements.
          </p>
        </div>
        <Link href="/activities/lateral/add" passHref>
          <Button variant="accent" className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5" />
            Add Lateral
          </Button>
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Lateral Records</CardTitle>
          <CardDescription>A list of all recent lateral assignments.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search laterals..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
              </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee Name</TableHead>
                <TableHead>Current Position</TableHead>
                <TableHead>New Position</TableHead>
                <TableHead>Date of Assignment</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {laterals.map((lat) => (
                <TableRow key={lat.id}>
                  <TableCell className="font-medium">{lat.employeeName}</TableCell>
                  <TableCell>{lat.currentPosition}</TableCell>
                  <TableCell>{lat.newPosition}</TableCell>
                  <TableCell>{lat.assignmentDate}</TableCell>
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
                        <DropdownMenuItem className="text-destructive">
                          Reverse
                        </DropdownMenuItem>
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
