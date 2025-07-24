
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis, YAxis, Legend, Cell, Tooltip } from "recharts";
import { Users, UserCheck, UserX } from "lucide-react";

// Mock data, enhanced for dashboard
const employees = [
  { id: "NIB-00123", name: "Jane Doe", position: "Senior Software Engineer", department: "IT", status: "Active", gender: "Female", hireDate: "2021-08-15", educationLevel: "Master's" },
  { id: "NIB-00124", name: "John Smith", position: "Project Manager", department: "IT", status: "Active", gender: "Male", hireDate: "2020-02-20", educationLevel: "Bachelor's" },
  { id: "NIB-00125", name: "Alice Johnson", position: "UX Designer", department: "Design", status: "On Leave", gender: "Female", hireDate: "2022-03-10", educationLevel: "Bachelor's" },
  { id: "NIB-00126", name: "Bob Brown", position: "Accountant", department: "Finance", status: "Active", gender: "Male", hireDate: "2023-01-05", educationLevel: "Master's" },
  { id: "NIB-00127", name: "Charlie Davis", position: "Marketing Specialist", department: "Marketing", status: "Active", gender: "Male", hireDate: "2018-05-22", educationLevel: "PhD" },
  { id: "NIB-00128", name: "Diana Prince", position: "HR Manager", department: "HR", status: "Active", gender: "Female", hireDate: "2019-11-11", educationLevel: "Master's" },
  { id: "NIB-00129", name: "Eve Adams", position: "Junior Developer", department: "IT", status: "Active", gender: "Female", hireDate: "2024-02-01", educationLevel: "Bachelor's" },
  { id: "NIB-00130", name: "Frank Miller", position: "Content Writer", department: "Marketing", status: "Active", gender: "Male", hireDate: "2023-09-01", educationLevel: "Bachelor's" },
];


export default function DashboardPage() {
  // --- Data processing ---
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(e => e.status === 'Active').length;
  const onLeaveEmployees = employees.filter(e => e.status === 'On Leave').length;
  
  const genderData = employees.reduce((acc, employee) => {
    const gender = employee.gender;
    const existing = acc.find(item => item.name === gender);
    if (existing) {
      existing.value++;
    } else {
      acc.push({ name: gender, value: 1 });
    }
    return acc;
  }, [] as { name: string, value: number }[]);

  const departmentData = employees.reduce((acc, employee) => {
    const department = employee.department;
    const existing = acc.find(item => item.name === department);
    if (existing) {
      existing.employees++;
    } else {
      acc.push({ name: department, employees: 1 });
    }
    return acc;
  }, [] as { name: string, employees: number }[]);

  // Years of Service
  const yearsOfServiceData = employees.reduce((acc, employee) => {
    const hireDate = new Date(employee.hireDate);
    const years = (new Date().getTime() - hireDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    let bucket = "";
    if (years < 1) bucket = "0-1 Yrs";
    else if (years < 3) bucket = "1-3 Yrs";
    else if (years < 5) bucket = "3-5 Yrs";
    else bucket = "5+ Yrs";
    
    const existing = acc.find(item => item.name === bucket);
    if (existing) {
      existing.employees++;
    } else {
      acc.push({ name: bucket, employees: 1 });
    }
    return acc;
  }, [] as { name: string, employees: number }[]).sort((a,b) => a.name.localeCompare(b.name));

  // Education Level
  const educationData = employees.reduce((acc, employee) => {
    const level = employee.educationLevel;
    const existing = acc.find(item => item.name === level);
    if (existing) {
      existing.value++;
    } else {
      acc.push({ name: level, value: 1 });
    }
    return acc;
  }, [] as { name: string, value: number }[]);

  // Categories vs Gender
  const departmentGenderData = employees.reduce((acc, employee) => {
      const department = employee.department;
      let depData = acc.find(d => d.name === department);
      if (!depData) {
          depData = { name: department, Male: 0, Female: 0 };
          acc.push(depData);
      }
      if (employee.gender === "Male") {
          depData.Male++;
      } else if (employee.gender === "Female") {
          depData.Female++;
      }
      return acc;
  }, [] as { name: string, Male: number, Female: number }[]);


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
