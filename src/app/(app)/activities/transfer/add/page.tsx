
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, ArrowLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function AddTransferPage() {
  const [transferDate, setTransferDate] = React.useState<Date>();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/activities/transfer" passHref>
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Add New Transfer</h1>
          <p className="text-muted-foreground">
            Fill in the details below to record a new employee transfer.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Transfer Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="employeeName">Employee Name</Label>
              <Input id="employeeName" placeholder="e.g., Eva Green" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="transferType">Transfer Type</Label>
               <Select>
                <SelectTrigger id="transferType">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="internal">Internal</SelectItem>
                  <SelectItem value="inter-departmental">Inter-departmental</SelectItem>
                  <SelectItem value="branch-transfer">Branch Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="prevWorkUnit">Previous Work Unit</Label>
              <Input id="prevWorkUnit" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newWorkUnit">New Work Unit</Label>
              <Input id="newWorkUnit" />
            </div>
            <div className="space-y-2">
              <Label>Date of Transfer</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !transferDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {transferDate ? format(transferDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={transferDate}
                    onSelect={setTransferDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
             <div className="space-y-2">
              <Label htmlFor="attachment">Attachment</Label>
              <Input id="attachment" type="file" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="remark">Remark</Label>
              <Textarea id="remark" placeholder="Enter any remarks here..." />
            </div>
          </CardContent>
        </Card>
        
        <Card>
           <CardHeader>
            <CardTitle>Approval Information</CardTitle>
            <CardDescription>This information is typically updated during the approval process.</CardDescription>
          </CardHeader>
           <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Input id="status" defaultValue="Pending" disabled />
            </div>
           </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-2">
        <Link href="/activities/transfer" passHref>
          <Button variant="outline">Cancel</Button>
        </Link>
        <Button variant="accent">Save Transfer</Button>
      </div>
    </div>
  );
}
