export enum OrderStatusType {
  OrderReceived = 'Order Received',
  Preparing = 'Preparing',
  ReadyToServe = 'Ready to Serve',
}

export interface OrdersArray {
  customername: string;
  // itemsordered: string;
  totalorderamount: number;
  orderstatus: OrderStatusType;
  orderid: number;
  items: Array<object>;
  id:number;
}
