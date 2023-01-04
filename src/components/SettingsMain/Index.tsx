import BillingHistory from "./BillingHistory";
import ButtonGroup from "./ButtonGroup";
import PaymentMethod from "./PaymentMethod";
import { FiDownloadCloud, FiPlus } from "react-icons/fi";
import MasterCard from "../Icons/MasterCard";
import VisaCard from "../Icons/VisaCard";
import React from "react";
import { FiMail } from "react-icons/fi";

type Props = {};

export default function Index({}: Props) {
  const [paymentMethod, setPaymentMethod] = React.useState(payment_method_data);
  return (
    <div className="py-9 pl-3 pr-5 w-full">
      <h1 className="text-brand-dark-1 md:text-3xl mb-1">Settings</h1>
      <h4 className="text-2xl text-brand-grey-2 md:text-base">
        Manage your team and preferences here.
      </h4>
      <ButtonGroup />
      <div className="mb-5">
        <h3 className="text-lg text-brand-dark-1 font-medium mb-1">
          Payment Method
        </h3>
        <h4 className="text-brand-grey-2 text-sm">
          update your billing details and address.
        </h4>
      </div>
      <hr className="bg-brand-grey-4" />
      <section className="mt-6 w-full">
        <div className="flex md:flex-row flex-col gap-20 w-full">
          <div>
            <h3 className="text-brand-dark-2 text-sm font-medium">
              Contact Email
            </h3>
            <h4 className="text-brand-grey-2 text-sm font-normal">
              where should invoices be sent?
            </h4>
          </div>
          <div>
            <div className="flex gap-2 mb-4">
              <div>
                <input
                  type="checkbox"
                  className=" rounded-full focus:ring-0 text-brand-card-2"
                />
              </div>
              <div>
                <h4 className="text-brand-dark-2 font-medium text-sm mb-3">
                  send to my account email
                </h4>
                <h5 className="text-brand-grey-2 font-meduim text-sm">
                  olivia@untitledui.com
                </h5>
              </div>
            </div>

            <div className="flex gap-2">
              <div>
                <input
                  type="checkbox"
                  className=" rounded-full focus:ring-0 text-brand-card-2"
                />
              </div>
              <div className="w-full">
                <h4 className="text-brand-dark-2 font-medium text-sm mb-3">
                  send to my alternative email
                </h4>
                <div className="">
                  {/* <input
                    type="text"
                    placeholder="billling@untitledui.com"
                    className="bg-white border border-brand-grey-3 rounded-lg py-1 px-2"
                  /> */}

                  <label className="relative block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <FiMail className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-2 text-brand-grey-2" />
                    </span>
                    <input
                      className="w-full bg-white border border-slate-300 rounded-lg py-2 pl-8 pr-4 focus:outline-none md:h-11"
                      placeholder="billling@untitledui.com"
                      type="text"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-brand-grey-4 my-5" />
        <div className="flex md:flex-row flex-col gap-20 w-full">
          <div>
            <h3 className="text-brand-dark-2 text-sm font-medium">
              Card details
            </h3>
            <h4 className="text-brand-grey-2 text-sm font-normal">
              select default payment method.
            </h4>
          </div>
          <div className="w-full">
            {paymentMethod.map((paymentMethod, index) => (
              <PaymentMethod
                key={index}
                variant={paymentMethod.variant as "visa" | "master"}
                expiration={paymentMethod.expiration}
                endNumbers={paymentMethod.endNumbers}
              />
            ))}

            <div
              className="flex items-center gap-3 mt-4 text-brand-grey-2 cursor-pointer"
              onClick={() =>
                paymentMethod.length < 3
                  ? setPaymentMethod([...paymentMethod, paymentMethod[0]])
                  : null
              }
            >
              <FiPlus></FiPlus>
              <h6 className="">Add new payment method</h6>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between mb-7 mt-8">
          <h3 className="text-brand-dark-1 text-lg font-medium">
            Billing History
          </h3>
          <button className="flex justify-between gap-3 items-center border px-4 py-2 rounded-lg border-brand-grey-3">
            <span className="block">
              <FiDownloadCloud size="17" />
            </span>
            Download all
          </button>
        </div>
        <BillingHistory />
      </section>
    </div>
  );
}

const payment_method_data = [
  { variant: "visa", endNumbers: "1234", expiration: "06/2024" },
  { variant: "master", endNumbers: "1234", expiration: "06/2024" },
];
