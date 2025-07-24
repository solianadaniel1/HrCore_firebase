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
import { DollarSign, Users, TrendingUp } from "lucide-react";

const payrollData = [
  {
    id: "NIB-00123",
    name: "Jane Doe",
    gross: 80000,
    deductions: 15000,
    net: 65000,
  },
  {
    id: "NIB-00124",
    name: "John Smith",
    gross: 95000,
    deductions: 18000,
    net: 77000,
  },
  {
    id: "NIB-00125",
    name: "Alice Johnson",
    gross: 70000,
    deductions: 12000,
    net: 58000,
  },
  {
    id: "NIB-00126",
    name: "Bob Brown",
    gross: 60000,
    deductions: 10000,
    net: 50000,
  },
];

const totalPayout = payrollData.reduce((acc, curr) => acc + curr.net, 0);

export default function PayrollPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Payroll Summary</h1>
        <p className="text-muted-foreground">
          Overview of the current payroll cycle.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Payout</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalPayout.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              For the current pay period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Employees Paid
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{payrollData.length}</div>
            <p className="text-xs text-muted-foreground">
              Total active employees
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Salary
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${(totalPayout / payrollData.length).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Average net pay per employee
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payroll Details</CardTitle>
          <CardDescription>
            Detailed breakdown of salaries for the current period.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Gross Salary</TableHead>
                <TableHead className="text-right">Deductions</TableHead>
                <TableHead className="text-right">Net Salary</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payrollData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="text-right">
                    ${item.gross.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right text-red-500">
                    -${item.deductions.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    ${item.net.toLocaleString()}
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
