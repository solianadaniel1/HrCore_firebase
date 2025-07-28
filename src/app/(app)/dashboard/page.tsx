import { DashboardClient } from "./dashboard-client";

export default async function DashboardPage() {
  // Mock data, as Prisma is causing environment issues.
  const employees = [
    { id: '1', name: 'Jane Doe', gender: 'Female', department: 'IT', hireDate: '2021-08-15', educationLevel: "Master's", status: 'Active' },
    { id: '2', name: 'John Smith', gender: 'Male', department: 'IT', hireDate: '2020-02-20', educationLevel: "Bachelor's", status: 'Active' },
    { id: '3', name: 'Alice Johnson', gender: 'Female', department: 'Design', hireDate: '2022-01-10', educationLevel: "Bachelor's", status: 'On Leave' },
    { id: '4', name: 'Bob Brown', gender: 'Male', department: 'Finance', hireDate: '2018-05-25', educationLevel: "Master's", status: 'Active' },
    { id: '5', name: 'Charlie Davis', gender: 'Male', department: 'HR', hireDate: '2023-11-01', educationLevel: "PhD", status: 'Active' },
  ];

  // Data processing on the server
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

  const dashboardData = {
    totalEmployees,
    activeEmployees,
    onLeaveEmployees,
    genderData,
    departmentData,
    yearsOfServiceData,
    educationData,
    departmentGenderData,
  };

  return <DashboardClient data={dashboardData} />;
}
