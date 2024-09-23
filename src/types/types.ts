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
