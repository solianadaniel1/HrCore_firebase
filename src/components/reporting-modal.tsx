
"use client";

import * as React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FileDown, FileSpreadsheet, BarChart } from "lucide-react";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";

const actionTypes = [
  "Promotion",
  "Demotion",
  "Lateral",
  "Transfer",
  "Acting",
  "Returned Acting",
  "Experience",
  "Profile",
  "NBE",
];

// Extend jsPDF with autoTable
interface jsPDFWithAutoTable extends jsPDF {
  autoTable: (options: any) => jsPDF;
}


export function ReportingModal() {
  const { toast } = useToast();
  const [actionType, setActionType] = React.useState("");
  const [selectedActionLabel, setSelectedActionLabel] = React.useState("");

  const handleActionTypeChange = (value: string) => {
    setActionType(value);
    const label = actionTypes.find(type => type.toLowerCase().replace(/ /g, '-') === value);
    setSelectedActionLabel(label || "");
  };

  // Mock data based on action type
  const getMockData = (type: string) => {
      if (type.includes('promotion')) {
          return [
              { id: "PROMO-001", employeeId: "NIB-00123", employeeName: "Jane Doe", newPosition: "Senior SE", effectiveDate: "2024-08-01" },
              { id: "PROMO-002", employeeId: "NIB-00126", employeeName: "Bob Brown", newPosition: "Accountant", effectiveDate: "2024-07-15" },
          ];
      }
      if (type.includes('demotion')) {
          return [
              { id: "DEMO-001", employeeId: "NIB-00124", employeeName: "John Smith", newPosition: "Senior Dev", demotionDate: "2024-08-01" },
              { id: "DEMO-002", employeeId: "NIB-00125", employeeName: "Alice Johnson", newPosition: "UI Designer", demotionDate: "2024-07-15" },
          ];
      }
      // Default/other types
      return [
          { id: 'ACT-001', name: 'Sample Name', type: selectedActionLabel, date: '2024-01-01', details: 'Sample details for action' },
      ];
  };

  const getHeaders = (type: string): string[] => {
      if (type.includes('promotion')) {
          return ["ID", "Employee ID", "Employee Name", "New Position", "Effective Date"];
      }
      if (type.includes('demotion')) {
          return ["ID", "Employee ID", "Employee Name", "New Position", "Demotion Date"];
      }
      return ["ID", "Name", "Type", "Date", "Details"];
  };

  const handleGeneratePdf = () => {
    if (!actionType) {
        toast({
            title: "Action Type Required",
            description: "Please select an action type before generating a report.",
            variant: "destructive",
        });
        return;
    }

    const doc = new jsPDF() as jsPDFWithAutoTable;
    const data = getMockData(actionType);
    const headers = getHeaders(actionType);
    const body = data.map(item => Object.values(item));

    doc.setFontSize(18);
    doc.text(`${selectedActionLabel} Report`, 14, 22);
    doc.setFontSize(11);
    doc.setTextColor(100);

    doc.autoTable({
        startY: 30,
        head: [headers],
        body: body,
        theme: 'striped',
        headStyles: { fillColor: [143, 62, 20] },
    });

    doc.save(`${actionType}_report.pdf`);
  };

  const handleGenerateExcel = () => {
    if (!actionType) {
        toast({
            title: "Action Type Required",
            description: "Please select an action type before generating a report.",
            variant: "destructive",
        });
        return;
    }

    const data = getMockData(actionType);
    const headers = getHeaders(actionType);

    const worksheetData = [
        headers,
        ...data.map(item => Object.values(item))
    ];
    
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

    XLSX.writeFile(workbook, `${actionType}_report.xlsx`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SidebarMenuButton tooltip="Reporting">
          <BarChart />
          <span>Reporting</span>
        </SidebarMenuButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Generate Report</DialogTitle>
          <DialogDescription>
            Select a report type and format to generate.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="action-type" className="text-right">
              Action Type
            </Label>
            <Select value={actionType} onValueChange={handleActionTypeChange}>
                <SelectTrigger id="action-type" className="col-span-3">
                    <SelectValue placeholder="Select an action type" />
                </SelectTrigger>
                <SelectContent>
                    {actionTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase().replace(/ /g, '-')}>
                            {type}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
            <Button variant="outline" onClick={handleGenerateExcel}>
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                Generate Excel
            </Button>
            <Button variant="accent" onClick={handleGeneratePdf}>
                <FileDown className="mr-2 h-4 w-4" />
                Generate PDF
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
