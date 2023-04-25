export interface Chat {
  id: number;
  users: { id: number; phone: string }[];
  messages: {
    id: string;
    content: string;
    sent: string;
    sentBy: number | string;
  }[];
}
