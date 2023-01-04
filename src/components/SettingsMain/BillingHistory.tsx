import React from "react";
import StackAvatar from "./StackAvatar";
import { FiDownloadCloud, FiCheck, FiArrowDown } from "react-icons/fi";
import { billing_data } from "../../utils";

type Props = {};

export default function BillingHistory({}: Props) {
  return (
    <div className="overflow-x-auto relative">
      <table className="table-auto w-full shadow-darker rounded-lg border-brand-grey-4">
        <thead className="bg-brand-background-1 text-brand-grey-2 font-medium text-xs whitespace-nowrap">
          <tr>
            <th className="flex gap-3 tb-pry">
              <input type="checkbox" className="block rounded-md" />
              Invoice
              <FiArrowDown className="block" />
            </th>
            <th className="tb-pry">Amount</th>
            <th className="tb-pry">Date</th>
            <th className="tb-pry">Status</th>
            <th className="tb-pry">User on plan</th>
          </tr>
        </thead>
        <tbody className="bg-white pb-5 text-sm text-brand-grey-2">
          {billing_data.map((bill, index) => {
            return (
              <tr key={index} className="border-b  border-brand-grey-4">
                <td className="flex items-center tb-pry text-brand-dark-1 font-medium">
                  <input type="checkbox" className="rounded-md mr-3" />
                  {bill.invoice}
                </td>
                <td className="tb-pry"> {bill.amount}</td>
                <td className="tb-pry">{bill.date}</td>
                <td className="tb-pry">
                  <div className="flex justify-center items-center bg-brand-background-3 py-[2px] pr-2 pl-[6px] rounded-2xl border-none text-brand-card-5 text-xs font-medium">
                    <FiCheck className="block" />
                    {bill.status}
                  </div>
                </td>
                <td className="pl-6 pr-0 py-2">
                  <StackAvatar users={bill.users} />
                </td>
                <td className="pl-10 md:pl-6 pr-6 py-2">
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

