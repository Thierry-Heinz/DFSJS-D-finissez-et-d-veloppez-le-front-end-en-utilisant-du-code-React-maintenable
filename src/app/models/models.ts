interface Participation {
  id: number;
  year: number;
  city: string;
  athleteCount: number;
  medalsCount: number;
}

interface Olympic {
  id: number;
  name: string;
  participations: Participation[];
}

export type { Olympic, Participation };
