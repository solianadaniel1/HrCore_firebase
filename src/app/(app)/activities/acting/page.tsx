
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

const actingAssignments = [
  {
    id: "ACT-001",
    employeeName: "Grace Hopper",
    currentPosition: "Lead Developer",
    actingPosition: "Engineering Manager",
    assignmentDate: "2024-09-15",
  },
  {
    id: "ACT-002",
    employeeName: "Alan Turing",
    currentPosition: "Cryptanalyst",
    actingPosition: "Head of Cryptanalysis",
    assignmentDate: "2024-09-20",
  },
];

export default function ActingPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Acting Assignments</h1>
          <p className="text-muted-foreground">
            Manage employee acting assignments.
          </p>
        </div>
        <Link href="/activities/acting/add" passHref>
          <Button variant="accent" className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5" />
            Add Acting Assignment
          </Button>
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Acting Records</CardTitle>
          <CardDescription>A list of all recent acting assignments.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search assignments..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
              </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee Name</TableHead>
                <TableHead>Current Position</TableHead>
                <TableHead>Acting Position</TableHead>
                <TableHead>Assignment Date</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {actingAssignments.map((act) => (
                <TableRow key={act.id}>
                  <TableCell className="font-medium">{act.employeeName}</TableCell>
                  <TableCell>{act.currentPosition}</TableCell>
                  <TableCell>{act.actingPosition}</TableCell>
                  <TableCell>{act.assignmentDate}</TableCell>
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
                          End Acting
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
