export type ProjectCategory = 
  | 'all' 
  | 'commercial' 
  | 'brand_film' 
  | 'performance_ads' 
  | 'founder_story' 
  | 'podcast_studio';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  tag: string;
  duration: string;
  aspectRatio: string;
  resolution: string;
  year: string;
  metrics: string;
  metricLabel: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
  deliverables: string[];
  gear: string;
  director: string;
  colorGrade: string;
}

export interface ServiceTier {
  id: string;
  title: string;
  code: string;
  subtitle: string;
  highlightBadge: string;
  description: string;
  deliverables: string[];
  timeline: string;
  idealFor: string;
  impactMetric: string;
  startingBudget: string;
  popular?: boolean;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  headline: string;
  growthMetric: string;
  metricLabel: string;
  roas: string;
  challenge: string;
  strategy: string;
  outcome: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
  videoThumbnail: string;
  videoUrl: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  companyName: string;
  projectType: string;
  budgetRange: string;
  targetTimeline: string;
  projectBrief: string;
  preferredDate: string;
  preferredTime: string;
}

export interface EstimatorState {
  projectType: string;
  shootDays: number;
  locations: number;
  include4kDrone: boolean;
  include3dMotion: boolean;
  includeActorCasting: boolean;
  includeSoundStage: boolean;
  includePerformanceAdCutdowns: boolean;
  expeditedTurnaround: boolean;
}
