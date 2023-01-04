import MasterCard from "../Icons/MasterCard";
import VisaCard from "../Icons/VisaCard";

type Props = {
  variant: "visa" | "master";
  endNumbers:string,
  expiration:string
};

export default function PaymentMethod(props: Props) {
  return (
    <div
      className={`${
        props.variant === "visa" ? "bg-brand-background-2" : "bg-white"
      } flex gap-5 border border-brand-border-1 rounded-lg w-full mb-3 p-4 content-center`}
    >
      {props.variant === "visa" ? <VisaCard /> : <MasterCard />}

      <div className="flex content-between justify-between w-full">
        <div>
          <h5
            className={`${
              props.variant === "visa"
                ? "text-brand-card-1"
                : "text-brand-dark-2"
            } text-sm font-medium `}
          >
            {`${props.variant === "visa" ? "Visa" : "Mastercard"} ending in ${
              props.endNumbers
            }`}
          </h5>
          <h6
            className={`${
              props.variant === "visa"
                ? "text-brand-card-3 mb-2"
                : "text-brand-grey-2"
            } text-sm font-medium`}
          >
            Expiry {props.expiration}
          </h6>

          <h6
            className={`${
              props.variant === "visa"
                ? "text-brand-card-4"
                : "text-brand-grey-2"
            } text-sm font-medium `}
          >
            Set as default <span className="text-brand-card-2 ml-3">Edit</span>
          </h6>
        </div>
        <div>
          <input
            type="checkbox"
            className=" rounded-full focus:ring-0 text-brand-card-2"
            defaultChecked={props.variant === "visa"}
          />
        </div>
      </div>
    </div>
  );
}
