
"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, ArrowLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function AddLateralPage() {
  const [assignmentDate, setAssignmentDate] = React.useState<Date>();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/activities/lateral" passHref>
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Add New Lateral Assignment</h1>
          <p className="text-muted-foreground">
            Fill in the details below to record a new lateral movement.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Current Job Information */}
        <Card>
          <CardHeader>
            <CardTitle>Current Job Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="employeeName">Employee Name</Label>
              <Input id="employeeName" placeholder="e.g., Charlie Davis" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentWorkUnit">Current Work Unit</Label>
              <Input id="currentWorkUnit" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentWorkLocation">Current Work Location</Label>
              <Input id="currentWorkLocation" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentPosition">Current Position</Label>
              <Input id="currentPosition" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentJobCategory">Current Job Category</Label>
              <Input id="currentJobCategory" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentJobGrade">Current Job Grade</Label>
              <Input id="currentJobGrade" />
            </div>
          </CardContent>
        </Card>

        {/* New Job Information & Details */}
        <Card>
          <CardHeader>
            <CardTitle>New Job Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input id="employeeId" placeholder="e.g., NIB-00127" />
            </div>
             <div className="space-y-2">
              <Label htmlFor="newWorkUnit">New Work Unit</Label>
              <Input id="newWorkUnit" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newWorkLocation">New Work Location</Label>
              <Input id="newWorkLocation" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPosition">New Position</Label>
              <Input id="newPosition" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newJobCategory">New Job Category</Label>
              <Input id="newJobCategory" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newJobGrade">New Job Grade</Label>
              <Input id="newJobGrade" />
            </div>
             <div className="space-y-2">
              <Label htmlFor="attachment">Attachment</Label>
              <Input id="attachment" type="file" />
            </div>
             <div className="space-y-2">
              <Label>Date of Assignment</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !assignmentDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {assignmentDate ? format(assignmentDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={assignmentDate}
                    onSelect={setAssignmentDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
             <div className="space-y-2 md:col-span-3">
              <Label htmlFor="remark">Remark</Label>
              <Textarea id="remark" placeholder="Enter any remarks here..." />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-2">
        <Link href="/activities/lateral" passHref>
          <Button variant="outline">Cancel</Button>
        </Link>
        <Button variant="accent">Save Assignment</Button>
      </div>
    </div>
  );
}
