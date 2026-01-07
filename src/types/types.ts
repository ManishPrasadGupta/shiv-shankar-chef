export interface ServiceItemData {
  id: string;
  title: string;
  // description?: string; // uncomment when needed
}

export interface ServiceListProps {
  title: React.ReactNode;
  subtitle: string;
  items: ServiceItemData[];
}
