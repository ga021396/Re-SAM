export type Map = Object[][];

export type Object = {
  exists: number;
  name?: string;
};

export type Scene = {
  background: string;
  text: { role: string; des: string; option?: { A: string; B: string } }[];
};
