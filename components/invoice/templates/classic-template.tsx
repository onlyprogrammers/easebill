import React from 'react';

// Ensure formatDate function is imported or defined
import { formatDate } from '../formatDate'; // Adjust the import path as necessary

// Define the ClassicTemplateProps interface
interface ClassicTemplateProps {
  invoiceData: {
    invoiceDate: string;
    dueDate: string;
  };
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ invoiceData = { invoiceDate: "", dueDate: "" } }) => {
  const { invoiceDate, dueDate } = invoiceData;

  // Memoize formatted dates to avoid recalculating on every render
  const formattedInvoiceDate = React.useMemo(() => formatDate(invoiceDate), [invoiceDate]);
  const formattedDueDate = React.useMemo(() => formatDate(dueDate), [dueDate]);

  return (
    <>
      <div className="flex justify-end gap-8">
        <span className="font-medium">Invoice Date:</span>
        <span>{formattedInvoiceDate}</span>
      </div>
      <div className="flex justify-end gap-8">
        <span className="font-medium">Due Date:</span>
        <span>{formattedDueDate}</span>
      </div>

      {/* Later in the code: */}
      <span>Paid ({formattedInvoiceDate})</span>
    </>
  );
};

export default ClassicTemplate;