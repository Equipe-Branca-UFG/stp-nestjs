import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function createDoctors() {
  const doctor1 = await prisma.user.create({
    data: {
      email: 'mario2@candido.dev',
      password: await bcrypt.hash('password123', 10),
      name: 'Dr. Mario Candido',
      role: 'doctor',
    },
  });

  const doctor2 = await prisma.user.create({
    data: {
      email: 'doctor5@example.com',
      password: await bcrypt.hash('password123', 10),
      name: 'Dr. Jane Smith',
      role: 'doctor',
    },
  });

  return { doctor1, doctor2 };
}

async function createHospitals() {
  const hospital1 = await prisma.hospital.create({
    data: {
      name: 'Central Hospital',
      contactInfo: 'central@hospital.com',
      availableBeds: 50,
      responsiblePersonnel: 'Dr. Alice Johnson',
    },
  });

  const hospital2 = await prisma.hospital.create({
    data: {
      name: 'City General Hospital',
      contactInfo: 'city@hospital.com',
      availableBeds: 30,
      responsiblePersonnel: 'Dr. Bob Williams',
    },
  });

  return { hospital1, hospital2 };
}

async function createPatients() {
  const patient1 = await prisma.patient.create({
    data: {
      name: 'Sarah Connor',
      medicalRecordNumber: 'MRN001',
      currentStatus: 'Stable',
    },
  });

  const patient2 = await prisma.patient.create({
    data: {
      name: 'John Connor',
      medicalRecordNumber: 'MRN002',
      currentStatus: 'Critical',
    },
  });

  return { patient1, patient2 };
}

async function createMedications() {
  const medication1 = await prisma.medication.create({
    data: {
      name: 'Ibuprofen',
      dosage: '400mg',
      administrationDetails: 'Every 6 hours',
    },
  });

  const medication2 = await prisma.medication.create({
    data: {
      name: 'Amoxicillin',
      dosage: '500mg',
      administrationDetails: 'Every 8 hours',
    },
  });

  return { medication1, medication2 };
}

async function createProcedures() {
  const procedure1 = await prisma.procedure.create({
    data: {
      name: 'Blood Test',
      description: 'Complete Blood Count (CBC)',
      transferRequest: undefined,
    },
  });

  const procedure2 = await prisma.procedure.create({
    data: {
      name: 'X-Ray',
      description: 'Chest X-Ray',
      transferRequest: undefined,
    },
  });

  return { procedure1, procedure2 };
}

async function createEquipment() {
  const equipment1 = await prisma.equipment.create({
    data: {
      name: 'Ventilator',
      description: 'Portable ventilator for respiratory support',
      transferRequest: undefined,
    },
  });

  const equipment2 = await prisma.equipment.create({
    data: {
      name: 'ECG Machine',
      description: 'Portable ECG machine for cardiac monitoring',
      transferRequest: undefined,
    },
  });

  return { equipment1, equipment2 };
}

async function createDocuments() {
  const document1 = await prisma.document.create({
    data: {
      name: 'Patient Consent Form',
      content: 'Content of patient consent form...',
      type: 'Consent',
      transferRequest: undefined,
    },
  });

  const document2 = await prisma.document.create({
    data: {
      name: 'Transfer Checklist',
      content: 'Checklist for patient transfer procedure...',
      type: 'Checklist',
      transferRequest: undefined,
    },
  });

  return { document1, document2 };
}

async function createTransferRequests({
  doctor1,
  doctor2,
  hospital1,
  hospital2,
  patient1,
  patient2,
  medication1,
  medication2,
  procedure1,
  procedure2,
  equipment1,
  equipment2,
  document1,
  document2,
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const transferRequest1 = await prisma.transferRequest.create({
    data: {
      patient: { connect: { id: patient1.id } },
      fromHospital: { connect: { id: hospital1.id } },
      toHospital: { connect: { id: hospital2.id } },
      status: 'Pending',
      transportType: 'Ambulance',
      classification: 'Urgent',
      departureTime: new Date('2023-06-15T10:00:00Z'),
      estimatedArrivalTime: new Date('2023-06-15T11:00:00Z'),
      requestingDoctor: { connect: { id: doctor1.id } },
      reason: 'Need for specialized care',
      Medication: { connect: [{ id: medication1.id }] },
      Procedure: { connect: [{ id: procedure1.id }] },
      Equipment: { connect: [{ id: equipment1.id }] },
      Document: { connect: [{ id: document1.id }, { id: document2.id }] },
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const transferRequest2 = await prisma.transferRequest.create({
    data: {
      patient: { connect: { id: patient2.id } },
      fromHospital: { connect: { id: hospital2.id } },
      toHospital: { connect: { id: hospital1.id } },
      status: 'In Progress',
      transportType: 'Helicopter',
      classification: 'Emergency',
      departureTime: new Date('2023-06-16T14:00:00Z'),
      estimatedArrivalTime: new Date('2023-06-16T14:30:00Z'),
      requestingDoctor: { connect: { id: doctor2.id } },
      reason: 'Critical condition requiring immediate transfer',
      Medication: { connect: [{ id: medication2.id }] },
      Procedure: { connect: [{ id: procedure2.id }] },
      Equipment: { connect: [{ id: equipment2.id }] },
      Document: { connect: [{ id: document1.id }, { id: document2.id }] },
    },
  });
}

async function main() {
  const { doctor1, doctor2 } = await createDoctors();
  const { hospital1, hospital2 } = await createHospitals();
  const { patient1, patient2 } = await createPatients();
  const { medication1, medication2 } = await createMedications();
  const { procedure1, procedure2 } = await createProcedures();
  const { equipment1, equipment2 } = await createEquipment();
  const { document1, document2 } = await createDocuments();

  await createTransferRequests({
    doctor1,
    doctor2,
    hospital1,
    hospital2,
    patient1,
    patient2,
    medication1,
    medication2,
    procedure1,
    procedure2,
    equipment1,
    equipment2,
    document1,
    document2,
  });

  console.log('Database populated successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
