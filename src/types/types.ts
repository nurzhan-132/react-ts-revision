export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}

export interface IAddress {
  city: string;
  street: string;
  zipcode: string;
}

export interface ITodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
