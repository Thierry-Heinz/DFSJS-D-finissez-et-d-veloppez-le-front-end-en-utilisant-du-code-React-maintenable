interface Participations {
  id: number;
  year: number;
  city: string;
  athleteCount: number;
  medalsCount: number;
}

interface CountryData {
  id: number;
  name: string;
  participations: Participations[];
}

type Olympic = CountryData[];
export type { Olympic, CountryData, Participations };
