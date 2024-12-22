"use client";
import { useMemo } from "react";
import { Control, useController } from "react-hook-form";

interface IDate {
  control: Control<IUserInfoForm>;
  name: "dateOfDelivery";
}
export const DeliveryDate: React.FC<IDate> = ({ name, control }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  const selectDate = (date: string) => {
    if (date === field.value) return;
    field.onChange(date);
  };

  const days = useMemo(() => {
    const today = new Date();
    const deliveryDate = new Date(today);
    return [3, 4, 5, 6, 7].map((item) => {
      deliveryDate.setDate(today.getDate() + item);
      let date = deliveryDate.toLocaleDateString("fa-IR-u-nu-latn").split("/");
      date = date.map((item) => item.padStart(2, "0"));
      return {
        day: deliveryDate.toLocaleDateString("fa-IR", {
          weekday: "long",
          month: "long",
          day: "numeric",
        }),
        date: date.join("-"),
      };
    });
  }, []);
  return (
    <div className="sm:col-span-2">
      <label className="text-black/60 font-semibold text-sm md:text-base inline-block mb-1 min-w-36">
        زمان تحویل
      </label>
      <div className="flex flex-wrap justify-center gap-4">
        {days.map((item, index) => (
          <div
            onClick={() => selectDate(item.date)}
            key={index}
            className={`border ${
              field.value === item.date
                ? "border-green_app bg-green_app/30"
                : "border-gray-200 bg-gray-50 hover:bg-gray-100  cursor-pointer"
            } text-center py-2 px-3 text-gray-800 rounded-md `}
          >
            <h2 className="w-[3.7rem]">{item.day.split(" ")[0]}</h2>
            <h2 className="w-[3.7rem]">
              {item.day.slice(item.day.indexOf(" "))}
            </h2>
          </div>
        ))}
      </div>
      {error && (
        <p className="text-sm font-semibold text-red-400 mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};
