
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, ArrowLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function AddDemotionPage() {
  const [demotionDate, setDemotionDate] = React.useState<Date>();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/activities/demotion" passHref>
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Add New Demotion</h1>
          <p className="text-muted-foreground">
            Fill in the details below to record a new demotion.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Employee Details */}
        <Card>
          <CardHeader>
            <CardTitle>Employee Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="employeeName">Employee Name</Label>
              <Input id="employeeName" placeholder="e.g., John Smith" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input id="employeeId" placeholder="e.g., NIB-00124" />
            </div>
          </CardContent>
        </Card>

        {/* Previous Job Information */}
        <Card>
          <CardHeader>
            <CardTitle>Previous Job Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="prevWorkUnit">Previous Work Unit</Label>
              <Input id="prevWorkUnit" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prevWorkLocation">Previous Work Location</Label>
              <Input id="prevWorkLocation" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prevPosition">Previous Position</Label>
              <Input id="prevPosition" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prevJobCategory">Previous Job Category</Label>
              <Input id="prevJobCategory" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prevJobGrade">Previous Job Grade</Label>
              <Input id="prevJobGrade" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prevSalary">Previous Salary</Label>
              <Input id="prevSalary" type="number" />
            </div>
          </CardContent>
        </Card>

        {/* New Job Information */}
        <Card>
          <CardHeader>
            <CardTitle>New Job Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="newWorkUnit">New Work Unit</Label>
              <Input id="newWorkUnit" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newWorkLocation">Work Location</Label>
              <Input id="newWorkLocation" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPosition">New Position</Label>
              <Input id="newPosition" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newJobCategory">Job Category</Label>
              <Input id="newJobCategory" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newJobGrade">New Job Grade</Label>
              <Input id="newJobGrade" />
            </div>
             <div className="space-y-2">
              <Label htmlFor="salaryStep">Salary Step</Label>
              <Input id="salaryStep" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newSalary">New Salary</Label>
              <Input id="newSalary" type="number" />
            </div>
          </CardContent>
        </Card>

        {/* Additional Details */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="space-y-2">
              <Label htmlFor="attachment">Attachment</Label>
              <Input id="attachment" type="file" />
            </div>
             <div className="space-y-2">
              <Label htmlFor="attachmentReversal">Attachment for Reversal</Label>
              <Input id="attachmentReversal" type="file" />
            </div>
             <div className="flex items-center space-x-2 pt-6">
                <Switch id="salaryChanged" />
                <Label htmlFor="salaryChanged" className="font-normal">Salary Changed?</Label>
            </div>
             <div className="space-y-2">
              <Label>Date of Demotion</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !demotionDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {demotionDate ? format(demotionDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={demotionDate}
                    onSelect={setDemotionDate}
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
        <Link href="/activities/demotion" passHref>
          <Button variant="outline">Cancel</Button>
        </Link>
        <Button variant="accent">Save Demotion</Button>
      </div>
    </div>
  );
}
