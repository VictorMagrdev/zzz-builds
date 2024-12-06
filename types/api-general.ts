export type Character = {
  id: number;
  nombre: string;
  imagen: string;
  hp: number;
  def: number;
  atk: number;
  impact: number;
  anomaly_mastery: number;
  anomaly_proficiency: number;
};

export type tierlist = {
  id: number;
  nombre: string;
  imagen: string;
  user_id: number;
};

export type Profile = {
  user: string;
  img_profile: string;
};
