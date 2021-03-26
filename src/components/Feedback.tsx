import "rc-slider/assets/index.css";
import React from "react";
import { Badge, Button, Textarea, Label } from "@windmill/react-ui";
import { Form, useFormik } from "formik";
import Slider from "rc-slider";

const Feedback: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      response: "",
      rating1: 0,
      rating2: 0,
      rating3: 0,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-full h-full flex justify-center content-center items-center">
      <div className="my-12 mx-20 w-1/2">{/* (Left part) */}</div>
      <div className="mr-8 w-1/2 flex-reverse justify-center content-center items-center">
        <div className="w-full shadow my-12 rounded-md p-12 bg-white">
          <h1 className="text-3xl">Satoshi Nakamoto</h1>
          <div className="my-4 flex-wrap">
            <Badge className="text-lg bg-gray-200 p-2 mx-2" type="neutral">
              Robinhood
            </Badge>
            <Badge className="text-lg bg-gray-200 p-2 mx-2" type="neutral">
              Pround Day Trader
            </Badge>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full shadow my-12 rounded-md pt-8 pb-16 bg-white">
            <h1 className="ml-8 font-normal text-xl mb-4">Rating</h1>
            <div className="w-128 mx-20">
              <span>Visual</span>
              <Slider
                className="mx-4 mt-2"
                min={1}
                max={5}
                defaultValue={3}
                marks={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }}
                step={1}
              />
            </div>
            <div className="w-128 mx-20 mt-12">
              <span>Content</span>
              <Slider
                className="mx-4 mt-2"
                min={1}
                max={5}
                defaultValue={3}
                marks={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }}
                step={1}
              />
            </div>
            <div className="w-128 mx-20 my-12">
              <span>Relevance</span>
              <Slider
                className="mx-4 mt-2"
                min={1}
                max={5}
                defaultValue={3}
                marks={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }}
                step={1}
              />
            </div>
          </div>

          <div className="w-full my-12">
            <Label>
              <Textarea
                css=""
                className="h-48 w-full"
                id="response"
                name="response"
                placeholder="Write down your response"
                onChange={formik.handleChange}
                value={formik.values.response}
              />
            </Label>

            <Button className="float-right my-8" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
