import { plans } from "../Data/Subscription";
import { FaRegCheckCircle } from "react-icons/fa";

function SubscriptionCard() {
  return (
    <section id="pricing" className="flex flex-col items-center justify-center text-center p-10">
      <h1 className="capitalize text-indigo-600 text-3xl font-semibold">
        Subscriptions
      </h1>
      <h2 className="font-extrabold text-3xl mb-8 pt-3">
        Flexible pricing as per you growth
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center mt-10 max-w-screen-xl">
        {plans.map((plan, index) => (
          <div key={index} className="flex flex-col justify-between relative border rounded-lg h-full p-6 bg-white/20 backdrop-blur-lg text-left hover:shadow-lg">
            {plan.isPopular && <div className="absolute -top-1 left-0 bg-indigo-500 text-white px-2 py-1 rounded-t-lg w-full text-center">Popular</div>}
            <div>
              <div className="inline-flex items-end">
                <h1 className="font-extrabold text-3xl">${plan.price}</h1>
                <span className="ml-3 text-gray-600 align-bottom">/month</span>
              </div>
              <h2 className="font-bold text-xl my-2">{plan.title}</h2>
              <p>{plan.description}</p>
              <div className="border-t border-gray-400 opacity-25 my-3 flex-grow"></div>
              <ul>
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex flex-row items-center text-gray-700 gap-2 my-2"
                  >
                    <div className="flex items-center justify-center w-4 h-4 bg-indigo-600 rounded-full">
                      <FaRegCheckCircle className="text-white outline-indigo-900  rounded-full" />
                    </div>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <button className="bg-indigo-500 hover:bg-indigo-600 py-2 mt-3 rounded-lg text-white w-full">
                Select plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SubscriptionCard;


