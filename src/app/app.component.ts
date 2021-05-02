import { Component } from '@angular/core';
import { OrdersArray, OrderStatusType } from './order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PizzaApp-Demo';
  constructor() {}

  public orderStatusType = OrderStatusType;
  public selectedorder: boolean = false;
  public isDisabled: boolean = false;
  public orderdetail: any;
  public orderstatus : Array<String> = ['Order Received','Preparing','Ready to Serve'];
  public ordersArray: Array<OrdersArray> = [
    {
      customername: 'Ross',
      totalorderamount: 4000,
      orderstatus: this.orderStatusType.OrderReceived,
      orderid: 10001,
      items: [
        {
            "ingredientName": "Pasta Pizza",
            "itemCount": 1,
            "amount": 400
        },
        {
            "ingredientName": "Pasta Pizza Chicken",
            "itemCount": 3,
            "amount": 1200
        }
    ],
      id:0,
    },
    {
      customername: 'Rachael',
      totalorderamount: 1100,
      orderstatus: this.orderStatusType.Preparing,
      orderid: 10002,
      items: [
        {
            "ingredientName": "Veg Pizza",
            "itemCount": 1,
            "amount": 200
        },
        {
            "ingredientName": "Mushroom Pizza",
            "itemCount": 3,
            "amount": 900
        }
    ],
    id:1,
    },
    {
      customername: 'Monica',
      totalorderamount: 700,
      orderstatus: this.orderStatusType.ReadyToServe,
      orderid: 10003,
      items: [
        {
            "ingredientName": "Chicken Pizza",
            "itemCount": 1,
            "amount": 400
        },
        {
            "ingredientName": "Cheese Pizza",
            "itemCount": 1,
            "amount": 300
        }
    ],
    id:2,
    },
    {
      customername: 'Chandler',
      totalorderamount: 2900,
      orderstatus: this.orderStatusType.OrderReceived,
      orderid: 10004,
      items: [
        {
            "ingredientName": "Chicken Cheese Pizza",
            "itemCount": 4,
            "amount": 2000
        },
        {
            "ingredientName": "Corn Cheese Pizza",
            "itemCount": 3,
            "amount": 900
        }
    ],
    id:3,
    },
    {
      customername: 'Joey',
      totalorderamount: 4000,
      orderstatus: this.orderStatusType.Preparing,
      orderid: 10005,
      items: [
        {
            "ingredientName": "Pasta Pizza Chicken",
            "itemCount": 10,
            "amount": 4000
        }
    ],
    id:4,
    },
    {
      customername: 'Phoebe',
      totalorderamount: 1600,
      orderstatus: this.orderStatusType.ReadyToServe,
      orderid: 10006,
      items: [
        {
            "ingredientName": "Mushroom Pizza",
            "itemCount": 1,
            "amount": 300
        },
        {
          "ingredientName": "Chicken Pizza",
          "itemCount": 1,
          "amount": 400
      },
        {
            "ingredientName": "Cheese Pizza",
            "itemCount": 3,
            "amount": 900
        }
    ],
    id:5,
    },
    {
      customername: 'Janice',
      totalorderamount: 1100,
      orderstatus: this.orderStatusType.ReadyToServe,
      orderid: 10007,
      items: [
        {
            "ingredientName": "Pasta Pizza",
            "itemCount": 1,
            "amount": 400
        },
        {
            "ingredientName": "Chicken Pizza",
            "itemCount": 2,
            "amount": 800
        }
    ],
    id:6,
    },
  ];

  ngOnInit() {
    let coll = document.getElementsByClassName('collapsible');
    let i: number;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    }
  }
  public LoadOrderDetails(OrderDetails){
    this.selectedorder = true;
    console.log(OrderDetails);
    this.orderdetail = OrderDetails;
  }
  public ChangeStatus(orderdetail){
    console.log(orderdetail);
    if(this.ordersArray[orderdetail.id].orderstatus == this.orderstatus[0]){
      this.ordersArray[orderdetail.id].orderstatus = this.orderStatusType.Preparing;
    }
   else if(this.ordersArray[orderdetail.id].orderstatus == this.orderstatus[1]){
      this.ordersArray[orderdetail.id].orderstatus = this.orderStatusType.ReadyToServe;
    }
   else if(this.ordersArray[orderdetail.id].orderstatus == this.orderstatus[2]){
    this.isDisabled = true;
    }

  }
}
