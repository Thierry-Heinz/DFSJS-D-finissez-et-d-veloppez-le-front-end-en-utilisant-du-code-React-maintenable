interface Participation {
  id: number;
  year: number;
  city: string;
  athleteCount: number;
  medalsCount: number;
}

interface CountryData {
  id: number;
  name: string;
  participations: Participation[];
}

type Olympic = CountryData[];
export type { Olympic, CountryData, Participation };
