import type { NextApiRequest, NextApiResponse } from "next";

export type UserType = {
  firstName: string;
  lastName: string;
  avatarLink: string;
  balance: number;
};

const mockUser = {
  firstName: "Tom",
  lastName: "Jones",
  avatarLink: "/spokesafe-icon.png",
  balance: 10,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserType>
) {
  res.status(200).json(mockUser);
}
