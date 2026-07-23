export interface GoalOption {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  amount?: string;
  selected?: boolean;
}

export interface ActivityItem {
  id: string;
  merchant: string;
  category: string;
  amount: string;
  remainder: string;
  icon: string;
  isRule?: boolean;
}

export interface ActivityGroup {
  dateLabel: string;
  items: ActivityItem[];
}

export interface PartnerPot {
  id: string;
  name: string;
  category: string;
  yieldRate: string;
  icon: string;
  note: string;
}

export interface RuleItem {
  id: string;
  triggerText: string;
  triggerTag: string;
  actionText: string;
  amountTag: string;
  targetText: string;
  targetTag: string;
  savedSoFar: string;
  active: boolean;
}

export interface AssetAllocation {
  label: string;
  percentage: number;
}
