export type TCategory = {
  id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
};

export type TCategoriesResponse = {
  data: TCategory[];
};
