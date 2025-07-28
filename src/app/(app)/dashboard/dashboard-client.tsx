
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis, YAxis, Legend, Cell, Tooltip } from "recharts";
import { Users, UserCheck, UserX } from "lucide-react";

interface DashboardData {
  totalEmployees: number;
  activeEmployees: number;
  onLeaveEmployees: number;
  genderData: { name: string; value: number }[];
  departmentData: { name: string; employees: number }[];
  yearsOfServiceData: { name: string; employees: number }[];
  educationData: { name: string; value: number }[];
  departmentGenderData: { name: string; Male: number; Female: number }[];
}

interface DashboardClientProps {
  data: DashboardData;
}

export function DashboardClient({ data }: DashboardClientProps) {
  const { 
    totalEmployees,
    activeEmployees,
    onLeaveEmployees,
    genderData,
    departmentData,
    yearsOfServiceData,
    educationData,
    departmentGenderData,
  } = data;

  const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">HR Dashboard</h1>
        <p className="text-muted-foreground">
          An overview of your organization's human resources.
        </p>
      </div>
      
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalEmployees}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeEmployees}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Employees on Leave</CardTitle>
            <UserX className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{onLeaveEmployees}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {/* Gender Distribution */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Gender Distribution</CardTitle>
            <CardDescription>Distribution of employees by gender.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-52 w-full">
              <PieChart>
                <ChartTooltip 
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />} 
                />
                <Pie data={genderData} dataKey="value" nameKey="name" innerRadius={40} outerRadius={60} paddingAngle={5}>
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Employees by Department */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Employees by Department</CardTitle>
            <CardDescription>Number of employees in each department.</CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={{}} className="h-52 w-full">
              <BarChart data={departmentData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="employees" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* New row for additional charts */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Years of Service */}
        <Card>
          <CardHeader>
            <CardTitle>Years of Service</CardTitle>
            <CardDescription>Distribution of employee tenure.</CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={{}} className="h-52 w-full">
              <BarChart data={yearsOfServiceData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                <YAxis allowDecimals={false} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="employees" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        
        {/* Education Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Education Distribution</CardTitle>
            <CardDescription>Employee educational backgrounds.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-52 w-full">
              <PieChart>
                <ChartTooltip 
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />} 
                />
                <Pie data={educationData} dataKey="value" nameKey="name" innerRadius={40} outerRadius={60} paddingAngle={5}>
                  {educationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Gender by Department */}
        <Card>
          <CardHeader>
            <CardTitle>Gender by Department</CardTitle>
            <CardDescription>Breakdown of gender across departments.</CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={{}} className="h-52 w-full">
              <BarChart data={departmentGenderData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                <YAxis allowDecimals={false} />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--muted))' }}
                  content={<ChartTooltipContent />}
                />
                <Legend />
                <Bar dataKey="Male" stackId="a" fill="hsl(var(--chart-1))" radius={[0, 0, 0, 0]} />
                <Bar dataKey="Female" stackId="a" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
