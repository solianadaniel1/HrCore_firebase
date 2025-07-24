"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AddEmployeePage() {
  return (
    <div className="space-y-6">
        <div className="flex items-center gap-4">
            <Link href="/employees" passHref>
                <Button variant="outline" size="icon">
                    <ArrowLeft className="h-4 w-4" />
                </Button>
            </Link>
            <div>
                <h1 className="text-3xl font-bold">Add New Employee</h1>
                <p className="text-muted-foreground">
                    Fill in the details below to register a new employee.
                </p>
            </div>
      </div>

      <div className="space-y-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="e.g., Mr, Mrs, Dr" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="placeOfBirth">Place of Birth</Label>
              <Input id="placeOfBirth" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="countryOfBirth">Country of Birth</Label>
              <Input id="countryOfBirth" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality</Label>
              <Input id="nationality" />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="privateEmail">Private Email</Label>
              <Input id="privateEmail" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nibEmail">NIB Email</Label>
              <Input id="nibEmail" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="region">Region</Label>
              <Input id="region" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subCity">Sub City</Label>
              <Input id="subCity" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="woreda">Woreda</Label>
              <Input id="woreda" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="kebele">Kebele</Label>
              <Input id="kebele" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="houseNumber">House Number</Label>
              <Input id="houseNumber" />
            </div>
          </CardContent>
        </Card>

        {/* Employment Information */}
        <Card>
          <CardHeader>
            <CardTitle>Employment Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input id="employeeId" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="workUnit">Work Unit</Label>
              <Input id="workUnit" />
            </div>
             <div className="space-y-2">
              <Label htmlFor="parentWorkUnit">Parent Work Unit</Label>
              <Input id="parentWorkUnit" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="workLocation">Work Location</Label>
              <Input id="workLocation" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobCategory">Job Category</Label>
              <Input id="jobCategory" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobGrade">Job Grade</Label>
              <Input id="jobGrade" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="salaryStep">Salary Step</Label>
              <Input id="salaryStep" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="salary">Salary</Label>
              <Input id="salary" type="number" />
            </div>
             <div className="space-y-2">
              <Label htmlFor="manager">Manager</Label>
              <Input id="manager" />
            </div>
            <div className="flex items-center space-x-2 pt-6">
                <Checkbox id="isUnderProbation" />
                <Label htmlFor="isUnderProbation" className="font-normal">Is Under Probation?</Label>
            </div>
            <div className="flex items-center space-x-2 pt-6">
                <Checkbox id="isTrainee" />
                <Label htmlFor="isTrainee" className="font-normal">Is Trainee?</Label>
            </div>
          </CardContent>
        </Card>

        {/* Family and Dependent Information */}
        <Card>
          <CardHeader>
            <CardTitle>Family and Dependent Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
              <Label htmlFor="motherName">Mother’s Name</Label>
              <Input id="motherName" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maritalStatus">Marital Status</Label>
              <Select>
                <SelectTrigger id="maritalStatus">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="married">Married</SelectItem>
                  <SelectItem value="divorced">Divorced</SelectItem>
                  <SelectItem value="widowed">Widowed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dependentChildren">Number of Dependent Children</Label>
              <Input id="dependentChildren" type="number" min="0" />
            </div>
          </CardContent>
        </Card>
        
        {/* Identification Information */}
        <Card>
            <CardHeader>
                <CardTitle>Identification Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="nationalId">National ID</Label>
                    <Input id="nationalId" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="kebeleId">Kebele ID</Label>
                    <Input id="kebeleId" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="drivingLicence">Driving Licence</Label>
                    <Input id="drivingLicence" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="passportNo">Passport No</Label>
                    <Input id="passportNo" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="privatePensionId">Private Pension ID</Label>
                    <Input id="privatePensionId" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="tinNumber">TIN Number</Label>
                    <Input id="tinNumber" />
                </div>
                 <div className="space-y-2 col-span-1 md:col-span-2 lg:col-span-3">
                    <Label htmlFor="idDocument">Uploaded ID Document</Label>
                    <Input id="idDocument" type="file" />
                </div>
            </CardContent>
        </Card>
        
        {/* Guarantee Information */}
        <Card>
            <CardHeader>
                <CardTitle>Guarantee Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <Label htmlFor="guaranteeName">Name</Label>
                    <Input id="guaranteeName" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="guaranteeMobile">Mobile No.</Label>
                    <Input id="guaranteeMobile" type="tel" />
                </div>
                <div className="space-y-2 col-span-1 md:col-span-2">
                    <Label htmlFor="guaranteeDocument">Document</Label>
                    <Input id="guaranteeDocument" type="file" />
                </div>
            </CardContent>
        </Card>

        {/* Emergency Contact Information */}
        <Card>
            <CardHeader>
                <CardTitle>Emergency Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <Label htmlFor="emergencyName">Name</Label>
                    <Input id="emergencyName" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="emergencyMobile1">Mobile No. 1</Label>
                    <Input id="emergencyMobile1" type="tel" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="emergencyMobile2">Mobile No. 2</Label>
                    <Input id="emergencyMobile2" type="tel" />
                </div>
            </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-2">
        <Link href="/employees" passHref>
            <Button variant="outline">Cancel</Button>
        </Link>
        <Button variant="accent">Save Employee</Button>
      </div>
    </div>
  );
}
