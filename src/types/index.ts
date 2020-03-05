export type Barrier = {
  id: number;
  name: string;
  createDate: string;
};

export type RelatedBarriers = number[]; // barrier's id array

export type WithBarriers = {
  barriers: RelatedBarriers;
};

export type Cause = {
  id: number;
  name: string;
  createDate: string;
} & WithBarriers;

export type Consequence = {
  id: number;
  name: string;
  createDate: string;
} & WithBarriers;

export type Incident = {
  name: string;
  createDate: string;
};

export type Model = {
  id: number;
  barriers: Record<number, Barrier>;
  commonCauseBarriers: RelatedBarriers;
  commonConsequencesBarriers: RelatedBarriers;
  causes: Record<number, Cause>;
  consequences: Record<number, Consequence>;
  incident: Incident;
};
