import "rc-slider/assets/index.css";

import { Form, useFormik } from "formik";
import Slider from "rc-slider";
import React from "react";

import { Badge, Button, Label, Textarea } from "@windmill/react-ui";

import PDFView from "./PDFview";
import Header from "./Header";

// TODO: Placeholder pdf can be deleted when no longer needed
const contents =
  "%PDF-1.3\r\n%� ���\r\n\r\n1 0 obj\r\n<<\r\n/Type /Catalog\r\n/Outlines 2 0 R\r\n/Pages 3 0 R\r\n>>\r\nendobj\r\n\r\n2 0 obj\r\n<<\r\n/Type /Outlines\r\n/Count 0\r\n>>\r\nendobj\r\n\r\n3 0 obj\r\n<<\r\n/Type /Pages\r\n/Count 2\r\n/Kids [ 4 0 R 6 0 R ] \r\n>>\r\nendobj\r\n\r\n4 0 obj\r\n<<\r\n/Type /Page\r\n/Parent 3 0 R\r\n/Resources <<\r\n/Font <<\r\n/F1 9 0 R \r\n>>\r\n/ProcSet 8 0 R\r\n>>\r\n/MediaBox [0 0 612.0000 792.0000]\r\n/Contents 5 0 R\r\n>>\r\nendobj\r\n\r\n5 0 obj\r\n<< /Length 1074 >>\r\nstream\r\n2 J\r\nBT\r\n0 0 0 rg\r\n/F1 0027 Tf\r\n57.3750 722.2800 Td\r\n( A Simple PDF File ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 688.6080 Td\r\n( This is a small demonstration .pdf file - ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 664.7040 Td\r\n( just for use in the Virtual Mechanics tutorials. More text. And more ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 652.7520 Td\r\n( text. And more text. And more text. And more text. ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 628.8480 Td\r\n( And more text. And more text. And more text. And more text. And more ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 616.8960 Td\r\n( text. And more text. Boring, zzzzz. And more text. And more text. And ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 604.9440 Td\r\n( more text. And more text. And more text. And more text. And more text. ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 592.9920 Td\r\n( And more text. And more text. ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 569.0880 Td\r\n( And more text. And more text. And more text. And more text. And more ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 557.1360 Td\r\n( text. And more text. And more text. Even more. Continued on page 2 ...) Tj\r\nET\r\nendstream\r\nendobj\r\n\r\n6 0 obj\r\n<<\r\n/Type /Page\r\n/Parent 3 0 R\r\n/Resources <<\r\n/Font <<\r\n/F1 9 0 R \r\n>>\r\n/ProcSet 8 0 R\r\n>>\r\n/MediaBox [0 0 612.0000 792.0000]\r\n/Contents 7 0 R\r\n>>\r\nendobj\r\n\r\n7 0 obj\r\n<< /Length 676 >>\r\nstream\r\n2 J\r\nBT\r\n0 0 0 rg\r\n/F1 0027 Tf\r\n57.3750 722.2800 Td\r\n( Simple PDF File 2 ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 688.6080 Td\r\n( ...continued from page 1. Yet more text. And more text. And more text. ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 676.6560 Td\r\n( And more text. And more text. And more text. And more text. And more ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 664.7040 Td\r\n( text. Oh, how boring typing this stuff. But not as boring as watching ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 652.7520 Td\r\n( paint dry. And more text. And more text. And more text. And more text. ) Tj\r\nET\r\nBT\r\n/F1 0010 Tf\r\n69.2500 640.8000 Td\r\n( Boring.  More, a little more text. The end, and just as well. ) Tj\r\nET\r\nendstream\r\nendobj\r\n\r\n8 0 obj\r\n[/PDF /Text]\r\nendobj\r\n\r\n9 0 obj\r\n<<\r\n/Type /Font\r\n/Subtype /Type1\r\n/Name /F1\r\n/BaseFont /Helvetica\r\n/Encoding /WinAnsiEncoding\r\n>>\r\nendobj\r\n\r\n10 0 obj\r\n<<\r\n/Creator (Rave \\(http://www.nevrona.com/rave\\))\r\n/Producer (Nevrona Designs)\r\n/CreationDate (D:20060301072826)\r\n>>\r\nendobj\r\n\r\nxref\r\n0 11\r\n0000000000 65535 f\r\n0000000019 00000 n\r\n0000000093 00000 n\r\n0000000147 00000 n\r\n0000000222 00000 n\r\n0000000390 00000 n\r\n0000001522 00000 n\r\n0000001690 00000 n\r\n0000002423 00000 n\r\n0000002456 00000 n\r\n0000002574 00000 n\r\n\r\ntrailer\r\n<<\r\n/Size 11\r\n/Root 1 0 R\r\n/Info 10 0 R\r\n>>\r\n\r\nstartxref\r\n2714\r\n%%EOF\r\n";

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
    <div>
      <Header title="Review" />
      <div className="flex space-x-6">
        <div className="w-1/2">
          <div className="border rounded-lg shadow-lg">
            <PDFView pdf={contents} />
          </div>
        </div>
        <div className="w-full">
          <div className="flex-reverse justify-center content-center items-center">
            <div className="border shadow-lg rounded-md p-5 bg-white">
              <h1 className="text-3xl">Satoshi Nakamoto</h1>
              <div className="my-4 flex-wrap">
                <Badge className="text-md bg-gray-200 p-2 mx-2" type="neutral">
                  Robinhood
                </Badge>
                <Badge className="text-md bg-gray-200 p-2 mx-2" type="neutral">
                  Pround Day Trader
                </Badge>
              </div>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="border shadow-lg my-12 rounded-md pt-8 pb-16 bg-white">
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

            <div className="my-12">
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
    </div>
  );
};

export default Feedback;
