
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

const demotions = [
  {
    id: "DEMO-001",
    employeeId: "NIB-00124",
    employeeName: "John Smith",
    previousPosition: "Project Manager",
    newPosition: "Senior Developer",
    demotionDate: "2024-08-01",
  },
  {
    id: "DEMO-002",
    employeeId: "NIB-00125",
    employeeName: "Alice Johnson",
    previousPosition: "UX Designer",
    newPosition: "UI Designer",
    demotionDate: "2024-07-15",
  },
];

export default function DemotionPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Demotions</h1>
          <p className="text-muted-foreground">
            Manage employee demotions.
          </p>
        </div>
        <Link href="/activities/demotion/add" passHref>
          <Button variant="accent" className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5" />
            Add Demotion
          </Button>
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Demotion Records</CardTitle>
          <CardDescription>A list of all recent demotions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search demotions..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
              </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee ID</TableHead>
                <TableHead>Employee Name</TableHead>
                <TableHead>Previous Position</TableHead>
                <TableHead>New Position</TableHead>
                <TableHead>Date of Demotion</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {demotions.map((demo) => (
                <TableRow key={demo.id}>
                  <TableCell className="font-medium">{demo.employeeId}</TableCell>
                  <TableCell>{demo.employeeName}</TableCell>
                  <TableCell>{demo.previousPosition}</TableCell>
                  <TableCell>{demo.newPosition}</TableCell>
                  <TableCell>{demo.demotionDate}</TableCell>
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
