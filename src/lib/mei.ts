/**
 * Math-English Index (MEI) Scoring Service
 * Formula: MEI = 0.25*V + 0.25*R + 0.30*P + 0.20*E
 */

export interface MEIWeights {
  vocabulary: number; // default 0.25
  reading: number;    // default 0.25
  problem_solving: number; // default 0.30
  expression: number; // default 0.20
}

export const DEFAULT_MEI_WEIGHTS: MEIWeights = {
  vocabulary: 0.25,
  reading: 0.25,
  problem_solving: 0.30,
  expression: 0.20,
};

export function calculateMEI(
  v: number,
  r: number,
  p: number,
  e: number,
  weights: MEIWeights = DEFAULT_MEI_WEIGHTS
): number {
  const raw = v * weights.vocabulary + r * weights.reading + p * weights.problem_solving + e * weights.expression;
  return Math.min(100, Math.max(0, Math.round(raw * 10) / 10));
}

export function getMEILevelTitle(mei: number): string {
  if (mei >= 85) return 'Level 5 – Full English Math Master';
  if (mei >= 70) return 'Level 4 – English Mathematics Advanced';
  if (mei >= 50) return 'Level 3 – Bilingual Problem Solver';
  if (mei >= 30) return 'Level 2 – Math Sentence Builder';
  return 'Level 1 – Math Words Explorer';
}

export function getRecommendedLevel(mei: number): 1 | 2 | 3 | 4 | 5 {
  if (mei >= 85) return 5;
  if (mei >= 70) return 4;
  if (mei >= 50) return 3;
  if (mei >= 30) return 2;
  return 1;
}
