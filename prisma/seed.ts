
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');

  // Create Employees
  const employee1 = await prisma.employee.create({
    data: {
      id: 'NIB-00123',
      name: 'Jane Doe',
      title: 'Ms.',
      placeOfBirth: 'Addis Ababa',
      countryOfBirth: 'Ethiopia',
      nationality: 'Ethiopian',
      privateEmail: 'jane.doe@example.com',
      nibEmail: 'jane.doe@nib.com',
      country: 'Ethiopia',
      region: 'Addis Ababa',
      city: 'Addis Ababa',
      subCity: 'Bole',
      woreda: '03',
      kebele: '05',
      houseNumber: '123',
      employmentTerm: 'Permanent',
      workUnit: 'IT',
      parentWorkUnit: 'Technology',
      workLocation: 'Head Office',
      position: 'Senior Software Engineer',
      jobCategory: 'Technology',
      jobGrade: 'XI',
      salaryStep: '3',
      salary: 80000,
      manager: 'John Smith',
      isUnderProbation: false,
      isTrainee: false,
      motherName: 'Genet Doe',
      maritalStatus: 'Single',
      dependentChildren: 0,
      nationalId: 'ID123456',
      kebeleId: 'KID123',
      drivingLicence: 'DL123',
      passportNo: 'P123',
      privatePensionId: 'PP123',
      tinNumber: 'TIN123',
      guaranteeName: 'Tigist Alemayehu',
      guaranteeMobile: '0911123456',
      emergencyContactName: 'Tigist Alemayehu',
      emergencyContactMobile1: '0911123456',
      emergencyContactMobile2: '0911123457',
      status: 'Active',
      avatar: 'https://placehold.co/100x100.png',
      department: 'IT',
      gender: 'Female',
      hireDate: new Date('2021-08-15'),
      educationLevel: "Master's",
    },
  });

  const employee2 = await prisma.employee.create({
    data: {
      id: 'NIB-00124',
      name: 'John Smith',
      title: 'Mr.',
      placeOfBirth: 'Gondar',
      countryOfBirth: 'Ethiopia',
      nationality: 'Ethiopian',
      privateEmail: 'john.smith@example.com',
      nibEmail: 'john.smith@nib.com',
      country: 'Ethiopia',
      region: 'Amhara',
      city: 'Gondar',
      subCity: 'Arada',
      woreda: '01',
      kebele: '02',
      houseNumber: '456',
      employmentTerm: 'Permanent',
      workUnit: 'IT',
      parentWorkUnit: 'Technology',
      workLocation: 'Head Office',
      position: 'Project Manager',
      jobCategory: 'Management',
      jobGrade: 'XII',
      salaryStep: '5',
      salary: 95000,
      manager: 'CEO',
      isUnderProbation: false,
      isTrainee: false,
      motherName: 'Yeshi Smith',
      maritalStatus: 'Married',
      dependentChildren: 2,
      nationalId: 'ID654321',
      kebeleId: 'KID321',
      tinNumber: 'TIN321',
      guaranteeName: 'Abebe Bikila',
      guaranteeMobile: '0912987654',
      emergencyContactName: 'Yeshi Smith',
      emergencyContactMobile1: '0912987654',
      status: 'Active',
      avatar: 'https://placehold.co/100x100.png',
      department: 'IT',
      gender: 'Male',
      hireDate: new Date('2020-02-20'),
      educationLevel: "Bachelor's",
    },
  });
  
  // Seed Promotions
  await prisma.promotion.create({
    data: {
      employeeId: employee1.id,
      previousWorkUnit: 'IT',
      previousWorkLocation: 'Head Office',
      previousPosition: 'Software Engineer',
      previousJobCategory: 'Technology',
      previousJobGrade: 'X',
      previousSalary: 60000,
      newWorkUnit: 'IT',
      newWorkLocation: 'Head Office',
      newPosition: 'Senior Software Engineer',
      newJobCategory: 'Technology',
      newJobGrade: 'XI',
      salaryStep: '3',
      newSalary: 80000,
      promotionType: 'Standard',
      effectiveDate: new Date('2024-08-01'),
      promotionDate: new Date('2024-07-25'),
    },
  });

  // Seed Demotions
  await prisma.demotion.create({
    data: {
      employeeId: employee2.id,
      previousWorkUnit: 'IT',
      previousWorkLocation: 'Head Office',
      previousPosition: 'Senior Project Manager',
      previousJobCategory: 'Management',
      previousJobGrade: 'XIII',
      previousSalary: 110000,
      newWorkUnit: 'IT',
      newWorkLocation: 'Head Office',
      newPosition: 'Project Manager',
      newJobCategory: 'Management',
      newJobGrade: 'XII',
      salaryStep: '5',
      newSalary: 95000,
      salaryChanged: true,
      demotionDate: new Date('2024-08-01'),
    },
  });
  
  // Seed Laterals
   await prisma.lateral.create({
    data: {
      employeeId: employee1.id,
      currentWorkUnit: 'IT',
      currentWorkLocation: 'Head Office',
      currentPosition: 'Senior Software Engineer',
      currentJobCategory: 'Technology',
      currentJobGrade: 'XI',
      newWorkUnit: 'IT Strategy',
      newWorkLocation: 'Head Office',
      newPosition: 'IT Strategist',
      newJobCategory: 'Strategy',
      newJobGrade: 'XI',
      assignmentDate: new Date('2024-08-10'),
    }
  });

  // Seed Transfers
  await prisma.transfer.create({
    data: {
      employeeId: employee2.id,
      transferType: 'Inter-departmental',
      previousWorkUnit: 'IT',
      newWorkUnit: 'Audit',
      transferDate: new Date('2024-09-01'),
      status: 'Approved',
    }
  });
  
  // Seed Acting Assignments
  await prisma.acting.create({
    data: {
      employeeId: employee1.id,
      currentWorkUnit: 'IT',
      currentWorkLocation: 'Head Office',
      currentPosition: 'Senior Software Engineer',
      currentJobCategory: 'Technology',
      currentJobGrade: 'XI',
      currentSalary: 80000,
      newWorkUnit: 'IT',
      newWorkLocation: 'Head Office',
      newPosition: 'Engineering Manager',
      newJobCategory: 'Management',
      newJobGrade: 'XIII',
      newSalary: 115000,
      actingAllowance: 5000,
      actingType: 'Higher-duties',
      assignmentDate: new Date('2024-09-15'),
    }
  });
  
  // Seed Leave
  await prisma.leave.create({
      data: {
          employeeId: employee1.id,
          leaveType: 'Annual',
          startDate: new Date('2024-10-10'),
          endDate: new Date('2024-10-15'),
          reason: 'Vacation',
          status: 'Approved',
      }
  });
   await prisma.leave.create({
      data: {
          employeeId: employee2.id,
          leaveType: 'Sick',
          startDate: new Date('2024-11-05'),
          endDate: new Date('2024-11-06'),
          reason: 'Flu',
          status: 'Approved',
      }
  });


  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
