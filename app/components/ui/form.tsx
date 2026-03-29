import { useState } from "react";
import CustomInput from "../customInput";
import CustomSelect from "../customSelect";
import Button from "../button";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function Form() {
  const [service, setService] = useState("");
  const serviceOptions = [
    { value: "insurance", label: "WareHousing Services" },
    { value: "debt", label: "Sea Transportation Services" },
    { value: "retirement", label: "Air Freight Services" },
  ];
  return (
    <>
      <div className="mb-12">
        <h3 className="md:text-2xl mt-6 lg:mt-0 text-xl font-black text-slate-900 tracking-tight flex items-center gap-3">
          <MessageSquare className="text-purple-900" />
          Configure Your Request
        </h3>
        <p className="text-slate-500 mt-2">
          Fill out the parameters below for a personalized quote.
        </p>
      </div>
      <form className="space-y-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {/* Full Name */}
          <div className="flex flex-col">
            <CustomInput
              label="Full name"
              placeholder="Enter your FirstName"
              required={true}
            />
          </div>

          <div>
            <CustomInput
              label="LastName"
              placeholder="Enter your LastName"
              required={true}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {/* Email */}
          <div>
            <CustomInput
              label="Email"
              placeholder="Enter your Email Address"
              required={true}
            />
          </div>
          {/* phone */}
          <div className="flex flex-col">
            <CustomInput
              label="Phone Number"
              placeholder="Enter your Phone Number"
              required={true}
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <CustomSelect
            label="Select Service"
            value={service}
            options={serviceOptions}
            onChange={(val) => setService(val)}
            required={true}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-[12px] font-semibold text-gray-900 mb-1">
            Your Message
          </label>

          <textarea
            name="message"
            rows={4}
            placeholder="How can we help you?"
            className="focus:border-[2px] border-[1px] border-[#d8dadc] p-2 focus:border-[#581c87] outline-none resize-none rounded-[8px] hover:border-[#581c87]"
          />
        </div>

        {/* Submit */}
        <div className="mt-8">
          <Button variant="primary" className="gap-2.5 w-full sm:w-auto">
            <span>Submit Request</span>
            <ArrowRight size={14} />
          </Button>
        </div>
      </form>
    </>
  );
}
