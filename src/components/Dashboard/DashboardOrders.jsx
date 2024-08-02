import { DataView } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";

export const DashboardOrders = () => {
  const CustomerTemplate = () => (
    <div className="flex p-2.5">
      <img
        className="w-7 rounded-full mr-2"
        src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
      />
      John Doe
    </div>
  );

  const Tag = () => (
    <div className="border border-1 w-28 bg-green-400 rounded-2xl text-center opacity-60 p-0 text-green-900">
      Delivered
    </div>
  );
  const orders = [
    {
      id: 1,
      customer: <CustomerTemplate />,
      orderNo: "15478256",
      amount: "$124.00",
      status: <Tag />,
    },
    {
      id: 2,
      customer: <CustomerTemplate />,
      orderNo: "49867582",
      amount: "$385.02",
      status: <Tag />,
    },
    {
      id: 1,
      customer: <CustomerTemplate />,
      orderNo: "15478256",
      amount: "$124.00",
      status: <Tag />,
    },
    {
      id: 2,
      customer: <CustomerTemplate />,
      orderNo: "49867582",
      amount: "$385.02",
      status: <Tag />,
    },
    {
      id: 1,
      customer: <CustomerTemplate />,
      orderNo: "15478256",
      amount: "$124.00",
      status: <Tag />,
    },
    {
      id: 2,
      customer: <CustomerTemplate />,
      orderNo: "49867582",
      amount: "$385.02",
      status: <Tag />,
    },
    {
      id: 1,
      customer: <CustomerTemplate />,
      orderNo: "15478256",
      amount: "$124.00",
      status: <Tag />,
    },
    {
      id: 2,
      customer: <CustomerTemplate />,
      orderNo: "49867582",
      amount: "$385.02",
      status: <Tag />,
    },
  ];

  const listTemplate = (items) => {
    if (!items || items.length === 0) return null;

    let list = items.map((product, index) => {
      return itemTemplate(product, index);
    });

    return <div className="grid grid-nogutter">{list}</div>;
  };

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Dhruv",
      orderNo: "15478256",
      amount: "$124.00",
      status: <Tag />,
    },
    {
      id: 2,
      name: "Dhruv",
      orderNo: "49867582",
      amount: "$385.02",
      status: <Tag />,
    },
    {
      id: 1,
      name: "Dhruv",
      orderNo: "15478256",
      amount: "$124.00",
      status: <Tag />,
    },
    {
      id: 2,
      name: "Dhruv",
      orderNo: "49867582",
      amount: "$385.02",
      status: <Tag />,
    },
    {
      id: 1,
      name: "Dhruv",
      orderNo: "15478256",
      amount: "$124.00",
      status: <Tag />,
    },
    {
      id: 2,
      name: "Dhruv",
      orderNo: "49867582",
      amount: "$385.02",
      status: <Tag />,
    },
    {
      id: 1,
      name: "Dhruv",
      orderNo: "15478256",
      amount: "$124.00",
      status: <Tag />,
    },
    {
      id: 2,
      name: "Dhruv",
      orderNo: "49867582",
      amount: "$385.02",
      status: <Tag />,
    },
  ]);

  const itemTemplate = (product, index) => {
    return (
      <div className="col-12" key={product.id}>
        <div className={"p-4 gap-4"}>
          <div className="flex p-2.5">
            <img
              className="w-8 rounded-full mr-2"
              src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            />
            <p className="font-bold text-lg">{product.name}</p>
          </div>
          <Rating
            value={4}
            readOnly
            cancel={false}
            className="text-yellow-400 p-1"
          ></Rating>
          <p className="text-xs text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="grid lg:grid-cols-3 sm: grid-cols-2 md:grid-col-2 mt-8 gap-6">
      <div className="lg:col-span-2 sm:col-span-2 md:col-span-2 col-span-2 bg-gray-800 p-4 rounded-lg shadow-md w-full">
        <h2 className="text-xl mb-4">Recent Orders</h2>
        <Card>
          <DataTable value={orders} showGridlines width={"100%"} scrollable >
            <Column style={{ minWidth: '150px' }} field="customer" header="Customer" />
            <Column style={{ minWidth: '150px' }} field="orderNo" header="Order No." />
            <Column style={{ minWidth: '150px' }} field="amount" header="Amount" />
            <Column style={{ minWidth: '150px' }} field="status" header="Status" />
          </DataTable>
        </Card>
      </div>
      <div className="lg:col-span-1 sm:col-span-2 md:col-span-2 bg-gray-800 p-4 rounded-lg shadow-md w-full">
        <h2 className="text-xl mb-4">Customer's Feedback</h2>
        <div className="card">
          <DataView
            className="h-96 overflow-auto"
            value={products}
            listTemplate={listTemplate}
          />
        </div>
      </div>
    </div>
  );
};
