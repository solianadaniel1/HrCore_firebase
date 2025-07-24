
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

const promotions = [
  {
    id: "PROMO-001",
    employeeId: "NIB-00123",
    employeeName: "Jane Doe",
    previousPosition: "Software Engineer",
    newPosition: "Senior Software Engineer",
    effectiveDate: "2024-08-01",
  },
  {
    id: "PROMO-002",
    employeeId: "NIB-00126",
    employeeName: "Bob Brown",
    previousPosition: "Junior Accountant",
    newPosition: "Accountant",
    effectiveDate: "2024-07-15",
  },
];

export default function PromotionPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Promotions</h1>
          <p className="text-muted-foreground">
            Manage employee promotions.
          </p>
        </div>
        <Link href="/activities/promotion/add" passHref>
          <Button variant="accent" className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5" />
            Add Promotion
          </Button>
        </Link>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Promotion Records</CardTitle>
          <CardDescription>A list of all recent promotions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search promotions..."
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
                <TableHead>Effective Date</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {promotions.map((promo) => (
                <TableRow key={promo.id}>
                  <TableCell className="font-medium">{promo.employeeId}</TableCell>
                  <TableCell>{promo.employeeName}</TableCell>
                  <TableCell>{promo.previousPosition}</TableCell>
                  <TableCell>{promo.newPosition}</TableCell>
                  <TableCell>{promo.effectiveDate}</TableCell>
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
