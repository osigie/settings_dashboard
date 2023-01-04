import React from "react";
import StackAvatar from "./StackAvatar";
import { FiDownloadCloud, FiCheck, FiArrowDown } from "react-icons/fi";

type Props = {};

export default function BillingHistory({}: Props) {
  return (
    <div className="overflow-x-auto relative">
      <table className="table-auto w-full shadow-darker rounded-lg border-brand-grey-4">
        <thead className="bg-brand-background-1 text-brand-grey-2 font-medium text-xs whitespace-nowrap">
          <tr>
            <th className="flex gap-3 px-6 py-4">
              <input type="checkbox" className="block rounded-md" />
              Invoice
              <FiArrowDown className="block" />
            </th>
            <th className="px-6 py-4 ">Amount</th>
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">User on plan</th>
          </tr>
        </thead>
        <tbody className="bg-white pb-5 text-sm text-brand-grey-2">
          {billing_data.map((bill, index) => {
            return (
              <tr key={index} className="border-b  border-brand-grey-4">
                <td className="flex items-center px-6 py-4 text-brand-dark-1">
                  <input type="checkbox" className="rounded-md mr-3" />
                  {bill.invoice}
                </td>
                <td className="px-6 py-4"> {bill.amount}</td>
                <td className="px-6 py-4">{bill.date}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center items-center bg-brand-background-3 py-[2px] pr-2 pl-[6px] rounded-2xl border-none text-brand-card-5 text-xs font-medium">
                    <FiCheck className="block" />
                    {bill.status}
                  </div>
                </td>
                <td className="pl-6 pr-0 py-4">
                  <StackAvatar users={bill.users} />
                </td>
                <td className="pl-0 pr-6 py-4">
                  <FiDownloadCloud className="text-brand-grey-2" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
const billing_data = [
  {
    invoice: "Basic Plan - Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "Paid",
    userOnPlan: "icons",
    users:7
  },
  {
    invoice: "Basic Plan - Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "Paid",
    userOnPlan: "icons",
    users:6
  },
  {
    invoice: "Basic Plan - Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "Paid",
    userOnPlan: "icons",
    users:5
  },
  {
    invoice: "Basic Plan - Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "Paid",
    userOnPlan: "icons",
    users:3
  },
  {
    invoice: "Basic Plan - Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "Paid",
    userOnPlan: "icons",
    users:4
  },
  {
    invoice: "Basic Plan - Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "Paid",
    userOnPlan: "icons",
    users:4
  },
  {
    invoice: "Basic Plan - Dec 2022",
    amount: "USD $10.00",
    date: "Dec 1, 2022",
    status: "Paid",
    userOnPlan: "icons",
    users:3
  },
];
