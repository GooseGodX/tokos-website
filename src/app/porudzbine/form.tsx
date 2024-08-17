"use client";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const orderSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Product description is required"),
  category: z.string().min(1, "Product category is required"),
  price: z.number().min(0, "Product price must be a positive number"),
  addedIngredients: z
    .array(
      z.object({
        name: z.string(),
        isAlergen: z.boolean(),
      }),
    )
    .min(1, "At least one ingredient must be selected"),
  images: z.array(z.string()),
});

export type OrderFormInputs = z.infer<typeof orderSchema>;

export default function Form() {
  const [scheduleDelivery, setScheduleDelivery] = useState(false);

  const paymentMethod = scheduleDelivery ? "cash-on-delivery" : "in-store-cash";

  const methods = useForm<OrderFormInputs>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      price: 0,
      addedIngredients: [],
      images: [],
    },
  });

  return (
    <Card className="w-full lg:max-w-2xl p-6 bg-lightMode-background dark:bg-darkMode-background text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
      <CardHeader className="mb-6">
        <CardTitle className="text-2xl font-bold">
          Informacije o dostavi
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label
              htmlFor="full-name"
              className="text-lg font-medium text-gray-700 dark:text-gray-200"
            >
              Ime i prezime
            </Label>
            <Input
              id="full-name"
              placeholder="Unesite vaše puno ime"
              className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-darkMode-surface text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-50"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-lg font-medium text-gray-700 dark:text-gray-200"
            >
              Broj telefona
            </Label>
            <Input
              id="phone"
              placeholder="Unesite vaš broj telefona"
              className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-darkMode-surface text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-50"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-lg font-medium text-gray-700 dark:text-gray-200"
            >
              Email
            </Label>
            <Input
              id="email"
              placeholder="Unesite vaš email"
              className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-darkMode-surface text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-50"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="city"
              className="text-lg font-medium text-gray-700 dark:text-gray-200"
            >
              Grad
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <Input
                    id="city"
                    placeholder="Unesite vaš grad"
                    className={`p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-darkMode-surface text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-50 ${
                      !scheduleDelivery ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    disabled={!scheduleDelivery}
                  />
                </TooltipTrigger>
                {!scheduleDelivery && (
                  <TooltipContent>
                    <p>Ovo polje je onemogućeno dok nije zakazana dostava</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label
              htmlFor="address"
              className="text-lg font-medium text-gray-700 dark:text-gray-200"
            >
              Adresa
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <Input
                    id="address"
                    placeholder="Unesite vašu adresu"
                    className={`p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-darkMode-surface text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-50 ${
                      !scheduleDelivery ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    disabled={!scheduleDelivery}
                  />
                </TooltipTrigger>
                {!scheduleDelivery && (
                  <TooltipContent>
                    <p>Ovo polje je onemogućeno dok nije zakazana dostava</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="zip"
              className="text-lg font-medium text-gray-700 dark:text-gray-200"
            >
              Poštanski broj
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <Input
                    id="zip"
                    placeholder="Unesite vaš poštanski broj"
                    className={`p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-darkMode-surface text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-50 ${
                      !scheduleDelivery ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    disabled={!scheduleDelivery}
                  />
                </TooltipTrigger>
                {!scheduleDelivery && (
                  <TooltipContent>
                    <p>Ovo polje je onemogućeno dok nije zakazana dostava</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Label
              htmlFor="schedule-delivery"
              className="text-lg font-medium text-gray-700 dark:text-gray-200"
            >
              Zakazivanje dostave
            </Label>
            <Switch
              id="schedule-delivery"
              checked={scheduleDelivery}
              onCheckedChange={setScheduleDelivery}
              className="bg-gray-300 dark:bg-gray-700 focus:ring-0 focus:ring-blue-500"
            />
          </div>
          {scheduleDelivery && (
            <div className="flex flex-col space-y-2">
              <Label className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Datum i vreme
              </Label>
              <DateTimePicker
                label="M/D/Y : H/M"
                ampm={true}
                className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-lightMode-surface dark:bg-lightMode-secondary text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <Label
            htmlFor="payment-method"
            className="text-lg font-medium text-gray-700 dark:text-gray-200"
          >
            Način plaćanja
          </Label>
          <RadioGroup value={paymentMethod} className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="online-payment"
                id="online-payment"
                disabled
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-not-allowed">
                    <Label
                      htmlFor="online-payment"
                      className="text-gray-500 dark:text-gray-500 cursor-not-allowed"
                    >
                      Online Plaćanje
                    </Label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Uskoro</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              {scheduleDelivery ? (
                <>
                  <RadioGroupItem
                    value="cash-on-delivery"
                    id="cash-on-delivery"
                  />
                  <Label
                    htmlFor="cash-on-delivery"
                    className="text-gray-700 dark:text-gray-200"
                  >
                    Plaćanje pouzećem
                  </Label>
                </>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex gap-1 items-center text-center cursor-not-allowed">
                      <RadioGroupItem
                        value="cash-on-delivery"
                        id="cash-on-delivery"
                        disabled
                      />
                      <Label
                        htmlFor="cash-on-delivery"
                        className="text-gray-500 dark:text-gray-500 cursor-not-allowed"
                      >
                        Plaćanje pouzećem
                      </Label>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Samo za porudžbine</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <div className="flex items-center space-x-2">
              {scheduleDelivery ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="flex gap-1 items-center text-center cursor-not-allowed">
                      <RadioGroupItem
                        value="in-store-cash"
                        id="in-store-cash"
                        disabled
                      />
                      <Label
                        htmlFor="in-store-cash"
                        className="text-gray-500 dark:text-gray-500 cursor-not-allowed"
                      >
                        U Prodavnici
                      </Label>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Zakazali ste porudzbinu, plaćanje je moguce pouzećem
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <>
                  <RadioGroupItem
                    disabled={scheduleDelivery}
                    value="in-store-cash"
                    id="in-store-cash"
                  />
                  <Label
                    htmlFor="in-store-cash"
                    className="text-gray-700 dark:text-gray-200"
                  >
                    U Prodavnici
                  </Label>
                </>
              )}
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="pt-6">
        <Button
          variant="default"
          className="w-full py-3 bg-green-500 dark:bg-green-700 text-white font-semibold rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 transition-all"
        >
          Potvrdi narudžbinu
        </Button>
      </CardFooter>
    </Card>
  );
}
