import { NextApiRequest, NextApiResponse } from "next";

type Todo = {
  id: number,
  title: string;
}

const todos: Todo[] = [
  { id:1, title: "読書"},
  { id:2, title: "プログラミング"},
  { id:3, title: "散歩"},
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await new Promise((resolve)  =>  setTimeout(resolve, 4000));

  res.status(200).json(todos);
};