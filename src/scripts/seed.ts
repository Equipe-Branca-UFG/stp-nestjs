import { PrismaClient } from '@prisma/client';
import { ObjectId } from 'bson';

const prisma = new PrismaClient();

async function main() {
  // Create or update Users
  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: 'doctor1@example.com' },
      update: {},
      create: {
        email: 'doctor1@example.com',
        password: 'password123',
        name: 'Dr. Smith',
        role: 'doctor',
      },
    }),
    prisma.user.upsert({
      where: { email: 'doctor2@example.com' },
      update: {},
      create: {
        email: 'doctor2@example.com',
        password: 'password123',
        name: 'Dr. Johnson',
        role: 'doctor',
      },
    }),
    prisma.user.upsert({
      where: { email: 'nurse1@example.com' },
      update: {},
      create: {
        email: 'nurse1@example.com',
        password: 'password123',
        name: 'Nurse Williams',
        role: 'nurse',
      },
    }),
  ]);

  // Create or update Patients
  const patients = await Promise.all([
    prisma.patient.upsert({
      where: { medicalRecordNumber: 'MRN001' },
      update: {},
      create: {
        name: 'John Doe',
        medicalRecordNumber: 'MRN001',
        currentStatus: 'Stable',
      },
    }),
    prisma.patient.upsert({
      where: { medicalRecordNumber: 'MRN002' },
      update: {},
      create: {
        name: 'Jane Smith',
        medicalRecordNumber: 'MRN002',
        currentStatus: 'Critical',
      },
    }),
    prisma.patient.upsert({
      where: { medicalRecordNumber: 'MRN003' },
      update: {},
      create: {
        name: 'Bob Johnson',
        medicalRecordNumber: 'MRN003',
        currentStatus: 'Recovering',
      },
    }),
  ]);

  // Create or update Hospitals
  const hospitalIds = [new ObjectId(), new ObjectId(), new ObjectId()];
  const hospitals = await Promise.all([
    prisma.hospital.upsert({
      where: { id: hospitalIds[0].toHexString() },
      update: {},
      create: {
        id: hospitalIds[0].toHexString(),
        name: 'City General Hospital',
        contactInfo: '123-456-7890',
        availableBeds: 50,
        responsiblePersonnel: 'Admin1',
      },
    }),
    prisma.hospital.upsert({
      where: { id: hospitalIds[1].toHexString() },
      update: {},
      create: {
        id: hospitalIds[1].toHexString(),
        name: 'County Medical Center',
        contactInfo: '098-765-4321',
        availableBeds: 30,
        responsiblePersonnel: 'Admin2',
      },
    }),
    prisma.hospital.upsert({
      where: { id: hospitalIds[2].toHexString() },
      update: {},
      create: {
        id: hospitalIds[2].toHexString(),
        name: 'University Hospital',
        contactInfo: '111-222-3333',
        availableBeds: 40,
        responsiblePersonnel: 'Admin3',
      },
    }),
  ]);

  // Create Transfer Requests
  const transferRequests = await Promise.all([
    prisma.transferRequest.create({
      data: {
        patientId: patients[0].id,
        fromHospitalId: hospitals[0].id,
        toHospitalId: hospitals[1].id,
        status: 'Pending',
        transportType: 'Ambulance',
        classification: 'Urgent',
        departureTime: new Date(),
        estimatedArrivalTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours later
        requestingDoctorId: users[0].id,
        reason: 'Specialized care required',
      },
    }),
    prisma.transferRequest.create({
      data: {
        patientId: patients[1].id,
        fromHospitalId: hospitals[1].id,
        toHospitalId: hospitals[2].id,
        status: 'In Progress',
        transportType: 'Helicopter',
        classification: 'Emergency',
        departureTime: new Date(),
        estimatedArrivalTime: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hour later
        requestingDoctorId: users[1].id,
        reason: 'Critical condition, require immediate transfer',
      },
    }),
    prisma.transferRequest.create({
      data: {
        patientId: patients[2].id,
        fromHospitalId: hospitals[2].id,
        toHospitalId: hospitals[0].id,
        status: 'Completed',
        transportType: 'Ambulance',
        classification: 'Non-urgent',
        departureTime: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
        estimatedArrivalTime: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
        requestingDoctorId: users[2].id,
        reason: 'Transfer back to local hospital',
      },
    }),
  ]);
  // Create Medications
  await Promise.all([
    prisma.medication.create({
      data: {
        name: 'Aspirin',
        dosage: '100mg',
        administrationDetails: 'Once daily',
        transferRequestId: transferRequests[0].id,
      },
    }),
    prisma.medication.create({
      data: {
        name: 'Insulin',
        dosage: '10 units',
        administrationDetails: 'Before meals',
        transferRequestId: transferRequests[1].id,
      },
    }),
    prisma.medication.create({
      data: {
        name: 'Antibiotics',
        dosage: '500mg',
        administrationDetails: 'Every 8 hours',
        transferRequestId: transferRequests[2].id,
      },
    }),
  ]);

  // Create Documents
  await Promise.all([
    prisma.document.create({
      data: {
        name: 'Medical History',
        content: 'Patient history...',
        type: 'PDF',
        transferRequestId: transferRequests[0].id,
      },
    }),
    prisma.document.create({
      data: {
        name: 'Lab Results',
        content: 'Blood test results...',
        type: 'PDF',
        transferRequestId: transferRequests[1].id,
      },
    }),
    prisma.document.create({
      data: {
        name: 'Transfer Notes',
        content: 'Notes on patient transfer...',
        type: 'Text',
        transferRequestId: transferRequests[2].id,
      },
    }),
  ]);

  // Create Equipment
  await Promise.all([
    prisma.equipment.create({
      data: {
        name: 'Ventilator',
        description: 'Portable ventilator for respiratory support',
        transferRequestId: transferRequests[0].id,
      },
    }),
    prisma.equipment.create({
      data: {
        name: 'Heart Monitor',
        description: 'Continuous cardiac monitoring device',
        transferRequestId: transferRequests[1].id,
      },
    }),
    prisma.equipment.create({
      data: {
        name: 'IV Pump',
        description: 'Intravenous fluid administration pump',
        transferRequestId: transferRequests[2].id,
      },
    }),
  ]);

  // Create Procedures
  await Promise.all([
    prisma.procedure.create({
      data: {
        name: 'Blood Transfusion',
        description: 'Transfusion of 2 units of O-negative blood',
        transferRequestId: transferRequests[0].id,
      },
    }),
    prisma.procedure.create({
      data: {
        name: 'Intubation',
        description: 'Endotracheal intubation for airway management',
        transferRequestId: transferRequests[1].id,
      },
    }),
    prisma.procedure.create({
      data: {
        name: 'CT Scan',
        description: 'Computerized tomography scan of the abdomen',
        transferRequestId: transferRequests[2].id,
      },
    }),
  ]);

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
