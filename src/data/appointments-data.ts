
import { Appointment } from './types';

// Dados das consultas
export const appointmentsData: Appointment[] = [
  {
    id: 1,
    petId: 1,
    vetId: 1,
    situation: "Exame de rotina",
    startTime: "2023-10-15T10:00:00",
    endTime: "2023-10-15T11:00:00",
    details: "Checkup completo e atualização de vacinas"
  },
  {
    id: 2,
    petId: 2,
    vetId: 2,
    situation: "Tratamento em andamento",
    startTime: "2023-10-16T14:30:00",
    endTime: "2023-10-16T15:30:00",
    details: "Acompanhamento de tratamento dermatológico"
  }
];
